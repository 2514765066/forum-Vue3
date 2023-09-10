import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import pinia from "./stores";
import { vSrc } from "@/hooks/useDirective";
import "@/assets/simple.css";
import "animate.css";

const app = createApp(App);

app.use(pinia);
app.use(router);

app.directive("src", vSrc);

app.mount("#app");
