import { createApp } from 'vue'
import App from './App.vue'
import 'amfe-flexible'
import {Button, Icon} from "vant";
import router from "./router/index";
import './commom/css/base.less'

const app  = createApp(App)

// vant组件库的引入
app.use(Button)
app.use(Icon)
//引入组件router
app.use(router)

app.mount('#app')
