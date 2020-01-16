//Guess a number from user using binary search

const read = require("readline-sync");

let n = read.question("Enter the number between 0 to 10: ");
let N = Math.floor(Math.pow(2,n));
let first = 0;
let last = N - 1;


while(first<last){

    if(last - first != 1){
        break;
    }
    
    let middle = Math.floor(first+last)/2;
    let y,n;
    let ask = read.question("Is your number "+middle+" greater or less than the number you guessed? y or n");

    console.log(ask);
    if(ask == y){
        last = middle;
    }
    else if(ask == n){
        first = middle;
    }
    console.log(`the numbers are ${first} and ${last}`);
}

console.log(`the number you guessed was ${last} `);
