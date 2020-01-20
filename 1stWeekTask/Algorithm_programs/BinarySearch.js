// Read a list of words from file 

const fs = require('fs');

const contents = fs.readFileSync('input.txt','utf-8');
const read = require("readline-sync");
const input = require('./Utility');

let str = contents.split(", ");

let searchWord = read.question("Enter the name of the states: ");

str.sort();

let searchedStr = input.binarySearch(str,searchWord);

if(searchedStr == -1){
    console.log("Element is not present");
}
else{
    console.log(`Element is present at position ${searchedStr}`);
}