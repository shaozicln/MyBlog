<template>
    <div id="con">
        <div>
            <form action="#" class="form" id="form-up">
                <h2 id="tit">注册</h2>
                <select name="file" id="file" type="text" placeholder="选择头像" v-model="avatarPath">
                    <option v-for="path in avatarPaths" :key="path" :value="path">{{ path }}</option>
                </select><br>
                <input v-model="username" placeholder="请输入用户名" type="text" name="username" id="username"><br>
                <input v-model="password" placeholder="请输入密码" type="password" name="password" id="password"><br>
                <input v-model="roleQx" placeholder="请输入权限A/B" type="text" name="roleQx" id="roleQx"><br>
            </form>
            <div id="ggg">
                <button id="bs" @click="createUser">注册</button>
                <router-link :to="{path : '/login'}">登录</router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const username = ref('');
const password = ref('');
const roleQx = ref('');
const avatarPath = ref('../assert/Pictures/默认头像.jpg')
const avatarPaths = ref([
    '../assert/Pictures/默认头像.jpg',
    '../assert/Pictures/头像1.jpg',
    '../assert/Pictures/头像2.jpg',
    '../assert/Pictures/头像3.jpg',
])
const createUser = async () => {
    const url = "http://127.0.0.1:8081/users";
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            Username: username.value,
            Password: password.value,
            RoleQx: roleQx.value,
            Avatar: avatarPath.value,
        }),
    })
        .then((response) => {
            if (response.ok) {
                alert("注册成功");
                return response.json();
            }
            throw new Error("创建文章失败，状态码：" + response.status);
        })
        .catch((error) => console.error("Error:", error));
};
</script>