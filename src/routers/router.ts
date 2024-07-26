// 导入路由创建的相关方法
import {createRouter, createWebHashHistory} from 'vue-router'
import Welcome from "../pages/welcome/Welcome.vue";
import StudyJavaTec from "../pages/studyJavaTec/StudyJavaTec.vue";
import Login from "../pages/login/Login.vue";
import Register from "../pages/register/Register.vue";
import SelfCenter from "../pages/selfCenter/SelfCenter.vue";

// 创建路由对象,声明路由规则
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/welcome',
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

        {
            path: '/selfCenter',
            name: 'SelfCenter',
            component: SelfCenter
        },

    ]

})
router.afterEach((to, from) => {
    if ((from.path === '/login' || from.path === '/selfCenter')  && (to.path === '/' || to.path === '/welcome')) {
        // 添加一个延迟以确保导航完成后再刷新页面
        setTimeout(() => {
            location.reload();
            console.log('刷新');
        }, 50);
    }
});

export default router;