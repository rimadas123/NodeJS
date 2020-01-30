/*
* @file: AddressBook.js
* @description: To initialize deck of cards having suit ("Clubs","Diamonds", "Hearts", "Spades") & Rank ("2", "3", "4", "5", "6", "7", "8", "9", "10",
*               "Jack", "Queen", "King", "Ace"). Shuffle the cards using Random method and then distribute 9 Cards 
*               to 4 Players and Print the Cards the received by the 4 Players
*
* @author: Rima Das
* @version: 1.0
* @date: 28/1/2020
*/

const util = require('./Utility');

class DistributeCards {
    
    start() {
        let cards = util.shuffle();
        let play = 0;
        let players = [[],[],[],[]];
        for(let i=0;i<4;i++){
            for(let j = 0; j< 13; j++){
                players[i][j] = cards[j + play];
            }
            play = Math.floor(Math.random() * cards.length);
        }
        console.log(`First Player: ${players[0]}`);
        console.log(`Second Player: ${players[1]}`);
        console.log(`Third Player: ${players[2]}`);
        console.log(`Fourth Player: ${players[3]}`);
    }
    
}

const cards = new DistributeCards();
cards.start();