<template>
    <div id="friends" class="dividing">
        <h2>Shaoの友链</h2>
        <br>
        <div id="web">
            <ul>
                <li v-for="friend in friends" :key="friend.Id">
                    <a :href="friend.Web" target="_blank" class="aaa">
                        <img :src="'../Public/Pictures/' + friend.Img" :alt="friend.Name">
                        <span class="name">
                            {{ friend.Name }}<br>
                            {{ friend.Web }}<br>
                            {{ friend.Introduction }}<br>
                        </span>
                    </a>
                </li>
            </ul>
        </div>
        <br>
        <div id="send">
            <h3>有个的网站做得不错, 想放个友链 ?</h3>
            <button @click="send()">点我联系作者发送友链</button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const friends = ref([])

onMounted(async () => {
    try {
        const response = await fetch('http://127.0.0.1:8081/friendsWeb', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        friends.value = data.data
    } catch (error) {
        console.error(error)
    }
})
</script>

<style scope>

#friends {
    height: 100vh;
    padding: 50px;
    display: flex;
    justify-self: center;
    align-items: center;
    display: grid;
    grid-template-rows: auto auto auto;
}

h2 {
  text-align: center;
  font-size: 40px;
  font-family: cursive;
}

#web ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    list-style: none;
    padding: 0;
    margin: 0;
}

.aaa {
    width: 100%;
    height: 320px;
    border-radius: 20px;
}

.name {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 25px;
    font-weight: bold;
    opacity: 0;
    transition: top 0.5s, opacity 0.5s;
    /* animate top and opacity */
    border-radius: 20px;
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
}

a {
    display: block;
    position: relative;
}

a:hover .name {
    top: 50%;
    opacity: 1;   
    border-radius: 20px;
}

a:hover::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    z-index: -1;
}

a:hover img {
    filter: brightness(0.5);
}
</style>