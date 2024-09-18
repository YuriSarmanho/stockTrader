import Vue from "vue";
import Router from "vue-router";

import TradeStockList from "./components/trade-stock-list/trade-stock-list.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/list",
      component: TradeStockList,
      props: true,
      children: [
        { path: "/sell", component: TradeStockList,props: true },
        { path: "/buy", component: TradeStockList,props: true },
      ],
    },
  ],
});
