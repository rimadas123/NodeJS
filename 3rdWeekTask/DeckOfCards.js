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
        this.reset();
        this.shuffle();

    }

    reset(){
        this.deck = [];

        const suits = ["Clubs","Diamonds","Hearts","Spades"];
        const ranks = ["2","3","4",5,6,7,8,9,10,"Jack","Queen","King","Ace"];

        for(let suit in suits){
            for(let rank in ranks) {
                this.deck.push(`${ranks[rank]} of ${suits[suit]}`);
            }
        }
    }

    shuffle() {
        for (let i=this.deck.length-1; i>0; i--){
            let j = Math.floor(Math.random() * (i + 1));
            let temp = this.deck[i];
            this.deck[i] = this.deck[j];
            this.deck[j] = temp;
        }
        return this;
    }

    deal(){
        return this.deck.pop();
    }
}

const deck1 = new Deck();
console.log(deck1.deck);
deck1.reset();
console.log(deck1.deck);
deck1.shuffle();
console.log(deck1.deck);