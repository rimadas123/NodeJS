/*
* @file: UnOrderedList.js
* @description: Read a List of Numbers from a file and arrange it ascending Order in a Linked List
*              
* @author: Rima Das
* @version: 1.0
* @date: 20/1/2020
*/

const fs = require('fs');
const read = require('readline-sync');
const Linked = require('../DSUtil/LinkedList'); // import linkedlist from another folder
const list = new Linked.LinkedList;

function orderedList()
{
    const file = fs.readFileSync('Numberfile.txt','utf-8');
    const splitUp = file.split(" ");
    const sortedArr = splitUp.sort((a,b) => { return a-b});
    for(let i=0;i<sortedArr.length;i++)
    {
        list.add(sortedArr[i]);
    }
    list.show();

    let input = read.questionInt("enter a number: ");

    let searchValue = list.search(input);

    if(searchValue != true)
    { 
        list.add(input); 
    }
    else
    {
       let res = list.removeElement(input);
       console.log(res);
        list.show();
    }
    list.show();
    
    let word = list.getData();
    console.log(word);
    let res = fs.writeFile("Numberfile.txt",word, (err) => {
        if(err) throw err;
        console.log("modified");
    });
}

    

orderedList();