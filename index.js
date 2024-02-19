//Let's define the Card class has to be defined to include the characteristics of the card(suite, face, and value). 

class Card {
    constructor(suit, face, value) {
        this.suit = suit;
        this.face = face;
        this.value = value;
    }
}
//Let's define the Player class has to be defined to include the name, hand, and score characteristics of the players,
class Player {
    constructor(name, hand) {
        this.name = name;
        this.score = 0;
        this.hand = hand;
    }
}
// Let's define the Game class to include the deck and players arrays and the initGame and startGame methods. 
class Game {
    constructor() {
        this.deck = [];
        this.players = [];
        this.initGame();
        this.startGame();
    
    }


//The makeCards method includes the suit array for the fours suits of the cards. The faces array includes the numbers of the cards and the Jack, Queen, King, and Queen. The value of the 
//cards is defined in the let card variable.
    makeCards() {
        let suits = ['❤️', '💎', '🍀', '🗡️'];
        let faces = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
    
        for (let f = 0; f < faces.length; f++) {
            for (let s = 0; s < suits.length; s++) {
                let card = new Card(suits[s], faces[f], f + 2);
                this.deck.push(card);
            }
        }
           

    // Shuffle the card deck from https://backyarddev.io/programming/how-to-shuffle-a-deck-of-cards-using-javascript/
    
        for (let i = this.deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = this.deck[i];
            this.deck[i] = this.deck[j];
            this.deck[j] = temp;
        }
    }

//The initGame method is used to divide the cards that were shuffled to the players. The hand variable defines what the hand looks like for player 1 and player two.
    initGame() {
        this.makeCards();
    

        for (let x = 0; x < 2; x++) {
            let hand = this.deck.splice(0, 26);
            let player = new Player(`Player${x + 1}`, hand);
            this.players.push(player);
        }
    }

 //The startGame method is used to compare the hands of each player to determine the winner and logs the information
    startGame() {

        let suits1 = this.players[0].hand[0].suit;
        let suits2 = this.players[1].hand[0].suit;
        if (suits1 > suits2) {
            console.log('Player 1 wins!');
        } else if (suits1 < suits2) {
            console.log('Player 2 wins!');
        } else {
            console.log('It\'s a tie!');
        }
        for (let i = 0; i < 26; i++) {
            let card1 =  this.players[0].hand[i];
            let card2 = this.players[1].hand[i];
            console.log(`Player 1: ${card1.suit}${card1.face} and Player 2: ${card2.suit}${card2.face}`);
        }
        }
} 
      
const game = new Game();
console.log(game);