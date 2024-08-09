<template>
    <div class="nav-bar">
        <ul>
            <li v-for="(item, index) in navItems" :key="index" :class="{ active: activeIndex === index }"
                @click="activeIndex = index">
                <router-link :to="item.to">{{ item.text }}</router-link>
            </li>
            
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const activeIndex = ref(0)

const navItems = [
    { to: '/login', text: 'ShaoのBlog' },
    { to: '/', text: '首页' },
    { to: '/message-board', text: '留言/友链' },
    { to: '/articles', text: '文章' },
    { to: '/sort', text: '数据' },
    { to: '/back', text: '管理' },
    { to: '/search', text: '搜索一下'}
]
</script>

<style scoped>
*{
    font-size: 30px;
}

.nav-bar {
    background-color: rgba(160,191,228, 0.566);
    color: #000000;
    padding: 1em;
    text-align: center;
    transition: all 0.3s;
    padding-left: 50px;
    padding-right: 50px;
}

.nav-bar:hover {
    background-color: rgba(255, 255, 255, 0);
    color: #000000;
    padding: 1em;
    text-align: center;
}

.nav-bar ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
}

.nav-bar li {
    margin-right: 20px;
}

.nav-bar a {
    color: #000000;
    text-decoration: none;
}

.nav-bar a:hover {
    color: #000000bb;
}

.nav-bar:hover a {
    color: #000000;
}

.nav-bar li:last-child {
    margin-right: 0;
}

</style>