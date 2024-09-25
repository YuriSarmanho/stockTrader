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
    stocks: [
      {
        name: "BMW",
        price: 120,
        amountBougth: 0,
      },
      {
        name: "Google",
        price: 90,
        amountBougth: 0,
      },
      {
        name: "Apple",
        price: 130,
        amountBougth: 0,
      },
      {
        name: "Facebook",
        price: 75,
        amountBougth: 0,
      },
    ],
  },
  mutations: {
    buyStock(state) {
      return (state.countAmount =
        state.countAmount -
        state.stockInformation.quantitie * state.stockInformation.price);
    },
    sellStock(state) {
      return (state.countAmount =
        state.countAmount +
        state.stockInformation.quantitie * state.stockInformation.price);
    },
    setQuantitie(state, payload) {
      return (state.stockInformation.quantitie = payload);
    },
    setPrice(state, payload) {
      return (state.stockInformation.price = payload);
    },
    addAmountBougth(state, payload) {
      return (state.stockInformation.amountBougth = state.stockInformation.amountBougth + payload);
    },
    addAmountSell(state) {
      return (state.stockInformation.amountBougth =
        state.stockInformation.amountBougth + state.stockInformation.quantitie);
    },
  },
});
