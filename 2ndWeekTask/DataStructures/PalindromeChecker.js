/*
* @file: PalindromeChecker.js
* @description: It checks whether the input is palindrome or not using deque method
*
* @author: Rima Das
* @version: 1.0
* @date: 22/1/2020
*/
let read = require('readline-sync');
let Deq = require('../DSUtil/Deque');
// taking input from the user
let input = read.question("Enter a string");
// creating object of deque
let deq = new Deq.Deque();

function palindromeChecker()
{
    try{
       
        if(input.length < 2){
            console.log("Enter valid input");
        }

        let splitUp = input.split("");

        for(let i=0;i<input.length;i++)
        {
            deq.addBack(splitUp[i]);
        }

        let palindrome;
        
        while(deq.size() > 1 && deq.rear != deq.front)
        {
            if(deq.removeFront() === deq.removeBack())
            {
                palindrome = true;
            }
            else 
            {
                palindrome = false;
            }
        }

            if(palindrome){
                return true
            }
            else{
                return false
            }
        console.log(palindrome);
        
        return [input.length,palindrome];

    }catch(err){
        return err;
    }
}

module.exports = palindromeChecker();