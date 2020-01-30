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
let x,o;


function initilializeBoard(){
    let arr = [
        [1 , 2 , 3],
        [4 , 5 , 6],
        [7 , 8 , 9],
    ];
    console.log(`${arr[0][0]} | ${arr[0][1]} | ${arr[0][2]}  \n`);
    console.log(`${arr[1][0]} | ${arr[1][1]} | ${arr[1][2]}  \n`);
    console.log(`${arr[2][0]} | ${arr[2][1]} | ${arr[2][2]}  \n`);
}

initilializeBoard();