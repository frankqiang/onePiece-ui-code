<demo>
  常规用法
</demo>

<template>
  <div class="home-banner">
    <Carousel :sliders="sliders" />
  </div>
</template>

<script>
import { reactive } from 'vue'
import Carousel from '../lib/Carousel.vue'
import imgUrl1 from '../assets/1.jpg'
import imgUrl2 from '../assets/2.jpg'
import imgUrl3 from '../assets/3.jpg'
import imgUrl4 from '../assets/4.jpg'
import imgUrl5 from '../assets/5.jpg'
export default {
  components: { Carousel },
  setup(props) {
    const sliders = reactive([
      { imgUrl: imgUrl1 },
      { imgUrl: imgUrl2 },
      { imgUrl: imgUrl3 },
      { imgUrl: imgUrl4 },
      { imgUrl: imgUrl5 },
    ])
    return { sliders }
  },
}
</script>
<style scoped lang="scss">
.home-banner {
  width: 750px;
  height: 500px;
}
</style>