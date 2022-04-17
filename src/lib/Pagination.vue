<template>
  <div class="pagination">
    <!-- 上 -->
    <button :disabled="pageNo===1" @click="getPageNo(pageNo-1)">上一页</button>
    <button v-if="startNumAndEndNum.start>1" @click="getPageNo(1)" :class="{active:pageNo===1}">1</button>
    <button v-if="startNumAndEndNum.start>2">···</button>
    <!-- 中 -->
    <button
      v-for="(page,index) in startNumAndEndNum.end"
      :key="index"
      v-show="page>=startNumAndEndNum.start && page <=totalPage "
      @click="getPageNo(page)"
      :class="{active:pageNo===page}"
    >{{page}}</button>
    <!-- 下 -->
    <button v-if="startNumAndEndNum.end<totalPage-1" :class="{active:pageNo===totalPage}">···</button>
    <button v-if="startNumAndEndNum.end<totalPage" @click="getPageNo(totalPage)">{{totalPage}}</button>
    <button :disabled="pageNo===totalPage" @click="getPageNo(pageNo+1)">下一页</button>

    <button style="margin-left: 30px">共 {{total}} 条</button>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'Pagination',
  props: ['pageNo', 'total', 'continues'],
  setup(props, { emit }) {
    // 分页器总共多少页
    const totalPage = computed(() => {
      // 向上取整，总的数据除以连续的页数可能出现小数，我们只能多不能少，所以向上取整
      return Math.ceil(props.total / props.continues)
    })
    // 计算出连续的页码的起始数字与结束数字【连续页码的数字一般为5或者7或者9这样的奇数】
    const startNumAndEndNum = computed(() => {
      // 将组件实例结构
      const { pageNo, continues, totalPage } = props
      // 定义开始页数
      let start = 0
      // 定义结束页数
      let end = 0
      // 连续页码数字为5，就是至少有五页，如果出现不正常情况就是数据不够五页
      // 不正常现象：总页数没有连续页码多
      if (continues > totalPage) {
        start = 1
        end = totalPage
      } else {
        // 正常情况：连续五页，但是总页数一定是大于5的
        // 起始页码
        start = pageNo - parseInt(continues / 2)
        // 结束页码
        end = pageNo + parseInt(continues / 2)
        // 不正常现象：当 当前页数小于2的时候，起始页就会出现0和负数的问题
        if (start < 1) {
          start = 1
          end = continues
        }
        // 不正常现象：当结束页大于总页数时
        if (end > totalPage) {
          end = totalPage
          start = totalPage - continues + 1
        }
      }
      return { start, end }
    })

    const getPageNo = (pageNo) => {
      emit('getPageNo', pageNo)
    }
    return { totalPage, startNumAndEndNum, getPageNo }
  },
}
</script>

<style lang="scss" scoped>
.pagination {
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 40px;
    min-width: 35.5px;
    height: 50px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>
