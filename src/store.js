import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    countAmount: 10000,
    stockInformation: {
      quantitie: 0,
      price: 0,
    },
  },
  mutations: {
    setAmount(state) {
      return (state.countAmount =
        state.countAmount -
        state.stockInformation.quantitie * state.stockInformation.price);
    },
    setQuantitie(state, payload) {
        return state.stockInformation.quantitie = payload
    },
    setPrice(state, payload) {
        return state.stockInformation.price = payload
    }
  },
});
