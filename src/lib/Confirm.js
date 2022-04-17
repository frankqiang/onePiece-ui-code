
import { createVNode, render } from 'vue'
import Confirm from './Confirm.vue'

// 准备一个DOM容器装在要渲染的组件
const div = document.createElement('div')
div.setAttribute('class', 'gulu-confirm-container')
document.body.appendChild(div)

export default ({ title, text }) => {
  // 1、导入被创建的组件
  // 2、使用createVNode创建虚拟节点
  // 3、准备一个DOM容器装在组件
  // 4、使用render函数渲染组件到容器

  return new Promise((resolve, reject) => {
    // 点击组件的取消按钮触发的方法
    const cancelCallback = () => {
      render(null, div)
      reject(new Error('点击取消'))
    }
    // 点击组件的确认按钮触发的方法
    const confirmCallback = () => {
      render(null, div)
      resolve()
    }
    const vn = createVNode(Confirm, { title, text, cancelCallback, confirmCallback })

    render(vn, div)
  })
}
