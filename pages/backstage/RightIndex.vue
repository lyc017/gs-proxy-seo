<template>
  <div class="right-main">
    <el-row :gutter="20" v-if="user">
      <el-col :span="6">
        <el-card class="box-card">
          <div class="info" @click="$router.push('/member/account')">
            <div class="left"><span class="iconfont icon-proxy-huiyuan icon-size-color"></span></div>
            <div class="right">
              <div class="text">{{user && user.loginName}}</div>
              <div class="desc">{{user.vipName}}</div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <div class="info" @click="$router.push('/agent/manage')">
            <div class="left"><span class="iconfont icon-proxy-lianjie icon-size-color"></span></div>
            <div class="right">
              <div class="text">{{user.concurrentNum || 0}} 个</div>
              <div class="desc">每秒并发数</div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <div class="info" @click="$router.push('/finance/recharge')">
            <div class="left"><span class="iconfont icon-proxy-shangpin icon-size-color"></span></div>
            <div class="right">
              <div class="text">￥{{user.balance || 0}}</div>
              <div class="desc">账户余额</div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <div class="info" @click="$router.push('/finance/order/manage')">
            <div class="left"><span class="iconfont icon-proxy-dingdan icon-size-color"></span></div>
            <div class="right">
              <div class="text">￥{{user.paySum || 0}}</div>
              <div class="desc">累计消费</div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'RightIndex',
    data() {
      return {
        user: null
      }
    },
    mounted() {
      this.$store.dispatch('getUser', true).then((data) => {
        this.user = data
      })
    },
    methods: {}
  }
</script>

<style scoped lang="less">
  @import '~@/assets/css/base';

  .info {
    font-size: 16px;
    display: flex;
    align-items: center;
    cursor: pointer;
    .icon-size-color {
      color: @mainBlue;
      font-size: 42px;
      margin: 0 20px;
    }

    .right {
      .text {
        font-size: 28px;
      }

      .desc {
        font-size: 14px;
      }
    }
  }
</style>
