import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'
wx.cloud.init({
  env: 'cloud1-8gp4p35m462d80aa'
})

const app = new Vue(App)
app.$mount()
