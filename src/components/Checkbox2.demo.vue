<demo>
  支持change事件
</demo>

<template>
  <h3>通过change事件，可以获得点击的复选框的值</h3>
  <div style="margin-bottom:10px">
    <Checkbox @change="changeCheck" v-model="isChecked.checked">选中了</Checkbox>
    <span style="margin-left:30px;font-size:20px">
      当前复选框的状态是：
      <strong>{{isChecked.checked}}</strong>
    </span>
  </div>
  <div>
    <Checkbox @change="changeCheck" v-model="isChecked.noChecked">未选中</Checkbox>
    <span style="margin-left:30px;font-size:20px">
      当前复选框的状态是：
      <strong>{{isChecked.noChecked}}</strong>
    </span>
  </div>
</template>

<script>
import Checkbox from '../lib/Checkbox.vue'
import { reactive } from 'vue'
export default {
  components: { Checkbox },
  setup(props) {
    const isChecked = reactive({
      checked: true,
      noChecked: false,
    })
    const changeCheck = (newVal) => {}
    return { isChecked, changeCheck }
  },
}
</script>
<style lang="scss" scoped>
h3 {
  font-size: 20px;
  margin-bottom: 15px;
}
</style>