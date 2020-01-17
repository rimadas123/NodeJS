// Gambling game

const readlineSync = require('readline-sync');

let stake = readlineSync.questionInt("How much money u want to spend? ");
let trials  = readlineSync.questionInt("how much trials u want to play the game? ");
let goal = readlineSync.questionInt("set a goal - ");


var wins=0;
let bets=0,loss=0,total;
var cash = stake;
console.log("cash",cash,"   trial",trials,"   ",  'goal ',goal);

for(let i=0;i<trials;i++){

    while(cash > 0 && cash < goal)
    {

        bets++;
        // console.log("random number",ans);
        if(Math.random()<0.5)
        {
            console.log("cash incremented",cash);
            cash++;      
        }
        else{
            console.log("cash decremented",cash);
            cash--;
        }
    }
    if(cash == goal){
        wins = wins + 1;
        console.log("no. of wins:", wins);
    }
    else{
        loss = loss + 1;
    }
}

console.log("total number of wins: ", wins);
console.log("total number of loss: ", loss);
total = Math.floor((wins * 100 )/trials);
console.log("Percentage of winning gambling: ",total,"%");

let fails = 100 - total;
console.log("Percentage of fails: ", fails);






