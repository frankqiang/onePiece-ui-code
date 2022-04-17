<demo>
  常规用法
</demo>

<template>
  <h3>pageNo:当前页码，total:数据总条数，continues：连续的页码数，getPageNo：获得当前点击的页码</h3>
  <Pagination :pageNo="pageNo" :total="total" :continues="continues" @getPageNo="getPageNo" />
</template>

<script>
import { ref } from 'vue'
import Pagination from '../lib/Pagination.vue'
export default {
  components: { Pagination },
  setup(props) {
    const pageNo = ref(1)
    const total = ref(100)
    const continues = ref(5)
    const getPageNo = (currentPage) => {
      pageNo.value = currentPage
    }
    return { pageNo, total, continues, getPageNo }
  },
}
</script>
<style lang="scss" scoped>
h3 {
  font-size: 20px;
  margin-bottom: 25px;
}
</style>