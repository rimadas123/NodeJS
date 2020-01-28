/*
* @file: BinarySearchTreeTest.js
* @description: Testing for Binary Search Tree
*
* @author: Rima Das <rdas5969@gmail.com>
* @version: 1.0
* @date: 23/1/2020
*/

const assert = require('chai').assert;
let read = require('../BinarySearchTree');

describe('Binary Search Tree', function() {
    
    /**
    * @description this method is for achecking whether the nodes are undefined or not
    * @return number
    */
    it('Number of nodes cannot be undefined', function () {
        let result = read[0];
        console.log(result); 
        assert.exists(result,'expected to be a number')
    });

    /**
    * @description this method is for achecking whether the nodes are greater than or equal to 1 or not
    * @return number
    */
    it('Number of nodes are not valid', function () {
        let result = read[0];
        console.log(result); 
        assert.isAtLeast(result,1,'Nodes should be greater than equal to 1')
    });

    /**
    * @description this method is for achecking whether the nodes are less than or equal to 85 or not
    * @return number
    */
    it('Number of nodes are not valid', function () {
        let result = read[0];
        console.log(result); 
        assert.isAtMost(result,85,'Nodes should be less than or equal to 85')
    });

    /**
    * @description this method is for achecking whether the result matches that certain limit
    * @return number
    */
    it('Result cannot exceed beyond 1.0633537029222739e+48 ', function () {
        let result = read[1];
        console.log(result); 
        assert.isAtMost(result,1.0633537029222739e+48, 'cannot exceed beyond this number')
    });
})