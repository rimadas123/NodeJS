// Read in a list of words from file -> Merge Sort

var fs = require('fs');

var contents = fs.readFileSync('input.txt','utf-8');
var read = require("readline-sync");
var input = require('./Utility');

var arr = contents.split(", ");

var searchWord = read.question("Enter a word: ");

var searchedStr = input.binarySearch(arr,searchWord);

if(searchedStr==-1){
    console.log("Element is not present");
}
else{
    console.log("Element is present");
}