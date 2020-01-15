// Calculate day 

var read = require('readline-sync');

var input = require('./Utility');

var month = read.question("Enter month: ");
var date = read.question("Enter date: ");
var year = read.question("Enter year: ");

var result = input.dayOfWeek(month,date,year);

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