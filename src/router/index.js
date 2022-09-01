import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/components/home/Home.vue'
import Landing from '@/components/landing/Landing.vue'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/landing',
        component: Landing
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router