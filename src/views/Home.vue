<template>
  <div>
    <div class="topnavAndBanner">
      <topnav />
      <div class="banner">
        <h1>草帽UI</h1>
        <h2>一个厉害的UI框架</h2>
        <p class="actions">
          <a href="https://github">源码地址</a>
          <router-link to="/doc">开始使用</router-link>
        </p>
      </div>
    </div>
    <div class="features">
      <ul>
        <li>
          <svg>
            <use xlink:href="#icon-Vue" />
          </svg>
          <h3>基于 Vue 3</h3>
          <p>骄傲地使用了 Vue 3 Composition API</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-design" />
          </svg>
          <h3>可复用性高</h3>
          <p>样式设计合理，你可以轻松的覆盖样式</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-light" />
          </svg>
          <h3>代码易读</h3>
          <p>每个组件的源代码都极其简洁</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang='ts'>
import Topnav from '../components/Topnav.vue'
export default {
  components: { Topnav },
}
</script>
<style lang="scss" >
$green: #02bcb0;
$color: #007974;
$border-radius: 4px;
.topnavAndBanner {
  background: linear-gradient(
    145deg,
    rgba(227, 255, 253, 1) 0%,
    rgba(183, 233, 230, 1) 100%
  );
  clip-path: ellipse(80% 60% at 50% 40%);
  padding-bottom: 88px;
}
.features {
  margin: 64px auto;
  padding: 0 16px;

  @media (min-width: 800px) {
    width: 800px;
    > ul {
      > li {
        width: 50%;
      }
    }
  }
  @media (min-width: 1200px) {
    width: 1200px;
    > ul {
      > li {
        width: 33.3333%;
      }
    }
  }
  > ul {
    display: flex;
    flex-wrap: wrap;
    > li {
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        'icon title'
        'icon text';
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      > svg {
        grid-area: icon;
        width: 72px;
        height: 72px;
      }
      > h3 {
        grid-area: title;
        font-size: 28px;
      }
      > p {
        grid-area: text;
      }
    }
  }
}
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: $color;
  > .actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      background: $green;
      color: white;
      display: inline-block;
      border-radius: $border-radius;
      padding: 8px 24px;
      font-size: 20px;
      &:hover {
        text-decoration: none;
      }
    }
  }
}
.topnav {
  display: flex;
  padding: 16px 60px;
  box-shadow: 0 5px 5px rgb(51 51 51 / 10%);
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
}
</style>