import { createApp } from 'vue'
import App from './App.vue'
import router from "./routers/router.ts"
import ElementPlus from 'element-plus';
//重点 样式必须要加
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(router)
app.use(ElementPlus);
app.mount('#app')






