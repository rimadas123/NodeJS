// Flip a coin and count how many times head or tails comes

const read = require('readline-sync');

const num = read.questionInt("How many times you wanyt to filp a coin? ");

let tails=0;
let heads=0;

for(let i=0;i<=num;i++){
    let cal = Math.floor(Math.random()*10);
    if(cal < 5){

        console.log("Its a tail");
        tails = tails + 1;
    }else{
        
        console.log("Its a head");
        heads = heads + 1;
    }
}

let PerOfTails = Math.floor(tails*100/num);
console.log(`Percentage of total number of tails: ${PerOfTails}%`);

let PerOfHeads = 100-PerOfTails;
console.log(`Percentage of total number of heads: ${PerOfHeads}%`);

