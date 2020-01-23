/*
* @file: HashingFunction.js
* @description: Create a Slot of 10 to store Chain of Numbers that belong to each Slot to
*                efficiently search a number from a given set of number.
*
* @author: Rima Das <rdas5969@gmail.com>
* @version: 1.0
* @date: 22/1/2020
*/

function hashingFunction(){
    try {
        const fs = require('fs');
        const list = require('../DSUtil/LinkedList');
        const hash = require('../DSUtil/DSUtility');
        const read = require('readline-sync');
        const slot = [[],[],[],[],[],[],[],[],[],[],[]];
         slot = new list.LinkedList;

        for(let i = 0; i < 11; i++){
            
             slot[i] = new list.LinkedList;
        } 
               
        let readFile = fs.readFileSync('SlotNumber.txt','utf-8');
        let splitUp = readFile.split(" ");

        for(let i = 0; i < splitUp.length; i++){
            let slotNum = hash.hash(splitUp[i]);
  
            slot[slotNum].add(splitUp[i]);
        }

        
        for(let i = 0; i < 11; i++){

            console.log(i + "--> :\n");
            slot[i].show();
        }

        let input = read.questionInt("Enter a number to search: ");
        let slotNumber = hash.hash(input);
        let value = slot[slotNumber].search(input);
        
        if(value == true) {

            console.log(`\nElement found at slot ${slotNumber} and deleted\n`);
            slot[slotNumber].removeElement(input);
        }

        for(let i = 0; i < 11; i++){
            console.log(i + "->");
            slot[i].show();
        }
        
        for(i=0;i<11;i++){
            let str = str + slot[i].toString();
            return str;
        }
        slot.show();

        let word = slot.getData();
        console.log(word);
        
        let res = fs.writeFileSync("SlotNumber.txt",word, (err) => {
            if(err) throw err;
            console.log("modified");
        });
        
    } catch (error) {
        return error;
    }
}

hashingFunction();