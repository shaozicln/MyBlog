<template>
    <div>
        <span>{{ displayText }}</span>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';


const fullTexts = ref([
    "你想活出怎样的人生？   ",
    "方圆天地，皆在此间   ",
    "煮酒论英雄   ",
    "一起感受Coding的乐趣   "
]);

//显示
const displayText = ref("");
//索引
const currentTextIndex = ref(0);
//进度
const currentProgress = ref(0);
//速度-----每秒显示的字符数
const speed = 3; 
// 定时器ID
let intervalId;

// 计算当前应该显示的文本
const currentText = computed(() => {
    return fullTexts.value[currentTextIndex.value].substring(0, currentProgress.value);
});

onMounted(() => {
    // 启动逐字显示
    intervalId = setInterval(() => {
        if (currentProgress.value < fullTexts.value[currentTextIndex.value].length) {
            currentProgress.value += 1; // 增加显示的字符数
        } else {
            // 当前语句显示完毕，准备显示下一条语句
            currentProgress.value = 0;
            currentTextIndex.value = (currentTextIndex.value + 1) % fullTexts.value.length;
        }
        displayText.value = currentText.value;
    }, 1000 / speed); // 根据速度设置定时器的时间间隔
});

onUnmounted(() => {
    clearInterval(intervalId); // 清除定时器
});
</script>

<style scoped>
/* 你的CSS样式 */
</style>