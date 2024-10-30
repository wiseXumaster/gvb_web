import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/visitor' // 根路径重定向到 /visitor
        },
        {
            path: "/login",
            name: "login",
            component: () => import("../views/login.vue")
        },
        {
            path: "/admin",
            name: "admin",
            component: () => import("../views/admin/admin.vue"),
            children: []
        },
        {
            path: "/visitor",
            name: "visitor",
            component: () => import("../views/visitor/visitor.vue"),
            children: []
        }
    ]
})

export default router
