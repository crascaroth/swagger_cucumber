const assert = require('assert');
const defineSupportCode = require('cucumber').defineSupportCode;
const pactum = require('pactum');
require('dotenv').config()

defineSupportCode(function ({ Given, Then, When }) {
  let answer = 0
  let URL = "";
  let requisition = ""
  let ISBN = ""

  Given("I have an url {string}", (input) => {
    URL = input;
  });

  When("I use {string}", (input) => {
    requisition = input;
  })

  Then("I should receive {string}", async (input) => {
    assert.equal(await verifyGet(), input)
  })

  const verifyGet = async () => {
    let result

    if (requisition === "get") {

      result = await pactum.spec().get(process.env.BASE_URL + URL)

      if (typeof result.body.books === "object") { return "array" }
      else { return undefined }

    }
    else { return undefined }
  }


  Given("I have an url {string} with ISBN {string}", (inputURL, inputISBN) => {
    URL = inputURL
    ISBN = inputISBN
  })

  Then("I should receive a specific {string}", async (type) => {
    assert.equal(await verifyBookISBN(), type)
  })

  const verifyBookISBN = async () => {
    let result
    if (requisition === "get") {
      result = await pactum.spec().get(process.env.BASE_URL + URL + "?ISBN=" + ISBN)
      
      console.log("result.body.isbn",result.body.isbn)
      if(result.body.isbn === ISBN){ return "object"}
      else{ return undefined }
    }
    else { return undefined }

  }

});


