/*
* @file: InsertionSort.js
* @description: To sort the values by using insertion sort
*               and return the sorted array
* @author: Rima Das <rdas5969@gmail.com>
* @version: 1.0
* @date: 18/1/2020
*/

const read = require('readline-sync');
const input = require('./Utility');

function insertionSort() 
{
    const arr = read.questionInt("Enter size: ");
    const array = [];

    for(var i=0; i<arr; i++)
    {
        array[i] = read.question("Enter values: ");
    }
    let sortedResult = input.insertionSort(array);
    console.log(sortedResult);
}

insertionSort();


