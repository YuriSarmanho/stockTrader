<script src="./trade-stock.js" />

<template>
  <div class="trade-stock">
    <div class="stock-header">
      <h3 class="stock-title">{{ name }}</h3>
      <p class="stock-price">{{ price }}</p>
    </div>
    <div class="input-amount">
        <input type="number">
        <button>comprar</button>
    </div>
  </div>
</template>
