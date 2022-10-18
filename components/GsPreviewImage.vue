<template>
  <el-image-viewer
    v-if="show"
    :on-close="closeViewer"
    :url-list="urlList" />
</template>

<script>
import ElImageViewer from 'element-ui/packages/image/src/image-viewer'
export default {
  name: 'GsPreviewImage',
  data () {
    return {}
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    urlList: {
      type: Array,
      default: () => []
    }
  },
  components: {ElImageViewer},
  methods: {
    closeViewer () {
      this.$emit('update:show', false)
    }
  }
}
</script>

<style scoped>

</style>
