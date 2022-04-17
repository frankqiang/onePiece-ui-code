<demo>
  常规用法
</demo>

<template>
  <Checkbox v-model="isChecked.checked" style="margin-right:50px">选中了</Checkbox>
  <Checkbox v-model="isChecked.noChecked">未选中</Checkbox>
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
    return { isChecked }
  },
}
</script>
<style lang="scss" scoped>
h3 {
  font-size: 20px;
  margin-bottom: 15px;
}
</style>