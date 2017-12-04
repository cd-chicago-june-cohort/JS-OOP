let deckCards = []
let suits = ['Hearts', 'Spades', 'Diamonds', 'Clubs']
for (let suit in suits){
    for (let i=1; i<14; i++){
        let card_string = '';
        switch(i) {
            case 1:
                card_string += 'Ace';
                break;
            case 11:
                card_string += 'Jack';
                break;
            case 12:
                card_string += 'Queen';
                break;
            case 13:
                card_string += 'King';
                break;
            default: 
                card_string += i;
        }
        card_string += ' of ' + suits[suit];
        deckCards.push(card_string);
    }
}

class Deck{
    constructor(){
        this.cards = deckCards;
    }

    shuffle(){
        var m = this.cards.length, t, i;
        // While there remain elements to shuffle…
        while (m) {
            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);
            // And swap it with the current element.
            t = this.cards[m];
            this.cards[m] = this.cards[i];
            this.cards[i] = t;
        }
        return this;
    }

    reset(){
        this.cards = deckCards;
    }

    deal(){
        let card_index = Math.floor(Math.random()* this.cards.length);
        let dealt_card = this.cards[card_index];
        this.cards.splice(card_index,1);
        return dealt_card;
    }
}

class Player{
    constructor(name){
        this.name = name;
        this.hand = [];
    }

    draw(deck){
        let dealt_card = deck.deal();
        this.hand.push(dealt_card);
        return this;
    }

    discard(card){
        let card_index = this.hand.indexOf(card);
        this.hand.splice(card_index,1);
        return this;
    }
}

var deck = new Deck();
deck.shuffle();
var player1 = new Player('Slim');

player1.draw(deck).draw(deck).draw(deck).draw(deck).draw(deck);
console.log('Slim\'s hand:');
console.log(player1.hand);