<demo>
  常规用法
</demo>

<template>
  <h3>BreadItem组件接收一个to属性，表示要跳转的路由地址</h3>
  <Bread>
    <BreadItem to="/doc/switch">Switch组件</BreadItem>
    <BreadItem to="/doc/button">Button组件</BreadItem>
    <BreadItem to="/doc/tabs">Tabs组件</BreadItem>
    <BreadItem to="/doc/carousel">Carousel组件</BreadItem>
  </Bread>
  <Bread>
    <BreadItem to="/doc/dialog">Dialog组件</BreadItem>
    <BreadItem to="/doc/checkbox">Checkbox组件</BreadItem>
    <BreadItem to="/doc/confirm">Confirm组件</BreadItem>
    <BreadItem to="/doc/message">Message组件</BreadItem>
  </Bread>
</template>

<script>
import BreadItem from '../lib/BreadItem.vue'
import Bread from '../lib/Bread.vue'
export default {
  components: { BreadItem, Bread },
}
</script>
<style lang="scss" scoped>
h3 {
  font-size: 20px;
  margin-bottom: 15px;
}
</style>