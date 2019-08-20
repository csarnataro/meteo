import Vue from 'vue'
import Tooltip from 'vue-directive-tooltip'
import 'vue-directive-tooltip/dist/vueDirectiveTooltip.css'

import App from './App.vue'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.use(Tooltip)

new Vue({
  render: h => h(App)
}).$mount('#app')
