import Vue from 'vue'
import App from './App.vue'

// 今度はfeature/#3で修正したよ〜
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
