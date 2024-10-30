<template>
    <div class="admin-aside">
        <div class="admin-aside-header">
            <div class="admin-aside-logo">
                <img src="https://sly9bn5nh.hn-bkt.clouddn.com/gvb/20241026194124_QQ%E5%9B%BE%E7%89%8720240604160049.jpg">
            </div>
            <div class="admin-aside-title">
                WiseXplore
            </div>
        </div>
        <div class="admin-aside-body">
            <!-- 侧边栏内容 -->
            <ul>
                <li><a href="#">首页</a></li>
                <li><a href="#">项目</a></li>
                <li><a href="#">文章</a></li>
                <li><a href="#">关于</a></li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.admin-aside-header {
    padding: 20px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--border-color);
}

.admin-aside-logo img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 15px;
}

.admin-aside-title {
    font-size: 1.2em;
    font-weight: bold;
    color: var(--text-color);
}

.admin-aside-body ul {
    padding: 0;
}

.admin-aside-body li {
    margin: 15px 0;
}

.admin-aside-body a {
    color: var(--text-color);
    text-decoration: none;
    transition: color 0.3s ease;
}

.admin-aside-body a:hover {
    color: var(--primary-color);
}
</style>
