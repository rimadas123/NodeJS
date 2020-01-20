/*
* @file: 2D_Array.js
* @description: A library for reading in 2D arrays of integers, doubles, or booleans from
*                standard input and printing them out to standard output.
*
* @author: Rima Das
* @version: 1.0
* @date: 13/1/2020
*/

const read = require('readline-sync');
const input = require('../Algorithm_programs/Utility');

let rows = Number(read.question("Enter the rows: "));
let cols = Number(read.question("Enter the columns: "));

let output = input.twoDimensional(rows,cols);
return output;
