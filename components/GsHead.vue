<template>
  <div class="flex justify-between align-middle gs-header-wrap">
    <div class="gs-header-title" v-html="msg || '修改密码'"></div>
    <template v-if="showRight">
      <slot name="right">
        <el-button type="text" icon="el-icon-back" :size="$const.FORM_ATTRIBUTES.mini" @click="$router.go(-1)">返回
        </el-button>
      </slot>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'GsHead',
    data() {
      return {}
    },
    props: {
      msg: String,
      showRight: {
        type: Boolean,
        default: true
      }
    }
  }
</script>

<style lang="less" scoped>
  .gs-header-wrap {
    position: relative;

    .gs-header-title {
      font-size: 14px;
      padding-left: 15px;
      border-left: 3px solid @mainBlue;
    }

    /deep/ .el-button--mini {
      padding: 0px;
    }

    .gs-header-right {
      position: absolute;
      top: -5px;
      right: 0px;
    }
  }

</style>
