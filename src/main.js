//css
import 'vuetify/dist/vuetify.min.css'
// js modules
import '@babel/polyfill'
import Vue from 'vue'
import vuetify from 'vuetify'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(vuetify)

new Vue({
  render: h => h(App)
}).$mount('#app')
