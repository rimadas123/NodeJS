// Gambling game

var readlineSync = require('readline-sync');

var stake = Number(readlineSync.question("How much money u want to spend? "));
var trials  = Number(readlineSync.question("how much trials u want to play the game? "));
var goal = Number(readlineSync.question("set a goal - "));

var i,wins=0;
var bets=0,total;
var cash = stake;
console.log("cash",cash,"   trial",trials,"   ",  'goal ',goal);

for(i=0;i<trials;i++){

    while(cash>0 && cash<goal)
    {

        bets++;
        var ans = Math.floor(Math.random()*10)%2;
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





