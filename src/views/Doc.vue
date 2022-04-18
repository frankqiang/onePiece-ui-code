<template>
  <div class="layout">
    <Topnav :toggleMenuButtonVisible="true" class="nav" />
    <div class="content">
      <aside v-if="asideVisible">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">开始使用</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 开关组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 按钮组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 标签页组件</router-link>
          </li>
          <li>
            <router-link to="/doc/carousel">Carousel 轮播图组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 弹出层组件</router-link>
          </li>
          <li>
            <router-link to="/doc/checkbox">Checkbox 复选框组件</router-link>
          </li>
          <li>
            <router-link to="/doc/confirm">Confirm 对话框组件</router-link>
          </li>
          <li>
            <router-link to="/doc/message">Message 消息提示组件</router-link>
          </li>
          <li>
            <router-link to="/doc/bread">Bread 面包屑导航组件</router-link>
          </li>
          <li>
            <router-link to="/doc/city">City 城市选择组件</router-link>
          </li>
          <li>
            <router-link to="/doc/pagination">Pagination 分页组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script lang='ts'>
import Topnav from '../components/Topnav.vue'
import { inject, Ref } from 'vue'
export default {
  components: { Topnav },
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible')
    return { asideVisible }
  },
}
</script>

<style lang="scss" scoped>
$aside-index: 10;
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
    background-color: #f9f9f9;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  margin-top: 15px;
  display: flex;
  > aside {
    flex-shrink: 0;
    padding: 100px 0;
  }
  > main {
    flex-grow: 1;
    padding: 20px 100px;
    background-color: #f9f9f9;
  }
  @media (max-width: 500px) {
    > main {
      padding: 16px;
      width: 100%;
      overflow: auto;
    }
  }
}
aside {
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  z-index: $aside-index;
  border-right: 1px solid rgba(0, 0, 0, 0.15);
  background-color: #f9f9f9;
  > h2 {
    margin-bottom: 4px;
    padding: 0 16px;
  }
  > ol {
    > li {
      > a {
        padding: 4px 16px;
        display: block;
        text-decoration: none;
      }
      .router-link-active {
        background-color: #e5f2fa;
      }
    }
  }
  main {
    overflow: auto;
  }
}
</style> 