import { createSSRApp } from "vue";
import App from "./App.vue";

import global from "@/global";

export function createApp() {
  const app = createSSRApp(App);
  app.use(global)
  return {
    app,
  };
}
