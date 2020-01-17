// Gambling game

const readlineSync = require('readline-sync');

var stake = Number(readlineSync.question("How much money u want to spend? "));
var trials  = Number(readlineSync.question("how much trials u want to play the game? "));
let goal = Number(readlineSync.question("set a goal - "));

let i,wins=0;
let bets=0,total;
let cash = stake;
console.log("cash",cash,"   trial",trials,"   ",  'goal ',goal);

for(i=0;i<trials;i++){

    while(cash>0 && cash<goal)
    {

        bets++;
        let ans = Math.floor(Math.random()*10)%2;
        if(ans==1)
        {
            cash++;
            wins++;
        }
        else{
            cash--;
        }
    }
}

console.log("total number of wins: "+ wins);
total = wins * 100 /bets;
console.log("Percentage of winning gambling: "+total+"%");





