/*
* @file: BankingCashCounter.js
* @description: Creates Banking Cash Counter where people come in to deposit Cash and withdraw Cash.
*
* @author: Rima Das
* @version: 1.0
* @date: 21/1/2020
*/

const read = require('readline-sync');
const Que = require('../DSUtil/Queue');
const queue = new Que.Queue;

function CashCounter(){
   let input = read.questionInt("Enter the number of person who are in the queue: ");
   console.log(input);
//    let res = queue.enqueue(input);
//    console.log(res);
   let pattern = /^[A-Za-z]+$/;
    for(let i = 0; i < input.length; i++)
    {
        var name = read.question("Enter name of an individual person: ");

        if(name.match(pattern)){
            queue.enqueue(name);
            queue.show()
        }    
        else{
            console.log("invalid input try");
        }
        queue.peek()
    }
}
CashCounter();

