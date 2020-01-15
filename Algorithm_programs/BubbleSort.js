// Bubble Sort

const read = require("readline-sync");

const input = require("./Utility");

let arr = read.questionInt("Enter the size: ");
let array = [];

    for(var i=0;i<arr;i++){
        array[i]=read.questionInt("Enter numbers: ");
    }

let result = input.bubbleSort(array);
console.log(result);



