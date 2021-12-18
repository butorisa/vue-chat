import Vue from 'vue'
import App from './App.vue'

// feature/#4で修正して競合発生
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
