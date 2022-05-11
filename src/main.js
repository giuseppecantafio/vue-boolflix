import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

import CountryFlag from 'vue-country-flag'

Vue.component('country-flag', CountryFlag)