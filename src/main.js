import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import './assets/less/index.less'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import store from "./store/index.js"
import ECharts from 'vue-echarts'
import 'echarts'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(store)
app.use(router)
app.use(ElementPlus)
app.component('ECharts', ECharts)
app.mount('#app')