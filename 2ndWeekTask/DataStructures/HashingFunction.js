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
        var file = require('fs');
        var list = require('../DSUtil/LinkedList');
        var hash = require('../DSUtil/DSUtility');
        var read = require('readline-sync');
        let slot = [[],[],[],[],[],[],[],[],[],[],[]];
         slot = new list.LinkedList;


        for(let i = 0; i < 11; i++){

            slot[i] = new list.LinkedList;
        } 
               
        let rdFile = file.readFileSync('SlotNumber.txt','utf-8');
        let splitUp = rdFile.split(" ");


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
        else{
            slot[slotNumber].add(input);
            for(let i = 0; i < 11; i++){
                console.log(i + "->: \n");
                slot[i].show();
            }
        }
  
        for(i=0;i<11;i++){
            var str = str + slot[i].toString();
            return str;
        }
        slot.show();

        let word = slot.getData();
        console.log(word);
        
        let res = file.writeFileSync("SlotNumber.txt",word, (err) => {
            if(err) throw err;
            console.log("modified");
        });
        
    } catch (error) {

        console.log(error);
    }
}

hashingFunction();