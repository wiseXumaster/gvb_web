<template>
    <div class="visitor-aside">
        <div class="visitor-aside-header">
            <!-- Logo -->
            <div class="visitor-aside-logo">
                <img src="http://sly9bn5nh.hn-bkt.clouddn.com/gvb/20241031101830_dog.jpg" alt="Logo">
            </div>
            <!-- Title -->
            <div class="visitor-aside-title">
                WiseXplore
            </div>
            <!-- Icon Actions -->
            <div class="icon-actions">
                <i class="fa fa-home"></i>
                <i :class="isDarkTheme ? 'fa fa-sun-o' : 'fa fa-moon-o'" @click="toggleTheme"></i>
                <i class="fa fa-arrows-alt" @click="toggleFullScreen"></i>
            </div>
        </div>
        <!-- Menu -->
        <div class="visitor-aside-body">
            <a-menu
                    v-model:openKeys="openKeys"
                    v-model:selectedKeys="selectedKeys"
                    mode="inline"
                    :theme="isDarkTheme ? 'dark' : 'light'"
                    class="visitor-aside-body"
            >
                <a-sub-menu key="imagesM">
                    <template #icon>
                        <PictureOutlined/>
                    </template>
                    <template #title>图库</template>
                    <a-menu-item key="image_list" @click="fetchData('image_list')">图片列表</a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="articleM">
                    <template #icon>
                        <ReadOutlined/>
                    </template>
                    <template #title>博文</template>
                    <a-menu-item key="article_list" @click="fetchData('article_list')">随笔</a-menu-item>
                    <a-menu-item key="code_list" @click="fetchData('code_list')">项目</a-menu-item>
                </a-sub-menu>
            </a-menu>
        </div>
    </div>
</template>

<script>
import {defineComponent, reactive, toRefs, computed} from 'vue';
import {AppstoreOutlined, ReadOutlined, PictureOutlined} from '@ant-design/icons-vue';

export default defineComponent({
    components: {
        AppstoreOutlined,
        ReadOutlined,
        PictureOutlined
    },
    setup() {
        const state = reactive({
            selectedKeys: ['1'],
            openKeys: ['sub1'],
        });

        // 计算属性：检查当前是否为夜间模式
        const isDarkTheme = computed(() => document.documentElement.classList.contains('dark'));

        // 切换主题
        const toggleTheme = () => {
            document.documentElement.classList.toggle('dark');
        };

        // 全屏切换
        const toggleFullScreen = () => {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen();
            } else if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        };

        return {
            ...toRefs(state),
            isDarkTheme,
            toggleTheme,
            toggleFullScreen
        };
    },
    methods: {
        async fetchData(key) {
            const urlMap = {
                image_list: '/images',
                article_list: '/articles',
                code_list: '/projects'
            };
            const url = urlMap[key];

            try {
                const response = await this.$axios.get(url);
                console.log("Fetched data:", response.data);
                // 传递完整的 response.data 给父组件
                this.$emit('dataFetched', response.data);
            } catch (error) {
                console.error('请求失败:', error);
                this.$emit('dataFetched', { data: { list: [] } }); // 请求失败时传递空列表
            }
        }
    },
});
</script>