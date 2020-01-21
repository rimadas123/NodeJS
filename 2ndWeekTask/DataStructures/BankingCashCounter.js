/*
* @file: BankingCashCounter.js
* @description: Creates Banking Cash Counter where people come in to deposit Cash and withdraw Cash.
*
* @author: Rima Das
* @version: 1.0
* @date: 21/1/2020
*/

function CashCounter()
{
    try{
        const read = require('readline-sync');
        const Que = require('../DSUtil/Queue');
        
        const input = read.questionInt("Enter the number of person who are in the queue: ");
        const queue = new Que.Queue(input);
        const pattern = /^[A-Za-z]+$/; //checking only letters
        for(let i = 0; i < input.length; i++)
        {
            var name = read.question("Enter name of an individual person: ",i);
    
            if(name.match(pattern))
            {
                queue.enqueue(name);
                queue.show()
            }    
        }
    }catch(err){
        return err;
    }

}
CashCounter();

