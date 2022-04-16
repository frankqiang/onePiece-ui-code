<template>
  <div class="gulu-carousel" @mouseenter="stop" @mouseleave="start">
    <!-- 轮播图图片容器 -->
    <ul class="carousel-body">
      <!-- 显示的图片加上fade -->
      <li class="carousel-item" v-for="(item,i) in sliders" :key="i" :class="{fade:index===i}">
        <!-- 图片轮播 -->
        <RouterLink v-if="item.imgUrl" to="/">
          <img :src="item.imgUrl" />
        </RouterLink>
      </li>
    </ul>
    <!-- 上一张 -->
    <a @click="toggle(-1)" href="javascript:;" class="carousel-btn prev">
      <i class="iconfont icon-angle-left"></i>
    </a>
    <!-- 下一张 -->
    <a @click="toggle(1)" href="javascript:;" class="carousel-btn next">
      <i class="iconfont icon-angle-right"></i>
    </a>
    <!-- 小圆圈 -->
    <div class="carousel-indicator">
      <!-- active：激活小圆圈儿的类 -->
      <span @click="index=i" v-for="(item,i) in sliders" :key="i" :class="{active:index===i}"></span>
    </div>
  </div>
</template>

<script>
import { ref, watch, onUnmounted } from 'vue'
export default {
  props: {
    // 轮播图数据
    sliders: {
      type: Array,
      default: () => [],
    },
    // 是否自动轮播
    autoPlay: {
      type: Boolean,
      default: false,
    },
    // 间隔时长
    duration: {
      type: Number,
      default: 3000,
    },
  },
  setup(props) {
    // 控制显示图片的索引
    const index = ref(0)
    console.log(props.duration)
    console.log(props.autoPlay)
    // 轮播图自动轮播逻辑
    let timer = null
    const autoPlayFn = () => {
      // 自动播放，每隔多久切换索引
      // 在开启一个定时器前，必须先关掉之前的定时器，不然定时器会累加
      clearInterval(timer)
      timer = setInterval(() => {
        index.value++
        if (index.value >= props.sliders.length) {
          index.value = 0
        }
      }, props.duration)
    }

    // 监听sliders数据变化，判断如果有数据且autoPlay是true
    watch(
      () => props.sliders,
      (newValue) => {
        if (newValue.length && props.autoPlay) {
          autoPlayFn()
        }
      },
      { immediate: true }
    )

    // 鼠标进入暂停，离开开启轮播
    const stop = () => {
      if (timer) {
        clearInterval(timer)
      }
    }
    const start = () => {
      if (props.sliders.length && props.autoPlay) {
        autoPlayFn()
      }
    }

    // 点击左右箭头切换图片
    const toggle = (step) => {
      // 将要改变的索引值
      const newIndex = index.value + step
      // console.log(newIndex)
      console.log(props.sliders.length)
      // 如果将要改变的索引值大于原轮播图数组的索引，就将其置为0
      if (newIndex > props.sliders.length - 1) {
        index.value = 0
        return
      }
      // 如果将要改变的索引值小于0，就将其置为原轮播图数组最大索引
      // 说白了就是切换到第5张时在按箭头切换到0张
      if (newIndex < 0) {
        index.value = props.sliders.length - 1
        return
      }
      // 正常情况
      index.value = newIndex
      // console.log(index.value)
    }

    // 组件销毁时，清除定时器
    onUnmounted(() => {
      clearInterval(timer)
    })

    return { index, stop, start, toggle }
  },
}
</script>
<style lang="scss">
.gulu-carousel {
  width: 100%;
  height: 100%;
  min-width: 300px;
  min-height: 150px;
  position: relative;
  .carousel {
    &-body {
      width: 100%;
      height: 100%;
    }
    &-item {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      transition: opacity 0.5s linear;
      &.fade {
        opacity: 1;
        z-index: 1;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    &-indicator {
      position: absolute;
      left: 0;
      bottom: 20px;
      z-index: 2;
      width: 100%;
      text-align: center;
      span {
        display: inline-block;
        width: 12px;
        height: 12px;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 50%;
        cursor: pointer;
        ~ span {
          margin-left: 12px;
        }
        &.active {
          background: #fff;
        }
      }
    }
    &-btn {
      width: 44px;
      height: 44px;
      background: rgba(0, 0, 0, 0.2);
      color: #fff;
      border-radius: 50%;
      position: absolute;
      top: 228px;
      z-index: 2;
      text-align: center;
      line-height: 44px;
      opacity: 0;
      transition: all 0.5s;
      &.prev {
        left: 20px;
      }
      &.next {
        right: 20px;
      }
    }
  }
  &:hover {
    .carousel-btn {
      opacity: 1;
    }
  }
}
</style>
