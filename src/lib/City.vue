<template>
  <div class="gulu-city" ref="target">
    <div class="select" @click="toggle" :class="{active:visible}">
      <span v-if="!fullLocation" class="placeholder">{{placeholder}}</span>
      <span v-else class="value">{{fullLocation}}</span>
      <i class="iconfont icon-angle-down"></i>
    </div>
    <div class="option" v-if="visible">
      <span
        @click="changeItem(item)"
        class="ellipsis"
        v-for="item in currentList"
        :key="item.code"
      >{{item.name}}</span>
    </div>
  </div>
</template>
<script>
import { computed, reactive, ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import axios from 'axios'
export default {
  name: 'guluCity',
  props: {
    fullLocation: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '请选择您所在的城市',
    },
  },
  setup(props, { emit }) {
    // 控制城市的弹层是否显示
    const visible = ref(false)

    // 存储所有城市的数据
    const allCityData = ref([])

    // 提供打开和关闭城市弹层的方法
    const open = () => {
      visible.value = true
      // 城市弹层打开获取城市数据
      getCityData().then((data) => {
        allCityData.value = data
      })

      // 每当打开地区选择弹层，就清空上一次选的地区
      for (const key in changeResult) {
        changeResult[key] = ''
      }
    }
    const close = () => {
      visible.value = false
    }
    // 提供打开和关闭的方法
    const toggle = () => {
      visible.value ? close() : open()
    }
    // TODO:实现点击组件外部的元素进行关闭城市弹层
    const target = ref(null)
    onClickOutside(target, () => {
      // 参数1：监听的元素
      // 参数2：点击该元素外部的其他元素后，触发该回调
      close()
    })

    // 实现计算属性：获取当前显示的地区数据：比如当点了北京就显示北京下的区县
    const currentList = computed(() => {
      // 默认显示省一级的数据
      let list = allCityData.value
      // 当changeResult中的provinceCode有值了，说明点的是省级，那么应该显示市级地区
      if (changeResult.provinceCode && changeResult.provinceName) {
        list = list.find((p) => p.code === changeResult.provinceCode).areaList
      }
      // 当点击市级地区
      if (changeResult.cityCode && changeResult.cityName) {
        list = list.find((c) => c.code === changeResult.cityCode).areaList
      }
      return list
    })

    // 定义选择的  省市区 数据
    const changeResult = reactive({
      provinceCode: '',
      provinceName: '',
      cityCode: '',
      cityName: '',
      countryCode: '',
      countryName: '',
      fullLocation: '',
    })

    // 当点击选择地区的按钮后记录当前点的地区是哪一级
    const changeItem = (item) => {
      if (item.level === 0) {
        // 省级
        changeResult.provinceCode = item.code
        changeResult.provinceName = item.name
      }
      if (item.level === 1) {
        // 市级
        changeResult.cityCode = item.code
        changeResult.cityName = item.name
      }
      if (item.level === 2) {
        // 区级
        changeResult.countryCode = item.code
        changeResult.countryName = item.name
        // 当点击到区级，就说明地区选择完了，，，
        // 合并数据
        changeResult.fullLocation = `${changeResult.provinceName}${changeResult.cityName}${changeResult.countryName}`
        // 关闭地区弹层
        close()
        // 通知父组件，传递数据
        emit('change', changeResult)
      }
    }
    return {
      visible,
      open,
      close,
      toggle,
      target,
      currentList,
      changeItem,
    }
  },
}
// 获取省市区的数据函数
const getCityData = () => {
  // 数据地址：https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/area.json
  // 1、当本地没有缓存，发请求获取数据
  // 2、当本地有缓存，取出本地数据
  // 返回promise在then中获取数据，因为这里可能是异步操作也可能是同步操作
  return new Promise((resolve, reject) => {
    // 约定好：数据存储在window上的cityData字段中
    if (window.cityData) {
      resolve(window.cityData)
    } else {
      const url =
        'https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/area.json'
      axios.get(url).then((res) => {
        // TODO: 缓存数据,window上有数据之后，就不会走else了，优化了请求次数
        window.cityData = res.data
        resolve(res.data)
      })
    }
  })
}
</script>

<style scoped lang="scss">
.gulu-city {
  display: inline-block;
  position: relative;
  z-index: 400;
  .select {
    border: 1px solid #e4e4e4;
    min-height: 60px;
    text-align: center;
    width: 350px;
    padding: 0 20px;
    line-height: 60px;
    cursor: pointer;
    &.active {
      background: #fff;
    }
    .placeholder {
      color: #999;
      font-size: 30px;
    }
    .value {
      color: #666;
      font-size: 30px;
    }
    i {
      font-size: 28px;
      margin-left: 5px;
    }
  }
  .option {
    width: 600px;
    border: 1px solid #e4e4e4;
    position: absolute;
    left: 0;
    top: 60px;
    background: #fff;
    min-height: 30px;
    line-height: 30px;
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    > span {
      width: 166px;
      cursor: pointer;
      text-align: center;
      border-radius: 4px;
      padding: 0 3px;
      &:hover {
        background: #f5f5f5;
      }
    }
  }
}
@media (max-width: 500px) {
  .gulu-city {
    display: inline-block;
    position: relative;
    z-index: 9;
    .select {
      border: 1px solid #e4e4e4;
      text-align: center;
      width: 300px;
      padding: 0 20px;
      min-height: 60px;
      line-height: 60px;
      cursor: pointer;
      &.active {
        background: #fff;
      }
      .placeholder {
        color: #999;
        font-size: 25px;
      }
      .value {
        color: #666;
        font-size: 25px;
      }
      i {
        font-size: 23px;
        margin-left: 5px;
      }
    }
    .option {
      width: 300px;
      border: 1px solid #e4e4e4;
      position: absolute;
      left: 0;
      top: 60px;
      background: #fff;
      min-height: 30px;
      line-height: 30px;
      display: flex;
      flex-wrap: wrap;
      padding: 10px;
      > span {
        width: 166px;
        cursor: pointer;
        text-align: center;
        border-radius: 4px;
        padding: 0 3px;
        &:hover {
          background: #f5f5f5;
        }
      }
    }
  }
}
</style>
