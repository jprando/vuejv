import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  name: 'WebApp',
  el: '#app',
  template: '<div> <App /> </div>',
  components: { App }
})
