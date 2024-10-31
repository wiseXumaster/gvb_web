import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue'

// 样式文件引入
import "./assets/css/iconfont.css"
import "font-awesome/css/font-awesome.min.css"
import "ant-design-vue/dist/antd.min.css"
import axios from 'axios';
// 引入主题 store 用于主题持久化
import { useThemeStore } from './stores/stores'

// 创建 Vue 实例
const app = createApp(App)

// 使用 Pinia 状态管理
const pinia = createPinia()
app.use(pinia)

// 获取主题 store 并根据状态应用主题
const themeStore = useThemeStore()
document.documentElement.classList.toggle('dark', !themeStore.theme)
// 设置 Axios 的基础 URL
// 设置 Axios 的基础 URL
axios.defaults.baseURL = 'https://www.hbbxht.top/api'; // 替换为您的实际域名
app.config.globalProperties.$axios = axios;

// 注册路由和 Ant Design 组件
app.use(router)
app.use(Antd)

// 挂载应用
app.mount('#app')
