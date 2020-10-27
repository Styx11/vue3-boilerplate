import { createApp } from 'vue';
import App from './App.vue';

// 创建一个独立的根实例，防止全局污染
const app = createApp(App);

app.mount('#app');