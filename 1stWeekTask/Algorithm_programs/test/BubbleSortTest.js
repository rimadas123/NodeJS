/*
* @file: BubbleSortTest.js
* @description: To Sort the element in array using bubble sort method
*               string value
* @author: Rima Das <rdas5969@gmail.com>
* @version: 1.0
* @date: 18/1/2020
*/
const assert = require('chai').assert;
const utility = require('../BubbleSort');

describe('Bubble sort',function(){
    /*
     * @description This Method Test Array size is valid or not 
     * @returns true or false 
     */
    it('Array size is valid', function(){
        assert.isTrue(result > 1,'size should be more than 1')
    });
    /*
     * @description This Method Test Array size is valid or not 
     * @returns true or false 
     */
    it('Array size not valid', function(){
        assert.isTrue(result < 1,'array size is valid')
        done();
    });
});