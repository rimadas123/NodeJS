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

class Deck{
    constructor() {
        this.deck = [];

        const suits = ["Clubs","Diamonds","Hearts","Spades"];
        const ranks = ["2","3","4",5,6,7,8,9,10,"Jack","Queen","King","Ace"];

        for(let suit in suits){
            for(let rank in ranks) {
                this.deck.push(`${ranks[rank]} of ${suits[suit]}`);
            }
        }
    }
}

const deck1 = new Deck();
console.log(deck1.deck);