<template>
  <div class="consult-wrap">
    <div class="flex">
      <div v-if="showConsult || show" class="flex" @mouseleave="mouseleave">
        <div v-if="showRight" class="show-hide-left" @click="show = false">
          &gt;&gt;联系客服
        </div>
        <ul>
          <li >
            <a class="consult-image-list" target="_blank"
               :href="$const.COMPANY_INFO.qHref">
              <el-image :src="require('@/static/img/logo/icon-qq.png')">
                <div slot="error" class="image-slot">
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-image>
              <div class="qqcode-content-font">在线咨询</div>
            </a>
          </li>
          <li>
            <el-popover
              placement="left"
              width="200"
              :offset="35"
              popper-class="consult-padding"
              trigger="hover">
              <el-image :src="require('@/static/img/logo/icon-wxcode.png')">
                <div slot="error" class="image-slot">
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-image>
              <div align="center">请使用微信扫码</div>
              <div class="consult-image-list" slot="reference">
                <el-image :src="require('@/static/img/logo/icon-weixin.png')">
                  <div slot="error" class="image-slot">
                    <i class="el-icon-picture-outline"></i>
                  </div>
                </el-image>
                <div>客服微信</div>
              </div>
            </el-popover>
          </li>
          <li >
            <el-popover
                placement="left"
                width="200"
                :offset="0"
                popper-class="consult-padding"
                trigger="hover">
              <div align="center" class="pad-t15" style="line-height: 1.7">{{$const.COMPANY_INFO.phone}}<br>周一至周日 9:00-22:00</div>
              <div class="consult-image-list" slot="reference">
                <el-image :src="require('@/static/img/logo/icon-phone.png')">
                  <div slot="error" class="image-slot">
                    <i class="el-icon-picture-outline"></i>
                  </div>
                </el-image>
                <div>客服热线</div>
              </div>
            </el-popover>
          </li>
        </ul>
      </div>
      <div v-if="showRight && !show" class="show-hide-right" @click="show = true">
        &lt;&lt;联系客服
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Consult',
    data() {
      return {
        show: false
      }
    },
    props: {
      showRight: {
        type: Boolean,
        default: false
      },
      showConsult: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      mouseleave() {
        if (this.showRight) {
          setTimeout(() => {
            this.show = false
          }, 2000)
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .consult-wrap {
    position: fixed;
    right: 0;
    bottom: 15%;
    z-index: 99999;
    ul {
      background: #ffffff;
      border: solid 1px #EBEBF6;
      border-radius: 1.5px;

      li {
        display: flex;
        justify-content: center;
        text-align: center;
        align-items: center;
        &:not(:last-child) {
          border-bottom: solid 1px #EBEBF6;
        }
        .consult-image-list {
          padding: 12px;
        }
      }
    }

    .show-hide-right {
      width: 24px;
      padding: 4px 0;
      text-align: center;
      color: #fff;
      background-color: @mainBlue;
      border-radius: 5px 0 0 5px;
      cursor: pointer;
    }

    .show-hide-left {
      position: absolute;
      bottom: 0px;
      left: -20px;
      width: 20px;
      text-align: center;
      font-size: 11px;
      color: #fff;
      background-color: @mainBlue;
      border-radius: 5px 0 0 5px;
      cursor: pointer;
    }
  }
</style>
