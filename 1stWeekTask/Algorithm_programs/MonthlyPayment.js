//Calculate monthly payment
var read = require('readline-sync');

var input = require('./Utility');

var year = read.question("How many years to pay off: ");

var principal = read.question("Enter loan amount: ");

var rateOfInterest = read.question("Rate of interest: ");

var result = input.monthlyPayment(year,principal,rateOfInterest);

console.log("Monthly payment u need to do to repay the loan amount: ",result);