<template>
  <div class="home">
    <h1>Let's play</h1>
      <main class="container">
        <section>
          <button class="restart" style="background-color: orange" @click="newGame">
              <i class="fa fa-repeat"></i>
              Reset
          </button>
          <div>
              <ul class="stars">
              <li v-for="(star, index) in stars" :key="index" class="star">
                  <i class="${index} fa fa-star"></i>
              </li>
              </ul>
              <p class="moves">Moves: {{ numMoves }}</p>
          </div>
        </section>
        <section id="cards">
          <ul class="cards">
            <li class="cardItem" v-for="(card, index) in this.deck.cards" :key="index">
              <!-- {{card.name}} -->
              <button :class="[card.match ? 'card match' : card.flipped ? 'card show' : card.close ? 'card close' : 'card']"
              @click="flipCard(card)"
              >
                <span v-if="!card.flipped">?</span>
                <div v-else :class="deck.cards[index].icon"></div>
              </button>
            </li>
          </ul>
        </section>
    </main>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: 'Home',
  computed: {
    ...mapState ([
      "stars",
      "numMoves",
      "types",
      "gameAnnounce",
      "win",
      "cardsFlipped",
      "numCardsFlipped",
      "cardsMatched",
    ]),
    ...mapGetters(["deck"]),
  },
  methods: {
  ...mapActions(["update_NumMoves", "clear_CardsFlipped", "update_CardsFlipped", "update_NumCardsFlipped", "clear_CardsMatched", "update_CardsMatched", "update_Stars", "update_Win", "clearGame" ]),
    shuffle(cards) {
      this.deck.cards = [];
      var currentIndex = cards.length,
      temporaryValue,
      randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = cards[currentIndex];
        cards[currentIndex] = cards[randomIndex];
        cards[randomIndex] = temporaryValue;
      }

      this.deck.cards = cards;
    },
    flipCard(card) {
      if (card.flipped) {
        return;
      } else {
        this.update_NumMoves({ moves: this.numMoves + 1 });
        if (this.numMoves < 30) {
            this.update_Stars({ num: 3 });
        } else if (this.numMoves < 40) {
            this.update_Stars({ num: 2 });
        } else if (this.numMoves < 50) {
            this.update_Stars({ num: 1 });
        } else if (this.numMoves > 50) {
            this.update_Stars({ num: 0 });
        }
      }
      // only allow flips if there are < or = 2 flipped cards
      if (this.numCardsFlipped < 2) {
        card.flipped = true;
        this.update_NumCardsFlipped({ num: this.numCardsFlipped + 1 });
        this.update_CardsFlipped({ cards: card });
        // MATCH
        if (
          this.numCardsFlipped === 2 &&
          this.cardsFlipped[0].name === this.cardsFlipped[1].name
          ) {
          for (let i = 0; i < this.deck.cards.length; i++) {
              if (this.deck.cards[i].name === this.cardsFlipped[0].name) {
              this.deck.cards[i].match = true;
              }
          }

          this.update_CardsMatched({ cards: this.cardsFlipped });
          this.clear_CardsFlipped({ cards: [] });
          this.update_NumCardsFlipped({ num: 0 });
          // if number of cards matched = number or cards, then win the game
          if (this.cardsMatched.length === this.deck.cards.length / 2) {
              this.update_Win({ win: true });
          }
        }
          // NO MATCH
        else if (
          this.numCardsFlipped === 2 &&
          this.cardsFlipped[0].name !== this.cardsFlipped[1].name
          ) {
          // Wait before closing mismatched card
          setTimeout(() => {
              for (let i = 0; i < this.deck.cards.length; i++) {
              if (this.deck.cards[i].flipped && !this.deck.cards[i].match) {
                  this.deck.cards[i].flipped = false;
                  this.deck.cards[i].close = true;
              }
              }

              this.clear_CardsFlipped({ cards: [] });
              this.update_NumCardsFlipped({ num: 0 });
              return;
          }, 500);
        }
      }
    },
    newGame() {
      this.shuffle(this.deck.cards);

      for (let i = 0; i < this.deck.cards.length; i++) {
          this.deck.cards[i].flipped = false;
          this.deck.cards[i].close = false;
          this.deck.cards[i].match = false;
      }

      this.clearGame();
    },
  },
  created() {
    this.shuffle(this.deck.cards);
  },
}
</script>

<style lang="scss" scoped>
@import '../styles/global-colors.scss';
@import '../styles/global-texts.scss';

.home {
  width: 80%;
  margin: 0 auto;
  color: $blue;
}
.home h1 {
  text-align: center;
}
.gameController .stars {
  padding: 0px;
  display: inline-block;
  margin: 2em auto 0;
}

.star {
  list-style: none;
  display: inline-block;
  margin: 0 0.2em;
  font-size: 1.5em;
  color: $orange;
}
.moves {
  font-weight: bold;
}

.gameController .restart {
  float: right;
  cursor: pointer;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 1em;
}

.restart {
  background-color: $orange;
  padding: 10px 20px;
  border-radius: 20px;
}

.restart:focus {
  outline: none;
}

.fa-repeat {
  background-color: $orange;
}

// Cards
.cards {
  margin: 2em auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0.5em;
  padding: 0;

  .cardItem {
    list-style: none;
  }

  .card {
    height: 100px;
    width: 100px;
    font-size: 4em;
    background: #061018 url(/img/fabric.5959b418.png);
    background-blend-mode: soft-light;
    border: 1px solid #acacac;
    color: #ffffff;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 5px 2px 20px 0 rgba(46, 61, 73, 0.5);
  }
  .show {
    font-size: 43px;
    //background: #0b5891 url(/img/fabric.5959b418.png);
    cursor: default;
  }

  .match {
    cursor: default;
    background: #0e4b5a url(/img/fabric.5959b418.png);
    font-size: 33px;
    animation-name: match-animation;
    -webkit-animation-name: match-animation;
    animation-duration: 1000ms;
    -webkit-animation-duration: 1000ms;
    transform-origin: 70% 70%;
    animation-iteration-count: 1000ms;
    animation-timing-function: linear;
  }

  .close {
    cursor: default;
    animation-name: close;
    -webkit-animation-name: close;
    animation-duration: 1000ms;
    -webkit-animation-duration: 1000ms;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    &:hover,
    &:focus {
      background-blend-mode: hard-light;
      color: #112c3e;
      border: 2px solid #112c3e;
    }
  }
}

@media only screen and (min-width: 479px){
  .cards {
    grid-template-columns: repeat(4, 1fr);
  }
}

</style>
