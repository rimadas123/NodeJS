/*
* @file: TemperatureConversion.js
* @description: To find temperatures in both celsius and farenheit
*
* @author: Rima Das <rdas5969@gmail.com>
* @version: 1.0
* @date: 14/1/2020
*/

function tempConversion(){
    try {
        const input = require("../Algorithm_programs/Utility");
        const read = require("readline-sync");

        const temp = read.question("Enter 1 temperature in Celsius to Farenheit: \n enter 2 for temperature in farenheit to celsius: ");

        const result = input.temperatureConversion(temp);
        return [temp];

    } catch (error) {
        return error
    }  
}

module.exports = tempConversion();
