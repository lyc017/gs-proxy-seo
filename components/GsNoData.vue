<template>
  <div class="no-data flex align-middle justify-center" :style="{'height':height + 'px'}" v-loading="loading">
    <div>
      <div><img :src="img" :width="width + 'px'"></div>
      <slot name="bottom">
        <p>{{msg}}</p>
      </slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NoData',
    data() {
      return {
        img: require('@/static/img/icon_zanwu@2x.png')
      }
    },
    props: {
      width: {
        type: Number,
        default: 125
      }, // 非必传 图片宽度
      height: {
        type: Number,
        default: 500
      }, // 非必传 容器高度
      msg: {
        type: String,
        default: '暂无数据'
      },
      loading: { // 是否显示loading效果
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped lang="less">
  .no-data {
    line-height: 40px;
    color: @fontGrey;
    text-align: center;
    width: 100%;

    img {
      display: inline-block;
    }
  }
</style>
