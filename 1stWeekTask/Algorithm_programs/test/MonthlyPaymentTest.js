/*
* @file: MonthlyPaymentTest.js
* @description: To validate all possibilities 
* @author: Rima Das <rdas5969@gmail.com>
* @version: 1.0
* @date: 18/1/2020
*/

const assert = require('chai').assert;
const result = require('../MonthlyPayment');

describe('MonthlyPayment', function () {
       /*
       * @description This Test is for valid principal  
       * @returns true or false 
       */
    it('principle is valid', function () {
        var p = result[0];
        assert.isTrue(p > 0, 'principal value should not be negative');
    });
       /*
       * @description This Test is for Valid rate of user entered
       * @returns true or false 
       */
    it('rate is valid its positive ', function () {
        var rate = result[1];
        assert.isTrue(rate >= 0, ' rate of interest should not be a negative value');
    });
       /*
       * @description This Test is for checking valid years number
       * @returns true or false
       */
    it('Years Number is valid  is positive  ', function () {
        var t = result[2];
        assert.isTrue(t > 0, ' year should be positive number ');
    });
       /*
       * @description This Test is for output of program shoiuld be positive number
       * @returns true or false 
       */
    it('payment should not be negetive or Null', function () {
        var payment = result[3];
        assert.isTrue(payment >= 0, ' Final output should be positive number ');
    });
});