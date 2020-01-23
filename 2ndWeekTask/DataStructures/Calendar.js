/*
* @file: DayOfWeek.js
* @description: To print a calendar by taking date,month,year as a input
*               from the user
* @author: Rima Das <rdas5969@gmail.com>
* @version: 1.0
* @date: 23/1/2020
*/

function calendar(){
    try {
        const input = require('../DSUtil/DSUtility');
        const read = require('readline-sync');
        const month = read.question("Enter month: ");
        if(isNaN(month)) {
            throw "Enter valid month"
        }

        const year = read.question("Enter year: ");
        if(isNaN(year)) {
            throw "Enter valid year"
        }

        const weekDay =  input.calendar(month,year);
        
        let arr = [];
        arr.push(month);
        arr.push(year);
        arr.push(day);

        return arr;

    } catch (error) {
        return error;
    }
}

calendar();