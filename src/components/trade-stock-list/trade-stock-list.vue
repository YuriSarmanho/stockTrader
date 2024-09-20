<script src="./trade-stock-list.js"/>

<template>
    <div class="trade-stock-list-container">
        <TradeStock v-for="stock in stocks" :key="stock" :name="stock.name" :price="stock.price"/>
        <h2>Saldo: {{ accountBalance }}</h2>
    </div>
</template>