// 导入路由创建的相关方法
import {createRouter, createWebHashHistory} from 'vue-router'
import Welcome from "../pages/welcome/Welcome.vue";
import StudyJavaTec from "../pages/studyJavaTec/StudyJavaTec.vue";
import Login from "../pages/login/Login.vue";
import Register from "../pages/register/Register.vue";

// 创建路由对象,声明路由规则
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect:'/welcome',
        },
        {
            path: '/welcome',
            component: Welcome
        },
        {
            path: '/studyJavaTec',
            name: 'StudyJavaTec',
            component: StudyJavaTec
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        },

    ]

})

export default router;