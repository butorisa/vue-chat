import Vue from 'vue'
import App from './App.vue'

// feature/#8
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
