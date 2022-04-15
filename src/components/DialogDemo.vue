<template>
  <div>Dialog示例</div>
  <h1>示例1</h1>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="x" :ok="confirm" :cancel="cancel">
    <template v-slot:content>
      <div>hi</div>
      <div>hi2</div>
    </template>
    <template v-slot:title>
      <strong>加粗的标题</strong>
    </template>
  </Dialog>
</template>

<script>
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import { ref } from 'vue'
export default {
  components: { Dialog, Button },
  setup(props) {
    const x = ref(false)
    const toggle = () => {
      x.value = !x.value
    }
    const confirm = () => {
      return false
    }
    const cancel = () => {}
    return { x, toggle, confirm, cancel }
  },
}
</script>