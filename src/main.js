import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(Vuex, VueRouter)

new Vue({
  render: h => h(App),
}).$mount('#app')
