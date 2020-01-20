/*
* @file: UnOrderedList.js
* @description: Read the Text from a file, split it into words and arrange it as Linked List.
*
* @author: Rima Das
* @version: 1.0
* @date: 20/1/2020
*/

const fs = require('fs');
const read = require('readline-sync')
const Linked = require('../DSUtil/LinkedList'); // import linkedlist from another folder
const list = new Linked.LinkedList;

function unOrderedList()
{
    const contents = fs.readFileSync('input.txt','utf-8'); // reading from file
    const splitUp = contents.split(" "); //split it up from a string into word
    let i;
    for(i = 0; i < splitUp.length;i++){
        list.add(splitUp[i]);
    }
    
    list.show();
    let input = read.question("Enter a word: ");

    let result = list.search(input); //searching the value if it exists or not
    
    console.log(result);
    
    if(result){
        
        list.removeElement(input);
        list.show()
    }
    else{
        list.add(input);
    }
    list.show()
    
    
    let word = list.getData();
    console.log(word);
    // appending the values in the existing file
    let res = fs.writeFile("input.txt",word, (err) => {
        if(err) throw err;
        console.log("modified");
    });
}

unOrderedList();



// list.add(10);
// list.add(40);
// list.add(4);
// list.insertAt(50,1);
// list.insertAt(500,2);
// list.removeElement(500);


// list.printList()

