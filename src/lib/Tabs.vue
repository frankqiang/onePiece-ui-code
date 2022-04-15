<template>
  <div>
    <div v-for="(t,i) in titles" :key="i">{{t}}</div>
    <component v-for="(c,i) in defaults" :is="c" :key="i"></component>
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue'
export default {
  setup(props, context) {
    const defaults = context.slots.default()
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs 子标签必须是Tab')
      }
    })
    const titles = defaults.map((tag) => {
      return tag.props.title
    })
    return { defaults, titles }
  },
}
</script>