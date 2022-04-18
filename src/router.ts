import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import CarouselDemo from './components/CarouselDemo.vue'
import CheckboxDemo from './components/CheckboxDemo.vue'
import ConfirmDemo from './components/ConfirmDemo.vue'
import MessageDemo from './components/MessageDemo.vue'
import BreadDemo from './components/BreadDemo.vue'
import CityDemo from './components/CityDemo.vue'
import PaginationDemo from './components/PaginationDemo.vue'
import Markdown from './components/Markdown.vue'
import intro from './markdown/intro.md'
import install from './markdown/install.md'
import getStarted from './markdown/get-started.md'
import { h } from 'vue'

const history = createWebHashHistory()
const md = (string) => h(Markdown, { content: string, key: string })
export const router = createRouter({
  history: history,
  routes: [
    { path: '/', component: Home },
    {
      path: '/doc', component: Doc,
      children: [
        { path: '', redirect: '/doc/intro' },
        { path: 'intro', component: md(intro) },
        { path: 'get-started', component: md(getStarted) },
        { path: 'install', component: md(install) },
        { path: 'switch', component: SwitchDemo },
        { path: 'button', component: ButtonDemo },
        { path: 'dialog', component: DialogDemo },
        { path: 'tabs', component: TabsDemo },
        { path: 'carousel', component: CarouselDemo },
        { path: 'dialog', component: DialogDemo },
        { path: 'checkbox', component: CheckboxDemo },
        { path: 'confirm', component: ConfirmDemo },
        { path: 'message', component: MessageDemo },
        { path: 'bread', component: BreadDemo },
        { path: 'city', component: CityDemo },
        { path: 'pagination', component: PaginationDemo },
      ]
    },
  ]

})