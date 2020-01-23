/*
* @file: DayOfWeek.js
* @description: To print a calendar by taking date,month,year as a input
*               from the user
* @author: Rima Das <rdas5969@gmail.com>
* @version: 1.0
* @date: 23/1/2020
*/

const input = require('../../1stWeekTask/Algorithm_programs/Utility');
const read = require('readline-sync');
const month = read.question("Enter month: ");
const date = read.question("Enter date: ");
const year = read.question("Enter year: ");

function calendar(){
    try {
        
        const weekDay =  input.dayOfWeek(month,date,year);
        console.log(weekDay);

        const monthDay = [" ","January", "February","March","April","May","June","July","Spetember","October","November","December"];

        for(let i=0;i<monthDay.length;i++) {
            console.log (monthDay[i]);
        }

    } catch (error) {
        return error;
    }
}

calendar();