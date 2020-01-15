//Calculate Quadratic Equation 

var read = require("readline-sync");

var a = Number(read.question("Enter 1st value: "));
var b = Number(read.question("Enter 2nd value: "));
var c = Number(read.question("Enter 3rd value: "));

var delta = b*b - 4*a*c;
console.log(delta);

var Root_x1 = (-b + Math.sqrt(Math.pow(delta,2))/2*a);
console.log(Root_x1);

var Root_x2 = (-b - Math.sqrt(Math.pow(delta,2))/2*a);
console.log(Root_x2);