/*
* @file: BankingCashCounter.js
* @description: Create Banking Cash Counter where people come in to deposit Cash and withdraw Cash.
*
* @author: Rima Das <rdas5969@gmail.com>
* @version: 1.0
* @date: 21/1/2020
*/

function CashCounter()
{
    try{
        const read = require('readline-sync');
        const Que = require('../DSUtil/Queue');
        const amount = 10000;
        const input = read.questionInt("Enter the number of person who are in the queue: ");
        const queue = new Que.Queue(input);
        console.log(queue);
        
        const pattern = /^[A-Za-z]+$/; //checking only letters
        for(let i = 0; i < queue.length; i++)
        {
            do{
                var name = read.question("Enter name of an individual person: ",i);
                queue.enqueue(name);  
            }    
            while(name.match(pattern))  
        }
        
        let old_amount = amount;
        queue.show();

        for(i=0;i<queue;i++){
            do{
                console("")
            }while(queue > 0)
        }
        
       
    }catch(err){
        return err;
    }

}
CashCounter();

