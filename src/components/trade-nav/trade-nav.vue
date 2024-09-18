<script src="./trade-nav.js"/>

<template>
    <div class="trade-nav">
        <div id="trade-nav-logo">STOCKTRADER</div>
        <div class="trade-router-navigation">
            <ul>
                <router-link tag="li" to="/sell" class="trade-router-link">Vender</router-link>
                <router-link tag="li" to="/buy" class="trade-router-link">Comprar</router-link>
            </ul>
        </div>
    </div>
</template>