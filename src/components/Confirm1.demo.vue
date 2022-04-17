<demo>
  使用函数导入的方式使用该组件
</demo>

<template>
  <h3>Confirm()函数接收一个对象参数，返回一个promise</h3>
  <h3>title:对话框标题，text:对话框内容</h3>
  <Button level="main" size="big" @click="openConfirm">点我打开对话框</Button>
</template>

<script>
import Confirm from '../lib/Confirm.js'
import Button from '../lib/Button.vue'
export default {
  components: { Button },
  setup(props) {
    const openConfirm = () => {
      Confirm({
        title: '胜利的就是正义',
        text: '奇迹只会降临在不言放弃的人身上',
      })
    }
    return { openConfirm }
  },
}
</script>
<style lang="scss" scoped>
h3 {
  font-size: 20px;
  margin-bottom: 15px;
}
</style>