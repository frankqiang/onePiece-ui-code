<template>
  <div class="gulu-dialog" v-show="visible" :class="{fade}">
    <div class="wrapper" :class="{fade}">
      <div class="header">
        <h3>{{title}}</h3>
        <a @click="closeDialog" href="JavaScript:;" class="iconfont icon-close-new"></a>
      </div>
      <div class="body">
        <slot />
      </div>
      <div class="footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>
<script>
import { ref, watch } from 'vue'
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    visible: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    console.log(props.visible)
    const fade = ref(false)
    // visible的值为true打开对话框，否则就是关闭对话框，其实就是在控制fade的值
    watch(
      () => props.visible,
      (newValue) => {
        // TODO:结构和样式同时加上无过度效果，需要些延时。
        setTimeout(() => {
          fade.value = newValue
        }, 0)
      },
      { immediate: true }
    )

    // 自己关闭对话框，但是需要修改父组件提供的数据visible
    const closeDialog = () => {
      emit('update:visible', false)
    }
    return { fade, closeDialog }
  },
}
</script>
<style scoped lang="scss">
.gulu-dialog {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 8887;
  background: rgba(0, 0, 0, 0);
  &.fade {
    transition: all 0.4s;
    background: rgba(0, 0, 0, 0.5);
  }
  .wrapper {
    width: 600px;
    background: #fff;
    border-radius: 4px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
    opacity: 0;
    &.fade {
      transition: all 0.4s;
      transform: translate(-50%, -50%);
      opacity: 1;
    }
    .body {
      padding: 20px 40px;
      font-size: 16px;
      .icon-warning {
        color: #cf4444;
        margin-right: 3px;
        font-size: 16px;
      }
    }
    .footer {
      text-align: center;
      padding: 10px 0 30px 0;
    }
    .header {
      position: relative;
      height: 70px;
      line-height: 70px;
      padding: 0 20px;
      border-bottom: 1px solid #f5f5f5;
      h3 {
        font-weight: normal;
        font-size: 18px;
      }
      a {
        position: absolute;
        right: 25px;
        top: 25px;
        font-size: 24px;
        width: 20px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        color: #999;
        &:hover {
          color: #666;
        }
      }
    }
  }
  @media (max-width: 500px) {
    .wrapper {
      width: 300px;
      background: #fff;
      border-radius: 4px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -60%);
      opacity: 0;
      &.fade {
        transition: all 0.4s;
        transform: translate(-50%, -50%);
        opacity: 1;
      }
      .body {
        padding: 20px 40px;
        font-size: 16px;
        .icon-warning {
          color: #cf4444;
          margin-right: 3px;
          font-size: 16px;
        }
      }
      .footer {
        text-align: center;
        padding: 10px 0 30px 0;
      }
      .header {
        position: relative;
        height: 70px;
        line-height: 70px;
        padding: 0 20px;
        border-bottom: 1px solid #f5f5f5;
        h3 {
          font-weight: normal;
          font-size: 18px;
        }
        a {
          position: absolute;
          right: 25px;
          top: 25px;
          font-size: 24px;
          width: 20px;
          height: 20px;
          line-height: 20px;
          text-align: center;
          color: #999;
          &:hover {
            color: #666;
          }
        }
      }
    }
  }
}
</style>
