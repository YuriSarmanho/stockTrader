<script src="./trade-stock.js" />

<template>
  <div class="trade-stock-container">
    <div class="stock-header header-buy" :class="{'header-sell': isOnSell}">
      <h3 class="stock-title">{{ name }}</h3>
      <p class="stock-price">(Preço:{{ price }}$)</p>
    </div>
    <div class="input-amount">
        <input type="number">
        <button>comprar</button>
    </div>
  </div>
</template>
