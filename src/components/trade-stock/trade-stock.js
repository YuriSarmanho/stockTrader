import '@/css/trade-stock.css'

export default {
    props: ['name', 'price'],
    computed: {
        isOnSpecificRoute() {
          // Verifica se a rota atual é '/minha-rota'
          return this.$route.path === '/sell';
        }
      }
}