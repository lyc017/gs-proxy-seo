<template>
  <div>
    <ul class="discount-ul flex justify-between">
      <li v-for="(item, index) in data" :key="index">
        <div class="product-type">
          <div class="name">隧道动态请求</div>
          <p class="sub-txt">云端自动切换IP，弹性请求数，支持短期高并发。</p>
        </div>
        <div class="product-param">
          <div class="param-item">
            <span class="label">存活周期</span>
            <div class="value" data-tip="每次请求换IP">
              <span>每次请求换IP</span>
            </div>
          </div>
          <div class="param-item">
            <span class="label">请求数</span>
            <div class="value" data-tip="50">
              <span>50</span>
            </div>
          </div>
          <div class="param-item">
            <span class="label">时间</span>
            <div class="value" data-tip="1天">
              <span>1天</span>
            </div>
          </div>
        </div>
        <div class="tag-sm">
          <span class="solid">0.37折</span>
          <span>首单享优惠</span>
          <span>限1个</span>
        </div>
        <div class="price-cell">
          <div class="price">
            <span class="money">9.00</span>
            <span class="unit">元</span>
          </div>
          <div class="prime-price">
            <span>原价245.00元</span>
          </div>
        </div>
        <div class="order-btn">
          <a @click="goBuy">立即购买</a>
        </div>
        <div class="tag">
          <span class="general_badge-item" style="background-color:#FF8F02;">企业钜惠</span>
        </div>
      </li>
    </ul>
<!--    <login :show.sync="login.showSt" :resource="login.resource"></login>-->
  </div>
</template>

<script>
// import Login from '@/components/front/Login'
export default {
  name: 'BottomMenu',
  data () {
    return {
      token: this.$store.getters.token(),
      login: {
        showSt: false,
        resource: ''
      }
    }
  },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    mode: {
      type: String,
      default: 'enterprise' // enterprise企业  personal个人
    }
  },
  components: {
    // Login
  },
  methods: {
    // 登录
    openLogin() {
      this.login = {
        showSt: true,
        resource: 'login'
      }
    },
    goBuy() {
      // if (!this.token || this.token === '') {
      //   this.openLogin()
      //   return false
      // }
      //
      // let user = this.$store.state.loginState.user
      // console.log(user)
      // let {personAuth, companyAuth} = user
      // console.log(personAuth, companyAuth)
      // if (!(personAuth === this.$const.AUTH_STATUS.AUTH_SUCCESS || companyAuth === this.$const.AUTH_STATUS.AUTH_SUCCESS)) {
      //   this.gsCertification()
      //   return false
      // }
      // this.alert('可以购买')
      // let params = Object.assign(this.form, {showLoading: 1})
      // this.$http.form('/payorder/generate', params).then(({status, data}) => {
      //   if (status === 200) {
      //     this.success('订单提交成功', () => {
      //       let url = '/finance/order/manage'
      //       if (!data.experience) {
      //         url = '/finance/order/detail/' + data.id
      //       }
      //       this.$router.push(url)
      //     })
      //   }
      // })
    }
  }

}
</script>

<style scoped lang="less">
.discount-ul{
  li{
    flex: 1;
    background: linear-gradient(0deg, #ffffff 0%, #d5d6ff 84%);
    padding: 18px;
    position: relative;
    padding-bottom: 42px;
    box-sizing: border-box;
    border: 1px solid transparent;
    margin:20px 25px;
    &:hover{
      border-color: #ffd2b1;
    }
    .product-type{
      position: relative;
      z-index: 2;
      .name{
        font-size: 18px;
        font-weight: bold;
        padding-bottom: 6px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .sub-txt{
        height: 38px;
        color: #5A4F88;
        font-size: 14px;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        display: -moz-box;
        -moz-line-clamp: 2;
        -moz-box-orient: vertical;
        overflow: hidden;
      }
    }
    .product-param{
      padding-top: 22px;
      padding-bottom: 15px;
      .param-item{
        font-size: 14px;
        display: flex;
        padding: 5px 0;
        .label{
          display: block;
          width: 68px;
          color: #5A4F88;
        }
        .value{
          width: 188px;
        }
      }
    }
    .tag-sm{
      padding: 10px 0 0px 0;
      span{
        display: inline-block;
        border: 1px solid #FF7C51;
        height: 18px;
        padding: 0 4px;
        font-size: 12px;
        font-weight: 400;
        text-align: left;
        color: #FF7C51;
        &.solid{
          background: #FF7C51;
          color: #fff;
        }
      }
    }
    .price-cell{
      padding-bottom: 12px;
      .price{
        color: #FD2829;
        .money{
          font-size: 26px;
          font-weight: bold;
        }
      }
      .prime-price{
        span{
          font-size: 14px;
          color: #B3A3F4;
          text-decoration: line-through;
        }
      }
    }
    .order-btn{
      height:42px;
      line-height:42px;
      position: absolute;
      left: -1px;
      bottom: -1px;
      z-index: 1;
      width:calc(100% + 2px);
      text-align:center;
      background: linear-gradient(-85deg, #fd2729 0%, #ff7e52 100%);
      &:hover{
        opacity: 0.8;
      }
      a{
        display: block;
        color:#ffffff;
      }
    }
    .tag{
      width: 61px;
      height: 60px;
      background: url("~@/static/img/active/tag.png") no-repeat;
      background-size: contain;
      position: absolute;
      top: -9px;
      right: -7px;
      z-index: 10;
      span{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 75px;
        height: 44px;
        font-size: 12px;
        color: #fff;
        transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        background-color: transparent !important;
        line-height: normal;
        padding: 0;
        border-radius: 0;
        margin-left: 0;
      }
    }
  }
}
</style>
