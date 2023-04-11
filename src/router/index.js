import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'dashboard',
            component: () => import("@/commponents/tabbar/Tabbar.vue"),
            children: [
                {
                    path: '/',
                    redirect: '/home'
                },
                {
                    name: 'home',
                    path: 'home',
                    component: () => import("@/views/home/Home.vue")
                },
                {
                    name: 'message',
                    path: 'message',
                    component: () => import("@/views/message/Message.vue")
                },
                {
                    name: 'collect',
                    path: 'collect',
                    component: () => import("@/views/collect/Collect.vue")
                },
                {
                    name: 'order',
                    path: 'order',
                    component: () => import("@/views/order/Order.vue")
                },
            ]
        },

    ]
})
export default router