<template>
  <div>
    <Switch v-model:y="y" />
  </div>
</template>

<script>
import { ref } from 'vue'
import Switch from '../lib/Switch.vue'
export default {
  components: { Switch },
  setup() {
    const y = ref(false)
    return { y }
  },
}
</script>

<style>
</style>