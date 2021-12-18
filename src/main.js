import Vue from 'vue'
import App from './App.vue'

// feature/#1にて修正
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
