import axios from "axios";
import Vue from "vue";
import VueAxios from 'vue-axios';
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
