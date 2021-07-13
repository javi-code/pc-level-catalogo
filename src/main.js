import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { apolloProvider } from './config/apolloConfig'

import './shared/importsCss'

Vue.config.productionTip = false

new Vue({
   apolloProvider,
   store,
   router,
   render: h => h(App)
}).$mount('#app')
