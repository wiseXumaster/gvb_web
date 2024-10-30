<template>
    <div class="admin-container">
        <div class="left">
            <!-- 左侧侧边栏内容 -->
        </div>
        <div class="right">
            <header class="header">
                <div class="breadcrumb">
                    <a-breadcrumb>
                        <a-breadcrumb-item>首页</a-breadcrumb-item>
                        <a-breadcrumb-item><a href="#">个人中心</a></a-breadcrumb-item>
                        <a-breadcrumb-item>用户列表</a-breadcrumb-item>
                    </a-breadcrumb>
                </div>
                <div class="header-right">
                    <div class="icon-actions">
                        <i class="fa fa-home"></i>
                        <i :class="theme ? 'fa fa-sun-o' : 'fa fa-moon-o'" @click="setTheme"></i>
                        <i class="fa fa-arrows-alt"></i>
                    </div>
                    <div class="avatar">
                        <img src="http://sly9bn5nh.hn-bkt.clouddn.com/gvb/20241026194124_QQ%E5%9B%BE%E7%89%8720240604160049.jpg" alt="Avatar" />
                    </div>
                    <div class="drop-menu">
                        <a-dropdown>
                            <a class="ant-dropdown-link" @click.prevent>
                                wiseXuMaster
                                <i class="fa fa-angle-down"></i>
                            </a>
                            <template #overlay>
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
            <div class="tabs">
                <!-- 标签页内容 -->
            </div>
            <main class="main-content">
                <!-- 主内容 -->
            </main>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const theme = ref(true); // true 为日间模式，false 为夜间模式

function setTheme() {
    theme.value = !theme.value;
    if (theme.value) {
        document.documentElement.classList.remove('dark');
    } else {
        document.documentElement.classList.add('dark');
    }
}

function menuClick({ key }) {
    if (key === 'logout') {
        console.log('logout');
        return;
    }
    router.push({ name: key });
}
</script>
