import './lib/gulu.scss'
import './index.scss'
import '../src/lib/svg'
import 'github-markdown-css'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import Markdown from './components/Markdown.vue'
import Confirm from './lib/Confirm.js'
import Message from './lib/Message.js'


const app = createApp(App)
app.use(router)
app.mount('#app')
app.component('Markdown', Markdown)
app.config.globalProperties.$confirm = Confirm
app.config.globalProperties.$message = Message
