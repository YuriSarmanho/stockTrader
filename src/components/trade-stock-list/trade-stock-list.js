import TradeStock from "../trade-stock/trade-stock.vue"
import "@/css/trade-stock-list.css"

export default {
    data() {
        return {
            stocks: [
                {
                    name: 'BMW',
                    price: 120,
                },
                {
                    name: 'Google',
                    price: 90
                },
                {
                    name: 'Apple',
                    price: 130
                },
                {
                    name: 'Facebook',
                    price: 75
                },
            ]
        }
    },
    components: {TradeStock}
}