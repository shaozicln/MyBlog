<template>
    <div class="nav-bar">
        <ul>
            <li v-for="(item, index) in navItems" :key="index" :class="{ active: activeIndex === index }"
                @click="activeIndex = index">
                <router-link :to="item.to">{{ item.text }}</router-link>
            </li>
            <li class="search-item">
                <input type="text" placeholder="搜索文章..." v-model="searchQuery" />
                <button @click="performSearch"><i class="iconfont icon-sousuo"></i></button>
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
    { to: '/sort', text: '归档' },
    { to: '/back', text: '管理'}
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

.search-item {
    display: flex;
    align-items: center;
    margin-right: 20px;
}

.search-item input {
    margin-right: 5px;
}

.icon-sousuo {
    background-color: rgba(255, 255, 255, 0) !important;
}
</style>