import axios from "axios";
import { createApp } from "vue";
import VueAxios from "vue-axios";
import App from "./App.vue";
import router from "./router";

const app = createApp(App)
  .use(router)
  .use(VueAxios, axios);

router.isReady().then(() => {
  app.mount("#app");
});
