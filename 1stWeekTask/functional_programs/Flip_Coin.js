// Flip a coin and count how many times head or tails comes

var read = require('readline-sync');

var num = Number(read.question("How many times you wanyt to filp a coin? "));

var tails=0;
var heads=0;

for(var i=0;i<=num;i++){
    var cal = Math.floor(Math.random()*10);
    if(cal < 5){

        console.log("Its a tail");
        tails = tails + 1;
    }else{
        
        console.log("Its a head");
        heads = heads + 1;
    }
}

PerOfTails = Math.floor(tails*100/num);
console.log("Percentage of total number of tails: ",PerOfTails,"%");

PerOfHeads = 100-PerOfTails;
console.log("Percentage of total number of heads: ",PerOfHeads,"%");

