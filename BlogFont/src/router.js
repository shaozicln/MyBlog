import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'//首页
import MessageBoard from './components/MessageBoard.vue'//留言/友链
import Sort from './components/Sort.vue'
import Articles from './components/Articles.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Back from './components/Back.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component:Home
    },
    {
        path: '/message-board',
        name: 'MessageBoard',
        component:MessageBoard
    },
    {
        path: '/sort',
        name: 'Sort',
        component:Sort
    },
    {
        path: '/articles',
        name: 'Articles',
        component:Articles
    },
    {
        path: '/login',
        name: 'Login',
        component:Login
    },
    {
        path: '/register',
        name: 'Register',
        component:Register
    },
    {
        path: '/back',
        name: 'Back',
        component:Back
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router