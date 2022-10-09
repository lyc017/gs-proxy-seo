<template>
  <section class="front-index">
    <div class="recommend-page xms-flex-wrap" ref="pageRef">
      <div  class="xms-flex-middle" v-show="activeIndex !== -1">
        <client-only>
          <swiper
            :options="swiperOption"
            :active-index="1"
            ref="mySwiper"
          >
            <swiper-slide>
              <div class="mode-1 main-contain flex align-middle" ref="slide0">
                <div class="fi-center">
                  <div class="ml-title animate__animated " :class="{'animate__fadeInDown':activeIndex === 0}" ref="m1TitleRef">隧道代理</div>
                  <div class="ml-des animate__animated " :class="{'animate__fadeInLeft':activeIndex === 0}">
                    <p>高品质HTTP/SOCKS隧道代理，云端自动变换IP</p>
                    <p>联系客服升级会员可享超值优惠，包年更享折上折</p>
                  </div>
                  <el-button class="ml-btn animate__animated" type="primary" @click="$router.push('/front/agent/buy')" :class="{'animate__fadeInUp':activeIndex === 0}">免费试用</el-button>
                  <div class="m1-pc animate__animated"   :class="{'animate__zoomIn':activeIndex === 0}"></div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="mode-demand main-contain flex align-middle" ref="slide1">
                <div class="fi-center">
                  <h3>满足您的多种业务需求</h3>
                  <ul class="flex flex-wrap justify-between ">
                    <li v-for="(item, index) in demand" :key="index" >
                      <div><img :src="require('@/static/img/swiper/demand_' + index + '.png')" alt="" height="48" class="animate__animated"  :class="{'animate__swing':activeIndex === 1}"></div>
                      <p>{{item}}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="mode-advantage main-contain flex align-middle" ref="slide2">
                <div class="fi-center">
                  <h3>我们的优势</h3>
                  <ul>
                    <li class="animate__animated" :class="{'ma-l':index < 3,'ma-r':index >= 3,['mr-mode-'+index]:index >= 0,'animate__lightSpeedInLeft':index < 3 && activeIndex === 2,'animate__lightSpeedInRight':index >= 3 && activeIndex === 2}" v-for="(item,index) in advantage" :key="index">
                      <div class="ma-top">
                        <div class="ma-title">{{item.title}}</div>
                        <i class="ma-icon"></i>
                      </div>
                      <p class="ma-des">{{item.des}}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="mode-server main-contain flex align-middle" ref="slide3">
                <div class="fi-center">
                  <h3>高效稳定的服务</h3>
                  <ul class="flex flex-wrap justify-between" ref="serverRef" >
                    <li v-for="(item, index) in server" :key="index"  >
                      <div class="animate__animated " :class="{'animate__rotateIn animate__fadeIn':activeIndex === 3}">{{item.value}}</div>
                      <p>{{item.name}}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </client-only>
      </div>

    </div>
  </section>
</template>

<script>
  import eventBus from '@/static/js/eventBus.js'
  import {mapMutations,mapState} from 'vuex'
  export default {
    name: 'FrontIndex',
    data () {
      return {
        swiperOption: {
          observer: true, // 修改swiper自己或子元素时，自动初始化swiper
          observeParents: true, // 修改swiper的父元素时，自动初始化swiper
          mousewheel: true,
          initialSlide: 0,
          direction: 'vertical',
          speed: 600, // 速度
          // 显示分页
          pagination: {
            el: '.swiper-pagination',
            clickable: true // 允许分页点击跳转
          }
        },
        server: [],
        scale: 1,
        swiper: null,
        activeIndex: -1 // 索引
      }
    },
    computed: {
      ...mapState({
        demand:state =>state.f_demand,
        advantage:state=>state.f_advantage
      })
    },
    mounted () {
      let _this = this
      for (let i = 0; i < 4; i++) {
        if (i !== 0) {
          this.setSlideScale(i)
        }
      }
      this.setSlideScale(0)
      this.accessStat()
      window.addEventListener('resize', () => {
        // this.setSlideScale(_this.activeIndex)
      })
      this.$nextTick(()=>{
        this.swiper = this.$refs.mySwiper.$swiper
        this.swiper.on('slideChange', function() {
          // 切换
          eventBus.$emit('updateBottom', this.activeIndex)
          _this.setSlideScale(this.activeIndex)
        })
      })
    },
    methods: {
      // 稳定服务
      accessStat () {
        this.$http.get('/main/access/stat', {}).then(({status, data}) => {
          if (status === 200) {
            this.server = data
          }
        })
      },
      setSlideScale (i) {
        let _this = this
        this.$nextTick(()=>{
          let scale = this.scale
          if (i === 2) {
            scale = this.$refs.pageRef.clientHeight / 730
            if (scale < 1) scale += 0.022
            if (scale > 1) scale = 1
          }
          if (this.$refs && this.$refs[`slide${i}`]) {
            this.$refs[`slide${i}`].style = `transform:scale(${scale}) translate(-50%, -50%);transform-origin:left top`
          }
          setTimeout(() => {
            _this.activeIndex = i
          }, 100)
        })

      }
    }
  }
</script>

<style scoped lang="less">
  @import '~@/static/css/front/index';
</style>
