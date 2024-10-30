<template>
    <div class="admin">
        <AdminAside/>
        <div class="admin-right">
            <header class="admin-header">
                <div class="admin-breadcrumb">
                    <a-breadcrumb>
                        <a-breadcrumb-item>首页</a-breadcrumb-item>
                        <a-breadcrumb-item><a href="#">个人中心</a></a-breadcrumb-item>
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
import '@/assets/css/admin-theme.css';  // 引入整合后的样式文件
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