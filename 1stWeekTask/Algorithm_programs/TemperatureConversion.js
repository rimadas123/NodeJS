// Calculate Temperature in celsius and farenheit

var input = require("./Utility");

var read = require("readline-sync");



var temp = read.question("Enter 1 temperature in Celsius to Farenheit: \n enter 2 for temperature in farenheit to celsius: ");

var result = input.temperatureConversion(temp);
