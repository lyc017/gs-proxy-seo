<template>
  <div>
首页<br>
{{token}}
    {{userName}}
    <button @click="changeBtn">改变</button>
    <nuxt-link to="/about/123">去关于我们</nuxt-link><br>
    <nuxt-link to="/news">去新闻</nuxt-link>
  </div>

</template>

<script>
  import {mapMutations,mapState} from 'vuex'
export default {
  name: 'IndexPage',
  data(){
    return {
      list: [],
    }
  },
  computed:{
    ...mapState(['token']),
    ...mapState({
      userName:state=>state.user.userName
    })
  },
  methods: {
    ...mapMutations({changeBtn: 'user/changeName'}),
    // changeBtn(){
    //   this.$store.commit('user/changeName','肖战')
    // }
  }
  // async asyncData(app){
  //   // let res = await app.$axios.get('')
  //   // return {list: res.data.data.list}
  // }
}
</script>
