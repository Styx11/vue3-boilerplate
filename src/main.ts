import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

// 创建一个独立的根实例，防止全局污染
const app = createApp(App)

app
	.use(store)
	.use(router)
	.mount('#app')