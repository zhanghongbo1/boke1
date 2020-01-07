import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import particles from 'particles.js'
import './assets/rem'
import './assets/reset.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/rem'
Vue.config.productionTip = false
Vue.use(particles)
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
