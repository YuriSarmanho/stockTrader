import Vue from "vue";
import Router from "vue-router";

import Menu from "./components/trade-stock-menu/trade-stock-menu.vue";
import TradeStockList from "./components/trade-stock-list/trade-stock-list.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Menu,
    },
    {
      path: "/list",
      component: TradeStockList,
      props: true,
      children: [
        { path: "/portfolio", component: TradeStockList,props: true },
        { path: "/sales", component: TradeStockList,props: true },
      ],
    },
  ],
});
