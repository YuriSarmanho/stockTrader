import "@/css/trade-stock.css";

export default {
  props: ["name", "price"],
  data() {
    return {
      inputQuantitie: null
    }
  },
  state() {
    return {
      quantitie: 1,
    };
  },
  computed: {
    isOnSell() {
      return this.$route.path === "/sell";
    },
  },
  methods: {
    setStockQuantitie() {
      this.$store.commit('setQuantitie', this.inputQuantitie)
      this.$store.commit('setPrice', this.price)

    },
    sendBuyCommit() {
      this.$store.commit('buyStock')
      this.$store.commit('setPrice', this.price)
    },
    sendSellCommit() {
      this.$store.commit('sellStock')
      this.$store.commit('setPrice', this.price)
    }
  },
};
