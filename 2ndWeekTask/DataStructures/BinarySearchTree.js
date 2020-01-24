/*
* @file: BinarySearchTress.js
* @description: To find number of nodes using binary search tree
*
* @author: Rima Das <rdas5969@gmail.com>
* @version: 1.0
* @date: 22/1/2020
*/

function binary() {
    try {
        var bin = require("../DSUtil/DSUtility");
        var read = require("readline-sync");

        var nodes = read.questionInt("Enter no. of nodes: ");
        
        // checks whether the nodes is not an alphanumeric or less than 1
        if(isNaN(nodes) || nodes < 1) {
            console.log("Enter valid number of nodes");
        } else {
            var result = bin.binaryTree(nodes);
        }
        return [nodes,result];
    } catch (error) {
        return error;
    }
}

module.exports = binary();