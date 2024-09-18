<template>
  <div id="app">
    <StockNav/>
    <router-view />
  </div>
</template>

<script>
import './css/main.css'
import StockNav from './components/trade-nav/trade-nav.vue'

export default {
  name: "App",
  components: {StockNav},
};
</script>
