<script src="./trade-stock-list.js"/>

<template>
    <div class="trade-stock-list-container">
        <TradeStock v-for="stock in $store.state.stocks" :key="stock" :name="stock.name" :price="stock.price" :amountBought="stock.amountBought"/>
        <h2>Saldo: {{ $store.state.countAmount }}</h2>
    </div>
</template>