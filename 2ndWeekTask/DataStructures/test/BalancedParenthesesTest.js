/*
* @file: BalancedParenthesesTest.js
* @description: Testing for Balanced Parentheses
*
* @author: Rima Das <rdas5969@gmail.com>
* @version: 1.0
* @date: 23/1/2020
*/

const assert = require('chai').assert;
let read = require('../BalancedParentheses');

describe('Balanced Parentheses Testing', function () {
    
    it('String should not be empty', function () {
        let result = read[0];
        console.log(result);
        assert.isNotEmpty(result,'','expected not to be empty')
    });

    it('Result cannot be null', function () {
        let result = read[1];
        console.log(result);
        assert.isNotNull(result,'','not a null')
    });

    it('Should return a boolean value', function () {
        let result = read[1];
        console.log(result);
        assert.isBoolean(result,'','expect a boolean value')
    });
})