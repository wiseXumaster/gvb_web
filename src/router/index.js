import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/', // 根路径
            name: 'visitor', // 直接加载 visitor 组件
            component: () => import('../views/visitor/visitor.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/login.vue')
        }
    ]
})

export default router
