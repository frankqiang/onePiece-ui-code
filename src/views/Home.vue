<template>
  <div>
    <div class="topnavAndBanner">
      <topnav />
      <div class="banner">
        <h1>咕噜UI</h1>
        <h2>一个厉害的UI框架</h2>
        <p class="actions">
          <a href="https://github">GitHub</a>
          <router-link to="/doc">开始</router-link>
        </p>
      </div>
    </div>
    <div class="features">
      <svg class="icon">
        <use xlink:href="#icon-Vue" />
      </svg>
      <svg class="icon">
        <use xlink:href="#icon-ts" />
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-light" />
      </svg>
    </div>
  </div>
</template>
<script lang='ts'>
import Topnav from '../components/Topnav.vue'
export default {
  components: { Topnav },
}
</script>
<style lang="scss" scoped>
$green: #02bcb0;
$color: #007974;
$border-radius: 4px;
.topnavAndBanner {
  background: linear-gradient(
    145deg,
    rgba(227, 255, 253, 1) 0%,
    rgba(183, 233, 230, 1) 100%
  );
}
.features {
  > svg {
    width: 88px;
    height: 88px;
  }
}
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: $color;
  font-size: 30px;
  > .actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      background: $green;
      color: white;
      display: inline-block;
      border-radius: $border-radius;
      padding: 8px 24px;
      font-size: 26px;
      &:hover {
        text-decoration: none;
      }
    }
  }
}
.topnav {
  display: flex;
  padding: 16px;
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