<script src="./trade-stock.js" />

<template>
  <div class="trade-stock-container">
    <div class="stock-header header-buy" :class="{'header-sell': isOnSell}">
      <h3 class="stock-title">{{ name }}</h3>
      <p class="stock-price">(Preço:{{ price }}$)</p>
    </div>
    <div class="input-amount">
        <input type="number" v-model="inputQuantitie" @input="setStockQuantitie">
        <button v-if="!isOnSell" @click="sendBuyCommit" >Comprar</button>
        <button v-if="isOnSell" @click="sendSellCommit" >Vender</button>
    </div>
  </div>
</template>
