import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    stars: 3,
    numMoves: 0,
    types: ["horse", "bomb", "carrot", "crown", "gift", "hotjar", "paper-plane", "user-astronaut"],
    cardsFlipped: [],
    numCardsFlipped: 0,
  },
  getters: {
    deck: (state) => {
      let deck = {
        cards:[]
      };
      for (let index = 0; index < state.types.length; index++) {
        deck.cards.push({
          name: state.types[index],
          icon: "fa fa-" + state.types[index],
          flipped: false,
          match: false,
          close: false
        });
        deck.cards.push({
          name: state.types[index],
          icon: "fa fa-" + state.types[index],
          flipped: false,
          match: false,
          close: false
        });
      }
      return deck;
    }
  },
  mutations: {
    UPDATE_NUMMOVES(state, payload) {
      console.log("this is the payload", payload)
      state.numMoves = payload;
    },
    CLEAR_CARDSFLIPPED(state, payload) {
      state.cardsFlipped = payload;
    },
    UPDATE_CARDSFLIPPED(state, payload) {
      state.cardsFlipped.push(payload);
    },
    UPDATE_NUMCARDSFLIPPED(state, payload) {
      state.numCardsFlipped = payload;
    },
  },
  actions: {
    update_NumMoves({ commit }, {moves}) {
      commit("UPDATE_NUMMOVES", moves);
    },
    clear_CardsFlipped({ commit }, { cards }) {
      commit("CLEAR_CARDSFLIPPED", cards);
    },
    update_CardsFlipped({ commit }, { cards }) {
        commit("UPDATE_CARDSFLIPPED", cards);
    },
    update_NumCardsFlipped({ commit }, { num }) {
        commit("UPDATE_NUMCARDSFLIPPED", num);
    },
  }
})