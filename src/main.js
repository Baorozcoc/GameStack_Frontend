import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.config.globalProperties.$MyUserID = "62ba6fe10504d888fadb516c";
app.config.globalProperties.$MyUserName = 'hola';

app.use(router);

app.mount("#app");
