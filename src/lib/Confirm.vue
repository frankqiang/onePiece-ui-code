<template>
  <div class="gulu-confirm" :class="{fade}">
    <div class="wrapper" :class="{fade}">
      <div class="header">
        <h3>{{title}}</h3>
        <a @click="cancel" href="JavaScript:;" class="iconfont icon-close-new"></a>
      </div>
      <div class="body">
        <i class="iconfont icon-warning"></i>
        <span>{{text}}</span>
      </div>
      <div class="footer">
        <Button @click="cancel" level="normal" size="normal">取消</Button>
        <Button @click="submit" level="main" size="normal">确认</Button>
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted, ref } from 'vue'
import Button from '../lib/Button.vue'
export default {
  components: { Button },
  props: {
    title: {
      type: String,
      default: '温馨提示',
    },
    text: {
      type: String,
      default: '',
    },
    cancelCallback: {
      type: Function,
    },
    confirmCallback: {
      type: Function,
    },
  },
  setup(props) {
    // 对话框默认关闭
    const fade = ref(false)
    onMounted(() => {
      // TODO:
      // 过渡效果需要在元素创建完毕后，延时一会儿加上才会触发过渡效果
      setTimeout(() => {
        fade.value = true
      }, 0)
    })

    // 取消
    const cancel = () => {
      props.cancelCallback()
    }

    // 确认
    const submit = () => {
      props.confirmCallback()
    }
    return { fade, cancel, submit }
  },
}
</script>
<style scoped lang="scss">
.gulu-confirm {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 8888;
  background: rgba(0, 0, 0, 0);
  &.fade {
    transition: all 0.4s;
    background: rgba(0, 0, 0, 0.5);
  }
  .wrapper {
    width: 400px;
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
    .header,
    .footer {
      height: 50px;
      line-height: 50px;
      padding: 0 20px;
    }
    .body {
      padding: 20px 40px;
      font-size: 16px;
      .icon-warning {
        color: #27ba9b;
        margin-right: 3px;
        font-size: 16px;
      }
    }
    .footer {
      text-align: center;
      .gulu-button {
        margin-left: 20px;
      }
    }
    .header {
      position: relative;
      h3 {
        font-weight: normal;
        font-size: 18px;
      }
      a {
        position: absolute;
        right: 15px;
        top: 15px;
        font-size: 20px;
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
      .header,
      .footer {
        height: 50px;
        line-height: 50px;
        padding: 0 20px;
      }
      .body {
        padding: 20px 40px;
        font-size: 16px;
        .icon-warning {
          color: #27ba9b;
          margin-right: 3px;
          font-size: 16px;
        }
      }
      .footer {
        text-align: center;
        .gulu-button {
          margin-left: 20px;
        }
      }
      .header {
        position: relative;
        h3 {
          font-weight: normal;
          font-size: 18px;
        }
        a {
          position: absolute;
          right: 15px;
          top: 15px;
          font-size: 20px;
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
