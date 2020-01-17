
var read = require('readline-sync');
var input = require('./Utility');

let word1 = read.question("Enter any word: ");
let word2 = read.question("Enter any word: ");

var result = input.anagram(word1,word2);
console.log(result);