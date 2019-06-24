import Vue from 'vue'
import App from './App.vue'
import Loader from './components/index'

Vue.config.productionTip = false

Vue.use(Loader)

new Vue({
  render: h => h(App)
}).$mount('#app')
