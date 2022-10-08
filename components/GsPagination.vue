<template>
  <div class="pagination-mode flex justify-center mg-top-20 align-middle">
    <span v-show="showTotal" class="text">共{{total}}条</span>
    <el-pagination
      background
      :layout="layout"
      :pager-count="5"
      :page-size="pageSize"
      :page-sizes="pageSizes"
      @size-change="handleSizeChange"
      :total="total"
      @current-change="currentChange"
      :current-page="pageIndex"
    >
    </el-pagination>
  </div>
</template>

<script>
  export default {
    name: 'GsPagination',
    data() {
      return {}
    },
    props: {
      layout: {
        type: String,
        default: 'slot,prev, pager, next,sizes,jumper'
      },
      pageIndex: { // 当前页码
        type: Number,
        default: 1
      },
      total: { // 总条数
        type: Number,
        default: 1
      },
      pageSizes: {
        type: Array,
        default: () => [10, 20, 30, 40, 50]
      },
      pageSize: { // 一页几条
        type: Number,
        default: 10
      },
      showTotal: { // 显示总条数
        type: Boolean,
        default: true
      }
    },
    methods: {
      handleSizeChange(pageSize) {
        this.$emit('update:pageSize', pageSize) // 值回传
        this.$emit('sizeChange')
      },
      currentChange(pageIndex) {
        this.$emit('update:pageIndex', pageIndex) // 值回传
        this.$emit('pageChange')
      }
    }
  }
</script>

<style scoped lang="less">
  .pagination-mode {
    span {
      margin-left: 15px;

      &.text {
        color: @fontGrey;
      }
    }

    /deep/ .el-pagination {
      button, span:not([class*=suffix]) {
        line-height: 32px;
        height: 32px;
      }

      &.is-background .el-pager li {
        &:not(.disabled).active {
          background: #fff;
          color: @mainBlue;
          font-weight: bold;
        }

        &.number {
          background: transparent;
          font-weight: normal;
        }
      }

      .el-pagination__jump {
        margin-left: 4px;
      }
    }
  }

</style>
