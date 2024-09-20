import '@/css/trade-stock.css'

export default {
    props: ['name', 'price'],
    computed: {
        isOnSell() {
          return this.$route.path === '/sell';
        }
      },
}