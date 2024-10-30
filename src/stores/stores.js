import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

// 使用 `localStorage` 持久化 theme 状态
export const useThemeStore = defineStore('theme', () => {
    // 定义 state 中的 theme 变量，初始值从 localStorage 中获取，默认为 true（日间模式）
    const theme = ref(localStorage.getItem('theme') === 'false' ? false : true)

    // 监听 theme 的变化并持久化
    watch(theme, (newTheme) => {
        localStorage.setItem('theme', newTheme)
    })

    // 切换主题函数
    function toggleTheme() {
        theme.value = !theme.value
        document.documentElement.classList.toggle('dark', !theme.value)
    }

    return { theme, toggleTheme }
})
