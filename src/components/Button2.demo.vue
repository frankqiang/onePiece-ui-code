<demo>
支持 size
</demo>
<template>
  <h3>size支持：big，small，normal</h3>
  <div>
    <div>
      <Button size="big">大大大</Button>
      <Button>普普通</Button>
      <Button size="small">小小小</Button>
    </div>
    <div>
      <Button theme="link" size="big">大大大</Button>
      <Button theme="link">普普通</Button>
      <Button size="small" theme="link">小小小</Button>
    </div>
    <div>
      <Button size="big" theme="text">大大大</Button>
      <Button theme="text">普普通</Button>
      <Button size="small" theme="text">小小小</Button>
    </div>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
export default {
  components: {
    Button,
  },
}
</script>
<style lang="scss" scoped>
div {
  margin-bottom: 15px;
}
h3 {
  font-size: 20px;
  margin-bottom: 15px;
}
</style>