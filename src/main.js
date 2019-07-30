import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Star from './packages'
import element from 'element-ui'

import './plugins/element.js'

Vue.config.productionTip = false

Vue.use(Star)
Vue.use(element)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
