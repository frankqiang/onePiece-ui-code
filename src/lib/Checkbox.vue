<template>
  <div class="gulu-checkbox" @click="changeChecked">
    <i v-if="checked" class="iconfont icon-checked"></i>
    <i v-else class="iconfont icon-unchecked"></i>
    <span v-if="$slots.default">
      <slot />
    </span>
  </div>
</template>

<script>
import { useVModel } from '@vueuse/core'
export default {
  name: 'XtxCheckbox',
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    console.log(props.modelValue)
    //TODO: 使用useVModel实现双向数据绑定v-model指令
    // 1. 使用props接收modelValue
    // 2. 使用useVModel来包装props中的modelValue属性数据
    // 3. 在使用checked.value就是使用父组件数据
    // 4. 在使用checked.value = '数据' 赋值，触发emit('update:modelvalue', '数据')
    const checked = useVModel(props, 'modelValue', emit)
    const changeChecked = () => {
      const newVal = !checked.value
      // 使用emit通知父组件数据的改变
      checked.value = newVal
      // 让组件支持change事件
      emit('change', newVal)
    }

    return { checked, changeChecked }
  },
}
</script>

<style lang="scss">
.gulu-checkbox {
  display: inline-block;
  margin-right: 2px;
  .iconfont {
    font-size: 30px;
  }
  .icon-checked {
    color: #27ba9b;
    ~ span {
      color: #27ba9b;
    }
  }
  i {
    position: relative;
    top: 1px;
  }
  span {
    margin-left: 2px;
    font-size: 30px;
  }
}
</style>
