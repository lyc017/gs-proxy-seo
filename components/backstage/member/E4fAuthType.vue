<template>
  <el-dialog :title="dialog.formTitle"
             :visible="dialogFormVisible"
             :width="dialog.formWidth"
             custom-class="erp-dialog-wrap dialog-com-reset"
             @close="closeDialog"
             :close-on-click-modal="dialog.closeModal">
    <div>
      <div class="cert-list" @click="scanAuth(1)">
        <div class="cert-list-img">
          <el-image :src="require('@/static/img/account/type-ali.png')">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
        </div>
        <ul class="cert-list-info">
          <li><h3>支付宝认证<span class="orange-color">（强烈推荐）</span></h3></li>
          <li class="mg-t4">请使用法人支付宝，扫码进行实名认证</li>
        </ul>
      </div>
      <div class="cert-list" @click="scanAuth(2)">
        <div class="cert-list-img">
          <el-image :src="require('@/static/img/account/type-wechat.png')" :width="60" :height="60">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
        </div>
        <ul class="cert-list-info">
          <li><h3>微信认证</h3></li>
          <li class="mg-t4">请使用法人微信与身份证原件(身份证照片)，扫码进行实名认证</li>
        </ul>
      </div>
    </div>
  </el-dialog>
</template>

<script>
  export default {
    name: 'E4fAuthType',
    data() {
      return {
        price: '',
        dialog: { // 弹框配置信息
          formTitle: '请选择认证方式',
          formWidth: '600px',
          dialogFormVisible: false,
          closeModal: false
        }
      }
    },
    props: {
      dialogFormVisible: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      scanAuth(authType) {
        this.$emit('success', authType)
        this.closeDialog()
      },
      closeDialog() {
        this.$emit('update:dialogFormVisible', false)
      }
    }
  }
</script>

<style lang="less" scoped>
  .cert-list {
    padding: 15px;
    display: flex;
    align-items: center;
    background-color: #fff;
    cursor: pointer;

    .cert-list-img {
      display: block;
      width: 60px;
      height: 60px;
      margin-right: 30px;
      flex-grow: 0;
      flex-shrink: 1;
    }

    .cert-list-info {
      font-size: 13px;
      line-height: 1.8;
      flex-grow: 1;
      flex-shrink: 0;
    }
  }
</style>
