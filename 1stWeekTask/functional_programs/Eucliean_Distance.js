// Calculate Eucliean Distance

const read = require('readline-sync');
const x1 = read.questionInt("enter the value for x1 co-ordinate: ");
const y1 = read.questionInt("enter the value for y1 co-ordinate: ");
const x2 = read.questionInt("enter the value for x2 co-ordinate: ");
const y2 = read.questionInt("enter the value for y2 co-ordinate: ");

let a = x1-x2;
let b = y1-y2;

const result = Math.sqrt(Math.pow(a,2)+ Math.pow(b,2));
console.log(result);
