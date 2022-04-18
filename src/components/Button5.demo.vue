<demo>
支持显示加载中
</demo>
<template>
  <h3>loading支持：true，false</h3>
  <div>
    <Button loading>loading...</Button>
    <Button :loading="loading" @click="stopLoading">点我关闭loading</Button>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue-demi'
import Button from '../lib/Button.vue'
export default {
  components: {
    Button,
  },
  setup() {
    const loading = ref(true)
    const stopLoading = () => {
      loading.value = false
    }
    return { loading, stopLoading }
  },
}
</script>
<style lang="scss" scoped>
h3 {
  font-size: 20px;
  margin-bottom: 15px;
}
</style>