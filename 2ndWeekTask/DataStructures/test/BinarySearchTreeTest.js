/*
* @file: BinarySearchTreeTest.js
* @description: Testing for Binary Search Tree
*
* @author: Rima Das <rdas5969@gmail.com>
* @version: 1.0
* @date: 23/1/2020
*/

const assert = require('chai').assert;
const read = require('../BinarySearchTree');
describe('Binary Search Tree', function() {
    
    it('Number of nodes are valid', function () {
        let result = read[0];
        assert.isTrue(result >=1 && result <=85, 'Nodes should be between 1 to 85')
    });
})