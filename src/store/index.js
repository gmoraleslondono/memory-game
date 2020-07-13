import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    stars: 3,
    numMoves: 0,
    types: ["horse", "bomb", "carrot", "crown", "gift", "hotjar", "paper-plane", "user-astronaut"]
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
  },
  actions: {
  }
})