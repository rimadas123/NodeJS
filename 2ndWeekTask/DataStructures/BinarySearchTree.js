/*
* @file: BinarySearchTress.js
* @description: find number of nodes using binary search tree
*
* @author: Rima Das <rdas5969@gmail.com>
* @version: 1.0
* @date: 22/1/2020
*/

function binary() {
    try {
        let bin = require("../DSUtil/DSUtility");
        let read = require("readline-sync");

        let nodes = read.questionInt("Enter no. of nodes: ");
        // checks whether the nodes is not an alphanumeric or less than 1
        if(isNaN(nodes) || nodes < 1) {
            console.log("Enter valid number of nodes");
        } else {
            let result = bin.binaryTree(nodes);
        }
    } catch (error) {
        return error;
    }
}

binary();