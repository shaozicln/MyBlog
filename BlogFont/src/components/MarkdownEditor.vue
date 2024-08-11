<template>
  <div class="left-side">
    <input type="text" v-model="title" placeholder="输入标题" />
    <button class="button" @click="submit">提交</button>
    <div class="markdown-editor">
      <textarea v-model="content" class="markdown-input" />
      <div class="markdown-preview" v-html="renderedContent"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { marked } from 'marked';

const content = ref('');

const renderedContent = computed(() => {
  return marked(content.value);
});
</script>

<style scoped>

.left-side {
    flex: 1;
    padding: 20px;
    max-height: 100vh;
    border-right: 3px solid #fff;
    height: 100%;
}

.left-side,
input {
    margin-right: 50px;
}

.markdown-editor {
  display: flex;
  flex-direction: row;
  gap: 20px;
}

.markdown-input {
  width: 50%;
  height: 90vh;
  padding: 10px;
  border: 1px solid rgb(255, 255, 255);
  border-radius: 5px;
  resize: vertical;
}

.markdown-preview {
  height: 90vh;
  width: 50%;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.86);
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: auto;
}
</style>