/*
* @file: RegularExpTest.js
* @description: Testing for Regular Expression
*
* @author: Rima Das <rdas5969@gmail.com>
* @version: 1.0
* @date: 28/1/2020
*/

const assert = require('chai').assert;
let regrex = require('../RegularExpression/Utility');
let obj = new regrex.Utility();

describe("Regular Expression Test", function () {
   it("strings are equal",function () {
       let validName = obj.validFullName('rima das');
       assert.equal(validName,true);
   })
   it("check if it is a string",function () {
    let validName = obj.validFullName('rima das');
    assert.isString(validName,true);
})
})