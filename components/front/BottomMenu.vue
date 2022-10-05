<template>
    <div class="front-bottom-menu">
          <ul class="flex justify-center">
            <li>邮箱：{{$const.COMPANY_INFO.email}}</li>
            <li>{{$const.COMPANY_INFO.name}}</li>
            <a href="https://beian.miit.gov.cn" target="_blank">{{$const.COMPANY_INFO.record}}</a>
          </ul>
    </div>
</template>

<script>
  export default {
    name: 'BottomMenu',
    data () {
      return {

      }
    },
    components: {
    },
    methods: {

    }
  }
</script>

<style scoped lang="less">
.front-bottom-menu{
  ul{
    line-height: 52px;
    color:#666666;
    li,a{
      padding:0 15px;
      position: relative;
      &:not(:last-child):after{
        position: absolute;
        content: '';
        width:1px;
        height:14px;
        background:#666666;
        top:19px;
        right:0;
      }
    }
  }
}
</style>
