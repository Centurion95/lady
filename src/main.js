/*
 =========================================================
 * Vue Black Dashboard Laravel - v1.1.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/vue-black-dashboard-laravel
 * Copyright Creative Tim (http://www.creative-tim.com) & UPDIVISION (https://www.updivision.com)

 
 * Coded by www.creative-tim.com & www.updivision.com

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
import Vue from "vue";
import VueRouter from "vue-router";
import RouterPrefetch from 'vue-router-prefetch'
import App from "./App";
// TIP: change to import router from "./router/starterRouter"; to start with a clean layout
//import router from "./router/starterRouter"; //rc95 02/06/2021 22:33

import router from "./router/index2"; //rc95 13/08/2021 19:17
//import router from "./router/index"; //rc95 12/02/2022 16:14 - tiene que andar el login


// import router from "./router/index";3000
import store from "./store";

import BlackDashboard from "./plugins/blackDashboard";
import i18n from "./i18n"
import './registerServiceWorker'
import VueMeta from 'vue-meta'
import IsDemo from './plugins/isDemo'

Vue.use(BlackDashboard);
Vue.use(VueRouter);
Vue.use(RouterPrefetch);
Vue.use(IsDemo)
Vue.use(VueMeta, { keyName: 'head' })

/* eslint-disable no-new */
new Vue({
  store: store,
  router,
  i18n,
  render: h => h(App)
}).$mount("#app");
