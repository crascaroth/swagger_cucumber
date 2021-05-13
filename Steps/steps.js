const assert = require('assert');
const defineSupportCode = require('cucumber').defineSupportCode;
const pactum = require('pactum');
require('dotenv').config()

defineSupportCode(function({ Given, Then, When }) {  
  let answer = 0
  let URL ="";
  let requisition =""

  Given("I have an url {string}", function(input) {
  URL = input;
  });

  When("I use {string}", function(input){
  requisition = input;
  })

  Then("I should receive {string}", async(input) => {   
   assert.equal(await verifyGet(URL,requisition), input)
  })

  const verifyGet = async (URL,requisition) => {
    let result

    if(requisition === "get"){
    
    result = await pactum.spec().get(process.env.BASE_URL + URL)
  

    // console.log("result", result.body.books)
    // console.log("TypeOfresult", typeof result.body.books)

    if(typeof result.body.books === "object") {return "array"}
    else { return undefined }

    }
    else { return undefined }
  }
 
 
 
  // Given('I start with {int}', function (input) {
  //   answer = input;
  // });
 
  // When('I add {int}', function (input) {
  //   answer = answer + input;
  // });
  // Then('I end up with {int}', function (input) {
  //   assert.equal(answer, input);
  // });

});


