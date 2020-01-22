/*
* @file: PalindromeChecker.js
* @description: It checks whether the input is palindrome or not using deque method
*
* @author: Rima Das
* @version: 1.0
* @date: 22/1/2020
*/

function palindromeChecker()
{
    try{
        const read = require('readline-sync');
        const Deq = require('../DSUtil/Deque');
        let input = read.question("Enter a string");
        
        const deq = new Deq.Deque();
        if(input.length < 2){
            console.log("Enter valid input");
        }
    
        let splitUp = input.split("");

        for(let i=0;i<input.length;i++)
        {
            deq.addBack(splitUp[i]);
        }
        deq.show();
        // deq.removeBack();
        // deq.show();
        // deq.removeFront();
        // deq.show();

        let palindrome = true;
        
        while(deq.size() > 1 && palindrome)
        {
            if(deq.removeFront() === deq.removeBack())
            {
                return true;
            }
            else 
            {
                return false;
            }
        }
        if(palindrome){
            console.log("It is a palindrome");
        }
        else{
            console.log("It is not a palindrome");
        }
        

    }catch(err){
        return err;
    }
}

module.exports = palindromeChecker();