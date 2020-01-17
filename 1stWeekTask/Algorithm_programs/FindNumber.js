//Guess a number from user. Use binary search for this

const read = require("readline-sync");

let n = read.question("Enter the number between 0 to 10: ");
let N = Math.floor(Math.pow(2,n));
let first = 0;
let last = N - 1;


while(first<=last){

    if(last - first == 1){
        return first;
    }

    let middle = Math.floor((first+last)/2);

    let ask = read.question("Is the number "+middle+" greater or less than the number you guessed? Enter 1 for yes \n or enter 2 for no => ");

    if(ask == 1){
        last = middle;
        console.log(last);
    }
    else if(ask == 2){
        first = middle;
        console.log(first);
    }
    console.log(`the numbers are ${first} and ${last}`);
}

console.log(`the number you guessed was ${first}`);