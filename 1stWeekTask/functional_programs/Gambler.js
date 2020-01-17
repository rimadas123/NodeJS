// Gambling game

const readlineSync = require('readline-sync');

var stake = readlineSync.questionInt("How much money u want to spend? ");
var trials  = readlineSync.questionInt("how much trials u want to play the game? ");
var goal = readlineSync.questionInt("set a goal - ");

var i,wins=0,loss=0;
var bets=0,total;

for(let i=0;i<trials;i++){

    var cash = stake;
    while(cash > 0 && cash < goal)
    {
        bets++;
        if(Math.random()<0.5)
        {
            cash = cash + 1;
        }
        else{
            cash = cash - 1;
        }
    }
    if(cash == goal){
        wins = wins + 1;
    }else{
        loss = loss + 1;
    }
  
}

console.log("total number of wins: ", wins);
console.log("total number of loss: ", loss);
total = Math.floor(100 * wins /trials);
console.log("Percentage of winning gambling: ",total,"%");
let fails = 100-total;
console.log("Percentage of losing gambling: ",fails,"%");




