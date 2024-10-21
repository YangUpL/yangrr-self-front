import { createRouter, createWebHashHistory } from 'vue-router';
import { error } from '../message/message';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/welcome/platform-introduction',
        },
        {
            path: '/welcome',
            children: [
                {
                    path: 'platform-introduction', // 平台简介
                    name: 'PlatformIntroduction',
                    component: () => import('../pages/welcome/PlatformIntroduction.vue')
                },
                {
                    path: 'about-author', // 了解作者
                    name: 'AboutAuthor',
                    component: () => import('../pages/welcome/AboutAuthor.vue')
                },
                {
                    path: 'knowledge-exchange', // 知识交流
                    name: 'KnowledgeExchange',
                    component: () => import('../pages/welcome/MainKnowledgeExchange.vue'),
                    meta: { requiresAuth: true }
                },
                {
                    path: 'knowledge-exchange-detail/:id', // 知识交流
                    name: 'DetailKnowledgeExchange',
                    component: () => import('../pages/welcome/DetailKnowledgeExchange.vue'),
                    meta: { requiresAuth: true }
                }
            ]
        },
        
        {
            path: '/studyJavaTec',
            name: 'StudyJavaTec',
            component: () => import('../pages/studyJavaTec/StudyJavaTec.vue'),
            meta: { requiresAuth: true }
        },
        {
            path: '/interviewJava',
            name: 'InterviewJava',
            component: () => import('../pages/interviewJava/InterviewJava.vue'),
            meta: { requiresAuth: true }
        },
        {
            path: '/interviewAnswer',
            name: 'InterviewAnswer',
            component: () => import('../pages/interviewAnswer/InterviewAnswer.vue'),
            meta: { requiresAuth: true }
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import('../pages/login/Login.vue')
        },
        {
            path: '/register',
            name: 'Register',
            component: () => import('../pages/register/Register.vue')
        },
        {
            path: '/findPwd',
            name: 'FindPwd',
            component: () => import('../pages/findPwd/FindPwd.vue')
        },
        {
            path: '/selfCenter',
            name: 'SelfCenter',
            component: () => import('../pages/selfCenter/SelfCenter.vue'),
            meta: { requiresAuth: true }
        },
        {
            path: '/admin/userManager',
            name: 'UserManager',
            component: () => import('../pages/admin/UserManager.vue'),
            meta: { requiresAuth: true }
        },
        {
            path: '/admin/questionManager',
            name: 'QuestionManager',
            component: () => import('../pages/admin/QuestionManager.vue'),
            meta: { requiresAuth: true }
        },
    ]
});

router.beforeEach((to, from, next) => {
    // 获取用户信息
    const userInfo = sessionStorage.getItem('userInfo');

    // 如果目标路由需要登录且用户未登录
    if (to.meta.requiresAuth && !userInfo) {
        error('请先登录，即可体验完整功能')
        // 重定向到登录页面
        next('/login');
    } else {
        // 允许路由跳转
        next();
    }
});

export default router;
