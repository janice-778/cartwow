import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.$bus=new Vue()//把bus方法挂在在vue实例对象上，直接调用就好了，bus是事件的公共总线。
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
