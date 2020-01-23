/*
* @file: BalancedParenthesesTest.js
* @description: Testing for Palindrome Checker
*
* @author: Rima Das <rdas5969@gmail.com>
* @version: 1.0
* @date: 23/1/2020
*/

const assert = require('chai').assert;
const read = require('../PalindromeChecker');

describe('Palindrome Testing', function () {
    
    it('String length is not valid', function () {
        let result = read[0];
        assert.isTrue(result > 2, 'length should be greater than 2');
    });

    it('input cannot be null', function () {
        var result = read[0];
        assert.isNotNull(result,'','cannot be null')
    });
})