import {createApp} from 'vue'
import {createPinia} from 'pinia'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue'
import "../src/assets/css/iconfont.css";
import "font-awesome/css/font-awesome.min.css";
import "../src/assets/css/theme.css";
import "ant-design-vue/dist/antd.css"
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Antd)

app.mount('#app')
