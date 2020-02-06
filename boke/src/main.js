import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import particles from 'particles.js'
import './assets/rem'
import './assets/reset.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueAMap from 'vue-amap';
import Blob from './assets/excel/Blob'
import Export2Excel from './assets/excel/Export2Excel.js'

import './assets/rem'

Vue.use(VueAMap);





Vue.config.productionTip = false
Vue.use(particles)
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
