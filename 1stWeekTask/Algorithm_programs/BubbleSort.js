/*
* @file: BubbleSort.js
* @description: Sorting the array using bubble sort
*
* @author: Rima Das
* @version: 1.0
* @date: 13/1/2020
*/ 

function Bubble() {
    const read = require("readline-sync");
    const input = require("./Utility");

    let arr = read.questionInt("Enter the size: ");
    console.log(`Entered ${arr}`);

    let array = [];

        for(var i=0;i<arr;i++){
            array[i]=read.questionInt("Enter numbers: \n");
        }

    let result = input.bubbleSort(array);
    console.log(result);
}

Bubble();

