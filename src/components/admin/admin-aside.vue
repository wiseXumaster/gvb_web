<template>
    <div class="admin-aside">
        <div class="admin-aside-header">
            <div class="admin-aside-logo">
                <img src="https://sly9bn5nh.hn-bkt.clouddn.com/gvb/20241026194124_QQ%E5%9B%BE%E7%89%8720240604160049.jpg" alt="Logo">
            </div>
            <div class="admin-aside-title">
                WiseXplore
            </div>
        </div>
        <div class="admin-aside-body">
            <!-- 导航菜单 -->
            <a-menu
                v-model:openKeys="openKeys"
                v-model:selectedKeys="selectedKeys"
                mode="inline"
                :theme="theme"
                class="admin-aside-body"
            >
                <a-sub-menu key="menusM">
                    <template #icon>
                        <AppstoreOutlined />
                    </template>
                    <template #title>菜单管理</template>
                    <a-menu-item key="menu_list" @click="fetchData('menu_list')">菜单列表</a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="imagesM">
                    <template #icon>
                        <AppstoreOutlined />
                    </template>
                    <template #title>图片管理</template>
                    <a-menu-item key="image_list" @click="fetchData('image_list')">图片列表</a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="advertsM">
                    <template #icon>
                        <AppstoreOutlined />
                    </template>
                    <template #title>广告管理</template>
                    <a-menu-item key="advert_list" @click="fetchData('advert_list')">广告列表</a-menu-item>
                </a-sub-menu>
            </a-menu>
        </div>
    </div>
</template>

<script>
import { defineComponent, reactive, toRefs, computed } from 'vue';
import { MailOutlined, CalendarOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';
import { useThemeStore } from '@/stores/stores'; // 确保路径正确

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
    // methods: {
    //     // 发送请求的函数
    //     async fetchData(key) {
    //         const urlMap = {
    //             menu_list: 'http://localhost:8080/api/menus',
    //             image_list: 'http://localhost:8080/api/images',
    //             advert_list: 'http://localhost:8080/api/adverts',
    //         };
    //         const url = urlMap[key];
    //
    //         try {
    //             const response = await this.$axios.get(url);
    //             console.log(`${key} 数据:`, response.data);
    //         } catch (error) {
    //             console.error('请求失败:', error);
    //         }
    //     },
    // },
});
</script>
<style scoped>
.admin-aside {
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
.admin-aside-header {
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    /*border-bottom: 1px solid var(--sidebar-border-color);*/
}

.admin-aside-logo img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    margin-right: 8px;
}

.admin-aside-title {
    font-size: 1em;
    font-weight: bold;
    color: var(--sidebar-text-color);
}

/* 菜单样式 */
.admin-aside-body .ant-menu {
    background-color: var(--sidebar-bg-color);
    border-right: none;
}

/* 菜单项样式 */
.admin-aside-body .ant-menu-item,
.admin-aside-body .ant-menu-submenu-title {
    color: var(--sidebar-text-color);
    padding: 8px 20px; /* 紧凑的内边距 */
    font-size: 13px; /* 小一些的字体 */
}

/* 选中项样式 */
.admin-aside-body .ant-menu-item-selected,
.admin-aside-body .ant-menu-submenu .ant-menu-item-selected {
    background-color: var(--primary-color);
    color: #ffffff !important;
    font-weight: 500; /* 稍微加粗 */
}

/* 子菜单项样式 */
.admin-aside-body .ant-menu-submenu .ant-menu-item {
    background-color: var(--sidebar-bg-color);
    color: var(--sidebar-text-color);
    padding-left: 28px; /* 更紧凑的子菜单缩进 */
}

/* 悬停效果 */
.admin-aside-body .ant-menu-item:hover,
.admin-aside-body .ant-menu-submenu-title:hover {
    color: var(--primary-color);
}

/* 子菜单悬停效果 */
.admin-aside-body .ant-menu-submenu .ant-menu-item:hover {
    color: var(--primary-color);
}
</style>