import { createApp } from 'vue';
import App from './App.vue';
import 'amfe-flexible';
import { Button } from 'vant';
import router from './router/index';

const app = createApp(App);

app.use(Button);

app.use(router);
app.mount('#app');
