
var read = require('readline-sync');
var input = require('./Utility')

word1 = read.question("Enter any word: ");
word2 = read.question("Enter any word: ");

var result = input.anagram(word1,word2);
console.log(result);