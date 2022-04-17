<demo>
  常规用法
</demo>

<template>
  <h3>fullLocation:默认显示的城市; change事件可以获得选择的城市</h3>
  <City :fullLocation="fullLocation" @change="changeCity"></City>
</template>

<script>
import { ref } from 'vue'
import City from '../lib/City.vue'
export default {
  components: { City },
  setup(props) {
    const fullLocation = ref('')
    const changeCity = (city) => {
      fullLocation.value = city.fullLocation
    }
    return { fullLocation, changeCity }
  },
}
</script>
<style lang="scss" scoped>
h3 {
  font-size: 20px;
  margin-bottom: 15px;
}
</style>