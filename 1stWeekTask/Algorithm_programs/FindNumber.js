/*
* @file: FindNumber.js
* @description: To find number by letting user to guess the number
*               and return the correct number
* @author: Rima Das <rdas5969@gmail.com>
* @version: 1.0
* @date: 18/1/2020
*/

const read = require("readline-sync");
const input = require("./Utility")

const n = read.question("Enter the number between 0 to 100: ");
const N = Math.floor(Math.pow(2,n));
const guessedNumber = input.find(N);
