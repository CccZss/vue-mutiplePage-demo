import Vue from 'vue'
import App from './App'
import router from './router/router.js'
import store from './store/index.js'


/* eslint-disable no-new */
new Vue({
	router,
	store,
  	template: '<App/>',
  	components: { App }
}).$mount('#app')
