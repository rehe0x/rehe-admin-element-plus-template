import { createApp,reactive } from 'vue'
import { createPinia } from 'pinia'

import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import App from './App.vue'
import router from './router'

import 'element-plus/dist/index.css'
import './styles/index.scss'

const globalConfig = reactive({
    locale: zhCn,
}); 

const app = createApp(App)
app.use(ElementPlus, globalConfig)
app.provide('globalConfig', globalConfig);

app.use(createPinia())
app.use(router)

app.mount('#app')
