// 2D Array

const read = require('readline-sync');
const input = require('../Algorithm_programs/Utility');

let rows = Number(read.question("Enter the rows: "));
let cols = Number(read.question("Enter the columns: "));

let output = input.twoDimensional(rows,cols);

