<template>
    <div :class="['visitor', isDarkTheme ? 'dark' : 'light']">
        <!-- 侧边栏 -->
        <VisitorAside @dataFetched="handleData" @menuClick="handleMenuClick" />

        <div class="visitor-right">
            <!-- 主内容区域 -->
            <VisitorMainContent
                :contentType="contentType"
                :contentData="selectedContent"
                @imageError="onImageError"
            />
        </div>
    </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";
import VisitorAside from '@/components/visitor/VisitorAside.vue';
import VisitorMainContent from '@/components/visitor/VisitorMainContent.vue';
import '@/assets/css/visitor-theme.css';

// 数据存储
const images = ref([]);
const articles = ref([]);
const selectedContent = ref([]);
const contentType = ref("gallery"); // 默认内容类型

// 主题监控
const isDarkTheme = ref(false);
watchEffect(() => {
    isDarkTheme.value = document.documentElement.classList.contains('dark');
});

// 图片加载错误处理
function onImageError(index) {
    console.warn(`Image at index ${index} failed to load:`, selectedContent.value[index]?.url);
    selectedContent.value[index].url = 'path/to/default-image.jpg';
}

// 处理从侧边栏接收到的数据
function handleData(fetchedData) {
    console.log("Fetched data structure:", fetchedData);

    if (fetchedData && fetchedData.data && Array.isArray(fetchedData.data.list)) {
        console.log("Data list:", fetchedData.data.list); // 打印 data.list 以确认格式
        selectedContent.value = fetchedData.data.list.map(item => ({
            url: item.path,
            name: item.name,
            type: item.image_type || 'gallery'
        }));
    } else {
        selectedContent.value = [];
    }

    console.log("Updated selectedContent:", selectedContent.value);
}

// 处理菜单点击事件
function handleMenuClick(key) {
    contentType.value = key;

    // 根据内容类型设置 selectedContent 直接指向 images 或 articles 的引用
    if (key === 'gallery') {
        selectedContent.value = images.value;
    } else if (key === 'articles') {
        selectedContent.value = articles.value;
    }
    console.log("Content type switched to:", contentType.value);
    console.log("Current selectedContent:", selectedContent.value);
}

</script>

<style scoped>
/* 你可以在这里添加一些样式 */
</style>
