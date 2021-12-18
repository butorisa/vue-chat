import Vue from 'vue'
import App from './App.vue'

// feature/#5です
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
