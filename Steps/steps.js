const assert = require('assert');
const defineSupportCode = require('cucumber').defineSupportCode;
const pactum = require('pactum');
require('dotenv').config()

defineSupportCode(function ({ Given, Then, When }) {
  let answer = 0
  let URL = "";
  let requisition = ""
  let ISBN = ""
  let accessAPISwagger = false

  Given("I access the API Swagger", () => {
    accessAPISwagger = true
  });

  When("I want to find all Books", () => {
    URL = "/BookStore/v1/Books";

  })

  Then("I should receive all Books", async () => {
    assert.equal(await verifyGet(), "All Books Received")
  })

  const verifyGet = async () => {
    let result
    if (accessAPISwagger) {
      result = await pactum.spec().get(process.env.BASE_URL + URL)
      if (result.body.books) { return "All Books Received" }
      else { return undefined }
    }
    else { return undefined }

  }


  When("I want to find a book with ISBN {string}", (inputISBN) => {
    URL = "/BookStore/v1/Book?ISBN=" + inputISBN
  })

  Then("I should receive the book with ISBN {string}", async (outputISBN) => {
    assert.equal(await verifyBookISBN(), outputISBN)
  })

  Then("I should not receive the book with ISBN {string}", async (outputISBN) => {
    assert.notEqual(await verifyBookISBN(), outputISBN)
  })

  const verifyBookISBN = async () => {
    let result
    if (accessAPISwagger) {
      result = await pactum.spec().get(process.env.BASE_URL + URL)

      // console.log("result.body.isbn", result.body)
      if (result.body) { return result.body.isbn }
      else { return undefined }
    }
    else { return undefined }

  }

});


