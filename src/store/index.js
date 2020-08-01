import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    stars: 3,
    numMoves: 0,
    types: ["camera-retro", "bomb", "bug", "heart", "gift", "anchor", "paper-plane", "ambulance"],
    cardsFlipped: [],
    numCardsFlipped: 0,
    cardsMatched: [],
    win: false,
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
    CLEAR_CARDSMATCHED(state, payload) {
      state.cardsMatched = payload;
    },
    UPDATE_CARDSMATCHED(state, payload) {
        state.cardsMatched.push(payload);
    },
    UPDATE_WIN(state, payload) {
      state.win = payload;
    },
    UPDATE_STARS(state, payload) {
        state.stars = payload;
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
    clear_CardsMatched({ commit }, { cards }) {
      commit("CLEAR_CARDSMATCHED", cards);
    },
    update_CardsMatched({ commit }, { cards }) {
        commit("UPDATE_CARDSMATCHED", cards);
    },
    update_Win({ commit }, { win }) {
      commit("UPDATE_WIN", win);
    },
    update_Stars({ commit }, { num }) {
        commit("UPDATE_STARS", num);
    },
  }
})