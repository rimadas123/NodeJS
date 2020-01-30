class Utility {

    constructor(){
        this.deck = [];
        this.create();
        this.shuffle();
    }

    create(){
        const suits = ["Clubs","Diamonds","Hearts","Spades"];
        const ranks = ["2","3","4","5","6","7","8","9","10","Jack","Queen","King","Ace"];

        for(let suit in suits){
            for(let rank in ranks) {
                this.deck.push(` ${ranks[rank]}  ${suits[suit]}`);
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
        return this.deck;
    }

}

module.exports = new Utility();