//Insertion Sort

var read = require('readline-sync');

var input = require('./Utility');

let arr = read.questionInt("Enter size: ");
let array = [];

for(var i=0; i<arr; i++)
{
    array[i] = read.question("Enter values: ");
}
var sortedResult = input.insertionSort(array);

console.log(sortedResult);