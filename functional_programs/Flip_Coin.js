// Flip a coin and count how many times head or tails comes

var read = require('readline-sync');

var num = Number(read.question("Enter a number"));

var tails=0;
var heads=0;

for(var i=0;i<=num;i++){
    var cal = Math.floor(Math.random()*10);
    if(cal < 5){

        console.log("Its a tail");
        tails++;
    }else{
        
        console.log("Its a head");
        heads++;
    }
}

console.log("")

