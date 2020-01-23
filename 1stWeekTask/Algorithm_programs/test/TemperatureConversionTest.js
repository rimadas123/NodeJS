/*
* @file: TemperatureConversionTest.js
* @description: To find temperatures in both celsius and farenheit
*               
* @author: Rima Das <rdas5969@gmail.com>
* @version: 1.0
* @date: 18/1/2020
*/

var assert = require('chai').assert;
var result = require('../TemperatureConversion');

describe('Temperature Conversion', function () {
       /*
       * @description This Test is for checking if the input is a number or not
       * @returns true or false 
       */
    it('temperature cannot be null ', function () {
        var t = result[0];
        assert.notEqual(t,'','cannot be null');
        console.log(t);
    });

});