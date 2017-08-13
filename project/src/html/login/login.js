import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import store from './store/'
import iView from 'iview'
import './style/main.less'

Vue.use(iView)

/*const bus = new Vue()

Vue.prototype.$bus = bus*/

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
})
