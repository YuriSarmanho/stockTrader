<script src="./trade-stock-list.js"/>

<template>
    <div class="trade-stock-list-container">
        <TradeStock v-for="stock in stocks" :key="stock" :name="stock.name" :price="stock.price"/>
        <h2>Saldo: {{ $store.state.countAmount }}</h2>
        <h2>quant: {{ $store.state.stockInformation.quantitie }}</h2>
        <h2>preco: {{ $store.state.stockInformation.price }}</h2>
    </div>
</template>