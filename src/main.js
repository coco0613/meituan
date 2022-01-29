import { createApp } from 'vue'
import App from './App.vue'
import 'amfe-flexible'
import {Button} from "vant";
import router from "./router/index";

const app  = createApp(App)

// vant组件库的引入
app.use(Button)
//引入组件router
app.use(router)

app.mount('#app')
