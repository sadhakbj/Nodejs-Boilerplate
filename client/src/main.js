import Vue from "vue";
import App from "./components/App.vue";
import Axios from "axios";
import VueAxios from "vue-axios";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import BootstrapVue from "bootstrap-vue";

import "./assets/style.scss";
Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(VueAxios, Axios);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
