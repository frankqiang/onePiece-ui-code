// 提供一个能够显示xtx-message组件的函数
// 这个函数将来：可以导入直接使用，也可以挂载在vue实例的原型上
// import Message from 'message.js'  使用方法：Message({type:'error',text:'提示文字'})
// 还可以这样使用：this.$message({type:'error',text:'提示文字'})

import { createVNode, render } from 'vue'
import Message from './Message.vue'
// 装在消息提示组件的dom容器
const div = document.createElement('div')
div.setAttribute('class', 'gulu-message-container')
document.body.appendChild(div)
// 定时器标识
let timer = null
export default ({ type, text }) => {
  // 步骤
  // 1、导入消息提示组件
  // 2、将消息提示组件编译为虚拟节点（dom节点） 使用vue的createVNode方法，第二个参数就相当于传递的是props参数
  const vnode = createVNode(Message, { type, text })
  // 3、准备一个装在消息提示组件的DOM容器
  // 4、将虚拟节点渲染到容器中
  // render函数可以把虚拟节点渲染到指定的容器中,render(虚拟节点，DOM容器)
  render(vnode, div)
  // 5、3s后销毁消息提示组件
  clearInterval(timer)
  timer = setTimeout(() => {
    render(null, div)
  }, 3000)
}
