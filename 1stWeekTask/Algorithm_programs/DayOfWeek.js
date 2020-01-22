/*
* @file: DayOfWeek.js
* @description: To calulate day by taking date,month,year as a input
*               from the user
* @author: Rima Das <rdas5969@gmail.com>
* @version: 1.0
* @date: 18/1/2020
*/

const read = require('readline-sync');
const input = require('./Utility');


function dayOfWeek() 
{
    try{
        const month = read.question("Enter month: ");
        const date = read.question("Enter date: ");
        const year = read.question("Enter year: ");
        // calculated the day using a formula
        const result = input.dayOfWeek(month,date,year);
        
                switch(result){
                case 0 : 
                        console.log('Sunday');
                        break;
                case 1 : 
                        console.log("Monday");
                        break;
                case 2 : 
                        console.log("Tuesday");
                        break;
                case 3 :
                        console.log("Wednesday");
                        break;
                case 4 : 
                        console.log("Thursday");
                        break;
                case 5 :
                        console.log("Friday");
                        break;
                case 6 :
                        console.log("Saturday");
                        break;
                default:
                        console.log("wrong input");
                }
     }catch(err)
     {
       return err;    
     }
}

dayOfWeek();
