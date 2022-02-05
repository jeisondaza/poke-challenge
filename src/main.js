import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import i18n from "./i18n/i18n.js";

createApp(App).use(router).use(i18n).mount("#app");
