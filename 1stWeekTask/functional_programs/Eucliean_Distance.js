// Calculate Eucliean Distance

var read = require('readline-sync');
var x1 = Number(read.question("enter the value for x1 co-ordinate: "));
var y1 = Number(read.question("enter the value for y1 co-ordinate: "));
var x2 = Number(read.question("enter the value for x2 co-ordinate: "));
var y2 = Number(read.question("enter the value for y2 co-ordinate: "));

var a = x1-x2;
var b = y1-y2;

var result = Math.sqrt(Math.pow(a,2)+ Math.pow(b,2));
console.log(result);
