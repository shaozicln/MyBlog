<template>
    <div id="Content" style="height:100vh;">
        <div class="sidebar">
            <div class="category" v-for="(category, index) in categories" :key="category.Id"
                @click="scrollToCategory(index)">
                <div class="category-content">
                    <img :src="'../Public/Pictures/' + category.Img" alt="图片丢失了!">
                    <span class="category-name">{{ category.Name }}</span>
                </div>
            </div>
        </div>
        <div class="articles">                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
            <div class="article-category" v-for="(category, index) in categories" :key="'category-' + category.Id">
                <h2 :id="'category-' + index">{{ category.Name }}</h2>
                <div class="articles-list">
                    <article class="article" v-for="article in category.Articles" :key="article.Id">
                        <div class="article-content">
                            <img :src="'../Public/Pictures/' + article.Img" alt="文章图片丢失了!" id="Aimg">
                            <span class="article-name">{{ article.Title }}</span>
                        </div>

                    </article>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';


const categories = ref([]);

// 获取分类和文章数据
const fetchCategories = async () => {
    try {
        const response = await fetch('http://127.0.0.1:8081/categories-with-articles');
        const data = await response.json();
        categories.value = data.data;
        console.log(data.data);

    } catch (error) {
        console.error('Failed to fetch categories:', error);
    }
};

// 滚动到特定分类的方法
const scrollToCategory = (index) => {
    const categoryElement = document.getElementById(`category-${index}`);
    if (categoryElement) {
        categoryElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        console.warn(`Category element with id 'category-${index}' not found.`);
    }
};

// 跳转到文章页面的方法
const goToArticlePage = (categoryId) => {
    // 假设文章页面的URL格式为 `/article/${categoryId}`
    window.location.href = `/article/${categoryId}`;
};

// 在组件挂载时获取数据
onMounted(() => {
    fetchCategories();
});

</script>

<style>
#Content {
    display: flex;
    width: 70vw;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto auto;
}

.sidebar {
    width: 20%;
    /* 或固定宽度，如200px */
    padding: 20px;
    box-sizing: border-box;
    grid-column: 1/8;
}

.category {
    cursor: pointer;
    margin-bottom: 10px;
    position: relative;
    /* 添加相对定位 */
}

.category img {
    width: 100%;
    height: auto;
    display: block;
    margin-bottom: 5px;
}

.category-content {
    position: relative;
    /* 添加相对定位 */
}

.category-name {
    position: absolute;
    /* 绝对定位 */
    bottom: 0;
    /* 定位在图片底部 */
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    /* 半透明背景 */
    color: white;
    /* 文字颜色 */
    text-align: center;
    padding: 5px 0;
    /* 上下内边距 */
}


.articles {
    width: 100%;
    /* 或剩余空间 */
    overflow-y: auto;
    padding: 20px;
    box-sizing: border-box;
    grid-column: 8/13;
}

.article-category {
    margin-bottom: 40px;
}

.article-category h2 {
    margin-top: 0;
}

.article {
    margin-bottom: 20px;
}

.article-content {
    position: relative;
    /* 添加相对定位 */
}

.article-name {
    position: absolute;
    /* 绝对定位 */
    bottom: 0;
    /* 定位在图片底部 */
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    /* 半透明背景 */
    color: white;
    /* 文字颜色 */
    text-align: center;
    padding: 5px 0;
    /* 上下内边距 */
}

#Aimg {
    width: 300px;
    height: 300px;
}

/* 确保滚动条在视高固定的情况下不会导致内容区域溢出 */
.Content,
.articles {
    overflow: auto;
    mask-image: linear-gradient(to bottom, white, black 20px, black 100%);
}
</style>
