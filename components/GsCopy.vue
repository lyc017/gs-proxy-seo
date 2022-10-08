<template>
  <span @mouseenter="showCopy = true" @mouseleave="showCopy = false">{{text}}
    <template v-if="showCopy || defaultShow">
      <el-tooltip effect="dark" content="复制" placement="bottom">
        <i class="el-icon-copy-document icon-copy cursor-p" v-copy="text"></i>
      </el-tooltip>
    </template>
  </span>
</template>

<script>

  export default {
    name: 'GsCopy',
    data() {
      return {
        showCopy: false
      }
    },
    props: {
      text: String, // 复制的文本
      defaultShow: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
