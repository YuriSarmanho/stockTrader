<template>
  <div id="app">
    <StockNav/>
    <StockList/>
    <StockMenu/>
  </div>
</template>

<script>
import './css/main.css'
import StockNav from './components/trade-nav/trade-nav.vue'
import StockList from './components/trade-stock-list/trade-stock-list.vue'
import StockMenu from './components/trade-stock-menu/trade-stock-menu.vue'

export default {
  name: "App",
  components: { StockList, StockMenu, StockNav},
};
</script>
