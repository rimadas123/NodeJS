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
       * @description This Test is for temperaure should be number 
       * @returns true or false 
       */
    it('temperatuire should number ', function () {
        assert.isNumber(result[1], 'Number');
        console.log(result[1]);

    });
});