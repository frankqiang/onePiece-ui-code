import './lib/gulu.scss'
import './index.scss'
import '../src/lib/svg'
import { createApp } from 'vue'
import App from './App.vue'

import { router } from './router'


const app = createApp(App)
app.use(router)
app.mount('#app')
