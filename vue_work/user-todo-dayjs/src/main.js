import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);

window.Kakao.init('8ffa4f957158f993d06aeb4a873e59cb'); // 사용하려는 앱의 JavaScript 키 입력

app.mount('#app');
