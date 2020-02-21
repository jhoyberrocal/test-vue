import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import router from './router';

Vue.prototype.API = 'https://jsonplaceholder.typicode.com';
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
