import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Pokemon from "./pages/Pokemon.vue";
import App from "./App.vue";

const router = createRouter({
   history: createWebHistory(),
   routes: [
      {
         path: "/",
         name: "Home",
         component: Home,
      },
      {
         path: "/pokemon",
         name: "Pokemon",
         component: Pokemon,
      },
   ],
});

createApp(App).use(router).mount("#app");
