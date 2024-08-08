<template>
    <div class="background">
        <nav></nav>
        <span>Create Your Account!</span>
    </div>

    <div id="con" class="con">
        <div id="con-signin">
            <form action="#" class="form" id="form-in">
                <h2 id="tit">Login</h2>
                <input v-model="username" placeholder="请输入用户名" type="text" name="username" id="username"><br>
                <input v-model="password" placeholder="请输入密码" type="password" name="password" id="password">
            </form>
            <div>
                <button id="btn登录" @click="check()">登录</button>
                <router-link :to="{ path: '/register' }">注册</router-link>
                <a href="#" @click="forgetPassword()">忘记密码?</a>
            </div>
        </div>

        <dialog ref="forgetPasswordDialog" title="重置密码">
            <form id="reset">
                <input v-model="newUsername" placeholder="请输入用户名" type="text"><br>
                <input v-model="newPassword" placeholder="请输入新密码" type="text"><br>
                <input v-model="newPasswordAgain" placeholder="请再次输入新密码" type="text" @keyup="checkpassword()">
                <br><span id="attention" v-html="attention"></span></input><br>
                <button @click="resetPassword()">重置密码</button>
            </form>
        </dialog>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const attention = ref('')
function checkpassword() {
    if (newPassword.value === newPasswordAgain.value) {
        attention.value = "<font color='green'>ok密码一致</font>"
    } else {
        attention.value = "<font color='red'>密码不一致,请继续输入/修改</font>"
    }
}

const username = ref('');
const password = ref('');
const newUsername = ref('');
const newPassword = ref('');
const newPasswordAgain = ref('');
const router = useRouter();
const check = async () => {
    if (username.value.trim() === "") {
        alert("快看！无名氏！！");
        return;
    }
    if (password.value.trim() === "") {
        alert("请输入密码");
        return;
    }
    try {
        fetch("http://127.0.0.1:8081/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username.value,
                password: password.value,
            }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("登录失败，状态码：" + response.status);
                }
                return response.json();
            })
            .then((data) => {
                if (data.message === "登录成功") {
                    alert("登录成功，点击确认进入");
                    // var userId = data.id;
                    // var userQx = data.qx;
                    // var username = data.username;
                    // var avatar = data.avatar;
                    // localStorage.setItem("avatar", avatar);
                    // localStorage.setItem("userId", userId);
                    // localStorage.setItem("username", username);
                    // localStorage.setItem("userQx", userQx);
                    router.push("/");
                } else if (data.message === "密码错误") {
                    alert("密码错误，请重试");
                } else if (data.message === "喵喵喵？注册了吗就来登录？") {
                    alert("喵喵喵？注册了吗就来登录？");
                }
                console.log(data);
            })
    } catch (error) {
        console.error("Error:", error);
        alert("登录失败, 请重试");
    };
}

const forgetPasswordDialog = ref(null);
const forgetPassword = async () => {
    forgetPasswordDialog.value.show();
}
const resetPassword = async () => {
    try {
        if (newPassword.value != newPasswordAgain.value) {
            alert("两次输入不一致");
            return;
        }
        const username = newUsername.value;
        fetch(`http://127.0.0.1:8081/users/${username}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                password: newPasswordAgain.value
            })
        })
            .then(respon => respon.json())
            .then(data => {
                if (data.error) {
                    alert("重置密码失败");
                } else {
                    alert("重置成功! 不要再忘记了");
                    forgetPasswordDialog.value.hide();
                }
            })
            .catch(error => console.error(error));
    } catch (error) {
        console.error("Error:", error);
        alert("重置密码失败");
    }
}

</script>

<style scope>
dialog {
  background-color: transparent;
  border: none;
  box-shadow: none;
}
#reset{
    background-color: rgba(255, 255, 255, 0.493);
}

a {
  text-decoration: none;
  border: none;
  box-shadow: none;
  outline: none;
}

a:focus {
  outline: none;
  border: none;
  box-shadow: none;
}
</style>