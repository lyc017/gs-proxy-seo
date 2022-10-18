<template>
  <div class="gs-image-wrap">
    <el-image :src="src" :fit="fit" :lazy="lazy" :preview-src-list="srcList" :z-index="99999" :style="styleObject">
      <div slot="error" class="image-slot">
        <div><i class="el-icon-picture-outline"></i><template v-if="showText"><br/>加载失败</template></div>
      </div>
      <div slot="placeholder" class="image-slot" >
        <div><i class="el-icon-loading"></i><br/>加载中</div>
      </div>
    </el-image>

    <!--加载中效果-->
    <div class="image-loading" v-if="loading">
      <el-progress type="circle" :percentage="parseInt(percentage)" :width="circleWidth"></el-progress>
    </div>

    <!-- 删除-->
    <div v-else>
      <template v-if="close">
        <div class="image-operate" v-if="mode === 'opacity'">
          <div class="image-operate-item" @click="dialogVisible = true">
            <i class="el-icon-zoom-in"></i>
          </div>
          <div class="image-operate-item">
            <i class="el-icon-delete"  @click="deletePic"></i>
          </div>
        </div>
        <i class="el-icon-error icon-position" type="primary" @click="deletePic" v-else></i>
      </template>
    </div>

    <!--查看大图-->
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="src">
    </el-dialog>
  </div>
</template>

<script>
import {DEFAULT_SIZE} from '@/static/js/const/upload'
export default {
  name: 'GsImage',
  data () {
    return {
      dialogVisible: false
    }
  },
  props: {
    index: { // 删除图片时，回调函数中会返回
      type: Number,
      requested: true,
      default: 0
    },
    src: { // 图片地址
      type: String,
      requested: true
    },
    fit: { // 图片填充方式
      type: String,
      default: 'cover'
    },
    width: { // 宽度，默认100
      type: Number,
      default: DEFAULT_SIZE.width
    },
    height: { // 高度，默认100
      type: Number,
      default: DEFAULT_SIZE.height
    },
    radius: { // 圆角，默认3
      type: Number,
      default: DEFAULT_SIZE.radius
    },
    lazy: { // 图片懒加载
      type: Boolean,
      default: true
    },
    mode: { // 模式，主要是删除显示效果区分，暂时可以不传 opacity
      type: String,
      default: ''
    },
    close: { // 是否显示删除图标
      type: Boolean,
      default: true
    },
    srcList: { // 大图列表数据
      type: Array,
      default () {
        return []
      }
    },
    loading: { // 只有上传中才需要，暂时只有在上传视频时用到
      type: Boolean,
      default: false
    },
    percentage: { // 只有上传中的百分比，暂时只有在上传视频时用到
      type: Number,
      default: 0
    },
    showText: {
      type: Boolean,
      default: true
    } // 是否显示文字内容
  },
  computed: {
    styleObject () { // 自定义样式
      return {
        'border-radius': `${this.radius}px`,
        width: `${this.width}px`,
        height: `${this.height}px`,
        display: 'block'
      }
    },
    circleWidth () {
      let circleWidth = this.width
      if (circleWidth > this.height) {
        circleWidth = this.height
      }
      return circleWidth
    }
  },
  methods: {
    // 删除图片
    deletePic () {
      this.$emit('delete', this.index, this.src)
    }
  }
}
</script>

<style lang="less" scoped>
.gs-image-wrap{
  position: relative;
  /*display: inline-block;*/
  .image-operate{
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: default;
    text-align: center;
    color: #fff;
    opacity: 0;
    font-size: 20px;
    background-color: rgba(0,0,0,.5);
    transition: opacity .3s;
    .image-operate-item{
      flex:1;
      text-align: center;
      i {
        cursor: pointer;
      }
    }
  }

  .icon-position{
    position: absolute;
    font-size:16px;
    right:-4px;
    top:-4px;
    opacity: 0.8;
    cursor: pointer;
  }

  .image-loading{
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.gs-image-wrap{
  background:#f5f7fa;
  .image-slot{
    color:#909399;
  }
}
.gs-image-wrap:hover{
  .image-operate{
    opacity: 1;
  }
}

.image-slot{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
  i {
    font-size:24px;
  }
}
</style>
