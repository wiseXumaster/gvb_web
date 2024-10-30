<template>
    <div class="visitor-aside">
        <div class="visitor-aside-header">
            <div class="visitor-aside-logo">
                <img src="https://sly9bn5nh.hn-bkt.clouddn.com/gvb/20241030211926_dog.jpg" alt="Logo">
            </div>
            <div class="visitor-aside-title">
                WiseXplore
            </div>
        </div>
        <div class="visitor-aside-body">
            <!-- 导航菜单 -->
            <a-menu
                v-model:openKeys="openKeys"
                v-model:selectedKeys="selectedKeys"
                mode="inline"
                :theme="theme"
                class="visitor-aside-body"
            >
                <a-sub-menu key="imagesM">
                    <template #icon>
                        <AppstoreOutlined />
                    </template>
                    <template #title>图片</template>
                    <a-menu-item key="image_list" @click="fetchData('image_list')">图片列表</a-menu-item>
                </a-sub-menu>
            </a-menu>
        </div>
    </div>
</template>

<script>
import { defineComponent, reactive, toRefs, computed } from 'vue';
import { MailOutlined, CalendarOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';
import { useThemeStore } from '@/stores/stores.js'; // 确保路径正确

export default defineComponent({
    components: {
        MailOutlined,
        CalendarOutlined,
        AppstoreOutlined,
        SettingOutlined,
    },
    setup() {
        const themeStore = useThemeStore();

        const state = reactive({
            selectedKeys: ['1'],
            openKeys: ['sub1'],
        });

        // 计算属性，根据主题 store 自动设置菜单主题
        const theme = computed(() => (themeStore.theme ? 'light' : 'dark'));

        return {
            ...toRefs(state),
            theme,
        };
    },
    methods: {
        // 发送请求的函数
        async fetchData(key) {
            const urlMap = {
                image_list: 'http://localhost:8080/api/images',
            };
            const url = urlMap[key];

            try {
                const response = await this.$axios.get(url);
                this.$emit('dataFetched', response.data);
            } catch (error) {
                console.error('请求失败:', error);
            }
        },
    },
});
</script>
<style scoped>
.visitor-aside {
    width: 200px; /* 更窄的侧边栏 */
    background-color: var(--sidebar-bg-color);
    color: var(--sidebar-text-color);
    height: 100%;
    overflow-y: auto;
    padding: 5px 0; /* 减少顶部和底部的内边距 */
    box-sizing: border-box;
    border-right: 1px solid var(--sidebar-border-color);
}

/* 标题和 logo 样式 */
.visitor-aside-header {
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    /*border-bottom: 1px solid var(--sidebar-border-color);*/
}

.visitor-aside-logo img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    margin-right: 8px;
}

.visitor-aside-title {
    font-size: 1em;
    font-weight: bold;
    color: var(--sidebar-text-color);
}

/* 菜单样式 */
.visitor-aside-body .ant-menu {
    background-color: var(--sidebar-bg-color);
    border-right: none;
}

/* 菜单项样式 */
.visitor-aside-body .ant-menu-item,
.visitor-aside-body .ant-menu-submenu-title {
    color: var(--sidebar-text-color);
    padding: 8px 20px; /* 紧凑的内边距 */
    font-size: 13px; /* 小一些的字体 */
}

/* 选中项样式 */
.visitor-aside-body .ant-menu-item-selected,
.visitor-aside-body .ant-menu-submenu .ant-menu-item-selected {
    background-color: var(--primary-color);
    color: #ffffff !important;
    font-weight: 500; /* 稍微加粗 */
}

/* 子菜单项样式 */
.visitor-aside-body .ant-menu-submenu .ant-menu-item {
    background-color: var(--sidebar-bg-color);
    color: var(--sidebar-text-color);
    padding-left: 28px; /* 更紧凑的子菜单缩进 */
}

/* 悬停效果 */
.visitor-aside-body .ant-menu-item:hover,
.visitor-aside-body .ant-menu-submenu-title:hover {
    color: var(--primary-color);
}

/* 子菜单悬停效果 */
.visitor-aside-body .ant-menu-submenu .ant-menu-item:hover {
    color: var(--primary-color);
}
</style>