import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.config.globalProperties.$MyUserID = '0';
app.config.globalProperties.$MyUserName = 'TheHooman Kund1997';

app.use(router);

app.mount("#app");
