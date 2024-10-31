<template>
    <main class="visitor-main-content">
        <!-- 显示内容或无数据提示 -->
        <div v-if="contentData && contentData.length > 0">
            <!-- 图片内容 -->
            <div v-if="contentType === 'gallery'" class="image-gallery">
                <a-card v-for="(image, index) in contentData" :key="index" hoverable class="gallery-card">
                    <template #cover>
                        <div class="card-image-container">
                            <img :src="image.url" :alt="image.name" class="card-image" @error="onImageError(index)" />
                        </div>
                    </template>
                </a-card>
            </div>

            <!-- 文章内容 -->
            <div v-else-if="contentType === 'articles'" class="article-list">
                <div v-for="(article, index) in contentData" :key="index" class="article-card">
                    <h3>{{ article.title }}</h3>
                    <p>{{ article.excerpt }}</p>
                </div>
            </div>
        </div>

        <!-- 当没有数据时显示提示 -->
        <div v-else class="no-data">
            <p>暂无数据</p>
        </div>
    </main>
</template>



<script>

export default {
    mounted() {
        console.log("Mounted VisitorMainContent");
        console.log("contentData:", this.contentData); // 确认是否接收到图片数据
        console.log("contentType:", this.contentType);
    },
    props: {
        contentType: {
            type: String,
            required: true,
        },
        contentData: {
            type: Array,
            required: true,
        },
    },
    methods: {
        onImageError(index) {
            this.$emit("imageError", index);
        },
    },
};
</script>