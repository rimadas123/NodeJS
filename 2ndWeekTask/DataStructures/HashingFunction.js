/*
* @file: PalindromeChecker.js
* @description: Create a Slot of 10 to store Chain of Numbers that belong to each Slot to
*                efficiently search a number from a given set of number.
*
* @author: Rima Das
* @version: 1.0
* @date: 22/1/2020
*/

function hashingFunction(){
    try {
        const file = require('fs');
        const list = require('../DSUtil/LinkedList');
        const hash = require('../DSUtil/DSUtility');
        const read = require('readline-sync');
        
        let slot = [[],[],[],[],[],[],[],[],[],[],[]];
         slot = new list.LinkedList;

        for(let i = 0; i<11; i++){
            
             slot[i] = new list.LinkedList;
        } 
 
        let readFile = file.readFileSync('SlotNumber.txt','utf-8');
        let splitUp = readFile.split(" ");


        for(let i = 0; i < splitUp.length; i++){
            let slotNum = hash.hash(splitUp[i]);

            slot[slotNum].add(splitUp[i]);
            // console.log(slot[slotNum]);
        }

        for(let i = 0; i < 11; i++){

            
        }

        let input = read.questionInt("search a number: ");

        
        

        
    } catch (error) {
        return error;
    }
}

hashingFunction();