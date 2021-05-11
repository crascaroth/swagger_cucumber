const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');


function incomeBooks(requisition, URL) {
    const pactum = require('pactum')

    requisition = requisition.toLower()
    console.log(requisition)
    let result
  
    switch (requisition) {

        case "get":
            result = await pactum.spec().get(process.env.BASE_URL + URL)
            break;

        case "put":
            result = await pactum.spec().put(process.env.BASE_URL + URL)
            break;

        default:
            new Error("Not a valid Requisition");
            break;
    }

    // if (result === books) {
    //     return "books";
    // } else {
    //     return "No";
    // }
}

Given('{string}', function (URL) {
    this.requisition = URL;
});

When('I use {string}', function (requisition) {
    this.actualAnswer = incomeBooks(this.requisition, this.URL);
});

Then('I should receive {string}', function (expectedAnswer) {
    assert.strictEqual(this.actualAnswer, expectedAnswer);
});