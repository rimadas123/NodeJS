//Guess a number from user using binary search

const read = require("readline-sync");

let n = read.question("Enter the number between 0 to 100: ");
let N = Math.floor(Math.pow(2,n));
let first = 0;
let last = N - 1;

let calculate = Math.floor(first+last/2);

let read = read.question(`the number you guessed is ${calculate} enter y or n`);

    function calculate(first,last){
        let y, n;
        while(first<last){
        let ask = read.question(`Is your number between ${first} and ${last} the number you guessed? y or n`);
        let cal = Math.floor(first+last/2);
        if(ask === y){
            last = cal;
        }
        else if(ask === n){
            first = cal;
        }
    }
}

 calculate(first,last);
   
console.log(`the number you guessed was ${last} `);
