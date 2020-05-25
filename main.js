import Vue from 'vue'
import App from './App'
import api from './common/api/index.js'
Vue.config.productionTip = false
console.log('api:\r\n', api)
Vue.prototype.$api = api
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
