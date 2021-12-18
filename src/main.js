import Vue from 'vue'
import App from './App.vue'

// 今度はfeature/#2で修正！
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
