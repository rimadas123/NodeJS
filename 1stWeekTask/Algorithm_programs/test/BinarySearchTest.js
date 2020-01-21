/*
* @file: BinarySearchTest.js
* @description: To Search the element in array using binary search method
*               of that particular string
* @author: Rima Das <rdas5969@gmail.com>
* @version: 1.0
* @date: 19/1/2020
*/

const assert = require('chai').assert;
const result = require('../BinarySearch');

describe('BinarySearch', function () {

       /*
       * @description This Method test Array size is valid
       * @returns true or false 
       */
    it('Array size is valid', function () {
        let format = /^[0-9]+$/;

        let size = result[0];
        assert.isTrue(size > 0, ' array size is not valid its should be greater than zero ');
    });

       /*
       * @description This TestCase is for search element not found it return true  
       * @returns true or false 
       */
    it('search element not found', function () {
        let result = result[1];
        assert.notEqual(result, -1, 'search element is not found:');
    });

       /*
       * @description This TestCase search el;emt found then returns true 
       * @returns true or false 
       */
      it('search element not found', function () {
        let result = result[1];
        assert.equal(result, -1, 'search Element is found :');
    });
});

