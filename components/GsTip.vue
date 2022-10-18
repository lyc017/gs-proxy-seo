<template>
  <div class="gs-tip">
    <div class="gs-tip-header">
      <span class="gs-error">
        <i class="el-icon-warning-outline mg-r8 font-size-16"></i>{{msg || '温馨提示'}}</span>
    </div>
    <div class="gs-tip-info">
      <slot name="info"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GsTip',
    data() {
      return {}
    },
    props: {
      msg: String
    }
  }
</script>

<style lang="less" scoped>
  .gs-tip {
    font-size: 14px;
    padding: 8px 15px;
    background-color: #ecf5ff;

    .gs-tip-header {
      display: flex;
      align-items: center;
    }

    /deep/ .gs-tip-info {
      padding-left: 20px;
      font-size: 12px;

      li {
        color: #6F7F7E;
        margin-top: 7px;
        a{
          color:@mainBlue;
        }
      }
    }
  }
</style>
