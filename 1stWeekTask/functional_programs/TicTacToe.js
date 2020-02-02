/*
* @file: TicTacToe.js
* @description: Write a Program to play a Cross Game or Tic­Tac­Toe Game. Player 1 is
*                the Computer and the Player 2 is the user. Player 1 take Random Cell that is the
*                Column and Row.
*
* @author: Rima Das
* @version: 1.0
* @date: 30/1/2020
*/
const read = require('readline-sync');
let Board = [];
let check = "";
let choice;
play();

function play() {
    setBoard();
    displayBoard();
    choice = read.question("Enter your choice either x or o : ");
    if(choice == "o" || choice == "x") {
        if(!(displayWinner() && gameTie())) {
            do{
                player();
                displayWinner();
                gameTie();
                computer();
            }while(check != 'yes');
        }
    } else {
        console.log(" Invalid choice... please try again \n");
        play();
    }
}


function setBoard(){
    Board[0] = '1'; Board[1] = '2'; Board[2] = '3'; Board[3] = '4';
    Board[4] = '5'; Board[5] = '6';Board[6] = '7'; Board[7] = '8';Board[8] = '9';
}

function displayBoard() {
    console.log(` ${Board[0]} | ${Board[1]} | ${Board[2]}`);
    console.log(`------------------`);
    console.log(` ${Board[3]} | ${Board[4]} | ${Board[5]}`);
    console.log(`------------------`);
    console.log(` ${Board[6]} | ${Board[7]} | ${Board[8]}`);
}

function displayWinner() {
    if((Board[0] == 'x' && Board[1] == 'x' && Board[2] == 'x') ||
        (Board[3] == 'x' && Board[4] == 'x' && Board[5] == 'x') ||
        (Board[6] == 'x' && Board[7] == 'x' && Board[8] == 'x') ||
        (Board[0] == 'x' && Board[3] == 'x' && Board[6] == 'x') ||
        (Board[1] == 'x' && Board[4] == 'x' && Board[7] == 'x') ||
        (Board[2] == 'x' && Board[5] == 'x' && Board[8] == 'x') ||
        (Board[0] == 'x' && Board[4] == 'x' && Board[8] == 'x') ||
        (Board[2] == 'x' && Board[4] == 'x' && Board[6] == 'x')){
            if(choice == 'x') 
             console.log(" Well played you won...");
             else
             console.log("Computer won");
             
             check = read.question("Type yes if you want to continue: ");
             if(check == "yes") {
                 check = "";
                 play();
             } else {
                 console.log("Thank you for playing");
                 console.log("Game end");
             }
             return true;
        }
        else if((Board[0] == 'o' && Board[1] == 'o' && Board[2] == 'o') ||
        (Board[3] == 'o' && Board[4] == 'o' && Board[5] == 'o') ||
        (Board[6] == 'o' && Board[7] == 'o' && Board[8] == 'o') ||
        (Board[0] == 'o' && Board[3] == 'o' && Board[6] == 'o') ||
        (Board[1] == 'o' && Board[4] == 'o' && Board[7] == 'o') ||
        (Board[2] == 'o' && Board[5] == 'o' && Board[8] == 'o') ||
        (Board[0] == 'o' && Board[4] == 'o' && Board[8] == 'o') ||
        (Board[2] == 'o' && Board[4] == 'o' && Board[6] == 'o')) {
            if(choice == 'o')
            console.log("Well played you won...");
            else
            console.log("Computer won");
            
            check = read.question("Type yes if you want to continue: ");
            if(check == "yes") {
                check = "";
                play();
            } else {
                console.log("Thank you for playing");
                console.log("Game end");
            }
            return true;
        }
    return false;
}

function gameTie() {
    try {
        if(!displayWinner) {
            console.log("game tie..");
            check = read.question("Type ye if you want to continue: ");
            if(check == "yes") {
                check ="";
                play();
            } else {
                console.log("Thank you for playing");
                log("Game end..");
            }
            return true;
        }
        return false;

    } catch (error) {
        return error;
    }
}

function player() {
    console.log("Your turn");
    try {
        var position = read.question("\n Enter position: ");
        console.log(`You choose ${position} Position \n`);
        if(position < 10 && position > 0) {
            if((Board[position - 1]!= 'x') && (Board[position - 1] != 'o')){
                if(choice == 'x')
                    Board[position - 1] = 'x';
                else
                    Board[position - 1] = 'o';
                    displayBoard();
            } else {
                console.log(`\n ${position} Position is occupied.. try again`);
                player();
            }
        } else {
            console.log("Invalid position.. try again");
            player();
        }
        
    } catch (error) {
        return error;
    }
}

function computer() {
    try {
        console.log("Computer turn");
        var position = Math.floor(Math.random() * 9);
        console.log(`Computer choose ${position} Position \n`);
        if(position < 10 && position > 0) {
            if(Board[position - 1] != "x" && (Board[position - 1] != "o")) {
                if(choice == "x")
                Board[position - 1] = "o";
                else
                Board[position - 1] = "x";

                displayBoard();
            } else {
                console.log(`\n ${position} Position is occupied..`);
                computer();
            }
        }
        else {
            console.log("Invalid Position...");
            computer();
        }
    } catch (error) {
        return error;
    }
    
}