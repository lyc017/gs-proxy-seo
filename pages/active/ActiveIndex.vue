<template>
  <section class="active-index">
    <div class="banner flex align-middle justify-center">
<!--      <div class="ai-banner-box">-->
<!--        <img :src="require('@/static/img/active/new_user.png')" height="170" alt="新人特惠">-->
<!--      </div>-->
      <div class="des">代理ip新人特惠，首单享超低价</div>
    </div>
    <div class="ai-content">
      <div class="main-contain">
<!--        倒计时-->
        <div class="ac-count-down flex align-middle justify-center"><div class="ac-count">距离活动结束还有：14 天 23 时 30 分 20 秒</div></div>
<!--        个人专享-->
        <div class="ac-enterprise">
          <h2 class="ac-com-title">企业专享</h2>
          <discount :data="enterprise" ></discount>
        </div>
        <div class="ac-personal">
          <h2 class="ac-com-title">个人专享</h2>
          <discount :data="personal" mode="personal"></discount>
        </div>
        <div class="ac-active">
          <h2 class="ac-com-title">活动规则</h2>
          <div class="ac-rules">
            <div>一、活动对象</div>
            <p>旋风云已完成企业实名认证的注册会员用户。</p>
            <p>个人专享指的是完成个人实名认证的注册用户，企业专享是指完成企业实名认证的注册用户。</p>
            <div>二、活动时间</div>
            <p>2022年10月15日00点-2022年11月15日23点（产品数量有限，售完即止，以届时活动页面展示为准）。</p>
            <div>三、活动规则</div>
            <p>1、参与基本规则：</p>
            <p>活动期间，用户可以通过活动页面享受活动优惠，具体优惠信息以活动页面为准。</p>
            <p>2、新用户规则：</p>
            <p>（1）新用户定义：注册用户在此前未付费购买过代理IP类产品，且未付费使用过该产品，购买活动展示产品时可享受本次活动优惠，同一用户仅限参与1次。</p>
            <p>（2）完成个人认证的用户，已付费购买过代理类产品，且付费使用过该产品，再转为企业认证的用户，不视为企业新用户。</p>
            <p>（3）新用户首购折扣不与其他活动或优惠叠加适用，折扣限首次新购订单，活动产品的续费、升级订单不享有本次活动首购价格，以实际产品价格为准。</p>
            <p>（4）页面上的“限购x个”指的是用户可以页面展示产品的优惠价购买x个，当超过x个就不能购买活动展示产品。</p>
            <p>3、用户参加本活动购买的产品，不支持退订。</p>
            <p>4、如用户在活动中存在隐瞒、虚构、作弊、欺诈或通过其他非正常手段规避活动规则、获取不当利益的行为，例如：作弊领取、恶意套现、网络攻击、虚假交易等，旋风云有权收回相关权益、取消用户的活动参与资格，撤销违规交易，必要时追究违规用户的法律责任。</p>
            <p>5、活动名称仅为方便用户理解参考使用，不具有效力，实际活动内容以具体活动规则为准。</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  // import 'swiper/dist/css/swiper.css'
  import discount from '@/components/active/discount'
  export default {
    name: 'AcitveIndex',
    data () {
      return {
        enterprise: [{}, {}],
        personal: [{}, {}]
      }
    },
    components: {
      discount
    },
    mounted () {

    },
    methods: {
    }
  }
</script>

<style scoped lang="less">
  @import '~@/static/css/active/index';
</style>
