/*
* @file: RegularExpTest.js
* @description: Testing for Regular Expression
*
* @author: Rima Das <rdas5969@gmail.com>
* @version: 1.0
* @date: 28/1/2020
*/

const assert = require('chai').assert;
let regrex = require('../RegularExpression/Utility').default;
let obj = new regrex.Utility();

describe("Regular Expression Test for name", function () {

   it("strings are equal",function () {
       let validName = obj.validName('rima');
       assert.equal(validName,true);
   })

   it("check if it is a string",function () {
    let validName = obj.validName('rima'); 
    assert.isTrue(validName,true);
    })

    it("check if the string pattern is equal or not",function () {
        let validName = obj.validName('rima');      
        assert.isNotString(validName,true);
    })
});

describe("Regular Expression Test for mobile number", function () {

    it("mobile number is equal",function () {
        let validMobileNum = obj.validMobileNum('8998888238');
        assert.equal(validMobileNum,true);
    })
 
    it("check if the number returns true or not",function () {
     let validMobileNum = obj.validMobileNum('8998888238'); 
     assert.isTrue(validMobileNum,true);
     })
 
     it("check if it is a number or not",function () {
         let validMobileNum = obj.validMobileNum('8998888238');      
         assert.isNotNumber(validMobileNum,true);
     })
 });