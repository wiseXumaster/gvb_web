import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue'

// 样式文件引入
import "./assets/css/iconfont.css"
import "font-awesome/css/font-awesome.min.css"
import "ant-design-vue/dist/antd.min.css"
import "./assets/css/admin-theme.css"

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

// 注册路由和 Ant Design 组件
app.use(router)
app.use(Antd)

// 挂载应用
app.mount('#app')
