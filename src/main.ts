import App from './App.vue'
import { createApp } from 'vue'
import router from "./routers/router.ts"
import "element-plus/dist/index.css"; // 引入样式
import ElementPlus from 'element-plus';
import "./assets/css/iconFont/iconfont.css";
import { createPinia } from 'pinia';

// 创建 Pinia 实例
const pinia = createPinia();
const app = createApp(App)
app.use(router)
app.use(ElementPlus);
app.use(pinia)
app.mount('#app')






