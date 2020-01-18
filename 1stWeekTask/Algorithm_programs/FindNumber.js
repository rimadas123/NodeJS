//Guess a number from user using binary search

const read = require("readline-sync");
const input = require("./Utility")

let n = read.question("Enter the number between 0 to 100: ");

let N = Math.floor(Math.pow(2,n));


let guessedNumber = input.find(N);

return guessedNumber;