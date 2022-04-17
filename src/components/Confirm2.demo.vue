<demo>
  使用$confirm()
</demo>

<template>
  <h3>$confirm()方法接收一个对象参数，返回一个promise</h3>
  <h3>title:对话框标题，text:对话框内容</h3>
  <Button level="main" size="big" @click="openConfirm">点我打开对话框</Button>
</template>

<script>
import Button from '../lib/Button.vue'
export default {
  components: { Button },
  methods: {
    openConfirm() {
      this.$confirm({
        title: '人的梦想，永远不会结束！',
        text: '我不会去统治这片大海，在这片大海上，最自由的人就是海贼王！',
      })
    },
  },
}
</script>
<style lang="scss" scoped>
h3 {
  font-size: 20px;
  margin-bottom: 15px;
}
</style>