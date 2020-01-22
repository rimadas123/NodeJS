/*
* @file: Gambler.js
* @description: Simulates a gambler who start with $stake and place fair $1 bets until
*               he/she goes broke (i.e. has no money) or reach $goal. Keeps track of the 
*                number of times he/she wins and the number of bets he/she makes.
* @author: Rima Das <rdas5969@gmail.com>
* @version: 1.0
* @date: 15/1/2020
*/

function  gambling() {
    try {
        const readlineSync = require('readline-sync');

        let stake = readlineSync.questionInt("How much money u want to spend? ");
        let trials  = readlineSync.questionInt("how much trials u want to play the game? ");
        let goal = readlineSync.questionInt("set a goal - ");

        let i,wins=0,loss=0;
        let bets=0,total;

        for(i=0;i<trials;i++){

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

    } catch (error) {
        return error;
    }
}

gambling();




