
<script>
import { h } from 'vue'
export default {
  // h() 函数参数，1.节点名称  2. 属性|数据 是对象  3. 子节点
  render() {
    // 用法
    // 1. template 标签去除，单文件组件
    // 2. 返回值就是组件内容
    // 3. vue2.0 的h函数传参进来的，vue3.0 的h函数导入进来
    // 4. h 第一个参数 标签名字  第二个参数 标签属性对象  第三个参数 子节点
    // 需求
    // 1. 创建gulu-bread父容器
    // 2. 获取默认插槽内容
    // 3. 去除gulu-bread-item组件的i标签，因该由render函数来组织
    // 4. 遍历插槽中的item，得到一个动态创建的节点，最后一个item不加i标签
    // 5. 把动态创建的节点渲染再gulu-bread标签中
    const items = this.$slots.default()
    const dymanicItems = []
    items.forEach((item, i) => {
      dymanicItems.push(item)
      if (i < items.length - 1) {
        dymanicItems.push(h('i', { class: 'iconfont icon-angle-right' }))
      }
    })
    return h('div', { class: 'gulu-bread' }, dymanicItems)
  },
}
</script>

<style lang='scss'>
// 去除scpoed属性，目的是让样式作用到gulu-bread-item组件上
.gulu-bread {
  display: flex;
  padding: 25px 10px;
  &-item {
    a {
      font-size: 30px;
      color: #666;
      transition: all 0.4s;
      &:hover {
        color: #11e0b3;
      }
    }
    span {
      font-size: 40px;
    }
  }
  i {
    font-size: 30px;
    margin-left: 5px;
    margin-right: 5px;
    line-height: 48px;
  }
}
</style>
