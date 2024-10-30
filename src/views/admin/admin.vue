<template>
    <div class="admin">
        <AdminAside/>
        <div class="admin-right">
            <header class="admin-header">
                <div class="admin-breadcrumb">
                    <a-breadcrumb>
                        <a-breadcrumb-item>首页</a-breadcrumb-item>
                        <a-breadcrumb-item><a href="#">个人中心</a></a-breadcrumb-item>
                        <a-breadcrumb-item>用户列表</a-breadcrumb-item>
                    </a-breadcrumb>
                </div>
                <div class="admin-header-right">
                    <div class="icon-actions">
                        <i class="fa fa-home"></i>
                        <i :class="theme ? 'fa fa-sun-o' : 'fa fa-moon-o'" @click="toggleTheme"></i>
                        <i class="fa fa-arrows-alt" @click="toggleFullScreen"></i>
                    </div>
                    <div class="avatar">
                        <img src="https://sly9bn5nh.hn-bkt.clouddn.com/gvb/20241026194124_QQ%E5%9B%BE%E7%89%8720240604160049.jpg"/>
                    </div>
                    <div class="drop-menu">
                        <a-dropdown>
                            <a class="ant-dropdown-link" @click.prevent>
                                wiseXuMaster
                                <i class="fa fa-angle-down"></i>
                            </a>
                            <template>
                                <a-menu @click="menuClick">
                                    <a-menu-item key="user_center">个人中心</a-menu-item>
                                    <a-menu-item key="my_messages">我的消息</a-menu-item>
                                    <a-menu-item key="article_list">文章列表</a-menu-item>
                                    <a-menu-item key="logout">注销退出</a-menu-item>
                                </a-menu>
                            </template>
                        </a-dropdown>
                    </div>
                </div>
            </header>
            <div class="admin-tabs">
                <!-- 标签页内容 -->
            </div>
            <main class="admin-main-content">
                <!-- 主内容 -->
            </main>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useThemeStore } from '@/stores/stores'; // 引入主题 store
import AdminAside from '@/components/admin/admin-aside.vue' // 引入侧边栏组件
const router = useRouter();
const themeStore = useThemeStore(); // 获取主题 store

const { theme, toggleTheme } = themeStore; // 解构主题状态和切换函数

function menuClick({ key }) {
    if (key === 'logout') {
        console.log('logout');
        return;
    }
    router.push({ name: key });
}

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
        document.exitFullscreen();
    }
}
</script>

<style scoped>
.admin {
    display: flex;
    width: 100%;
    height: 100vh;
}

.admin-right {
    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: var(--bg-color);
    color: var(--text-color);
}

/* Header 样式 */
.admin-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    background-color: var(--header-bg-color);
    padding: 0 20px;
    border-bottom: 1px solid var(--border-color);
}

/* 面包屑样式 */
.admin-breadcrumb a {
    color: var(--text-color);
    text-decoration: none;
}

.admin-breadcrumb a:hover {
    color: var(--primary-color);
}

.admin-breadcrumb .ant-breadcrumb .ant-breadcrumb-item,
.admin-breadcrumb .ant-breadcrumb .ant-breadcrumb-separator {
    color: var(--text-color);
}

/* Header右侧的图标和头像样式 */
.admin-header-right {
    display: flex;
    align-items: center;
}

.icon-actions {
    display: flex;
    align-items: center;
    margin-right: 20px;
}

.icon-actions i {
    margin-left: 10px;
    cursor: pointer;
    font-size: 16px;
    color: var(--text-color);
    transition: color 0.3s ease;
}

.icon-actions i:hover {
    color: var(--primary-color);
}

.avatar img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

.drop-menu {
    margin-left: 10px;
}

/* 标签页样式 */
.admin-tabs {
    height: 30px;
    background-color: var(--bg-color);
    border-bottom: 1px solid var(--border-color);
}

/* 主内容区域样式 */
.admin-main-content {
    flex: 1;
    padding: 20px;
    overflow-y: auto;
    background-color: var(--bg-color);
    color: var(--text-color);
}
</style>
