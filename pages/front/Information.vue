<template>
  <div class="xms-flex-wrap min-box-height information-wrap">
    <div class="main-contain">
      <div class="left-wrap">
        <div class="content-list" v-if="list.length > 0">
          <div @click="$router.push('/information/detail/' + item.id)" class="content-info cursor-p" v-for="(item, index) in list" :key="index">
            <div class="title">{{item.title}}</div>
            <div class="content">{{item.content}}</div>
            <div class="time"><i class="el-icon-date mg-r8"></i>{{item.ctime}}</div>
          </div>
        </div>
        <gs-no-data :height="590" v-else></gs-no-data>
        <div class="xms-flex-headerOrBottom mg-t15">
          <div class="flex flex-end">
            <gs-pagination :pageIndex.sync="config.pageNum" :pageSize.sync="config.pageSize"
                           :total="config.total" @sizeChange="sizeChange" @pageChange="pageChange"></gs-pagination>
          </div>
        </div>
      </div>
      <div class="right-wrap">
        <el-input clearable v-model="keyword" :size="$const.FORM_ATTRIBUTES.small" class="mg-t15 input-with-select" placeholder="请输入关键词进行搜索">
          <el-button @click="hanlderSearch(keyword)" slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <div class="title">热门搜索</div>
        <div class="search-wrap">
          <span @click="hanlderSearch(item)" v-for="(item, index) in hotSearchs" :key="index">{{item}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Information',
  head() {
    return this.$const.seo.INFORMATION_MI_LIST
  },
  data () {
    return {
      list: [],
      keyword: '',
      config: {
        total: 0,
        pageNum: 1,
        pageSize: 10
      },
      hotSearchs: ['动态代理', '隧道代理']
    }
  },
  mounted () {
    this.getInformationList()
  },
  methods: {
    getInformationList () {
      let {pageNum, pageSize} = this.config
      const params = {
        pageNum,
        pageSize,
        showLoading: 1
      }
      this.$http.get('/main/information/list', params).then(({status, data}) => {
        if (status === 200) {
          this.config.total = data.total
          this.list = data.list
        }
      })
    },
    hanlderSearch (keyword) {
      this.keyword = keyword
      const params = {
        keyword: this.keyword,
        showLoading: 1
      }
      this.$http.get('/main/information/search', params).then(({status, data}) => {
        if (status === 200) {
          this.config.total = data.length
          this.list = data
        }
      })
    },
    sizeChange () {
      this.config.pageNum = 1
      this.getInformationList()
    },
    pageChange () {
      this.getInformationList()
    }
  }
}
</script>

<style scoped lang="less">
  .information-wrap{
    background: white;

    .main-contain{
      display: flex;
      flex-grow: 1;
      padding: 15px 0 15px 15px;

      .left-wrap{
        width: calc(1200px - 300px - 30px - 15px);
        box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
        padding: 15px 15px;

        .content-list{
          height: 590px;
          overflow: auto;
          .content-info{
            padding: 15px 0;
            border-bottom: 1px dashed #BBBCBD;

            .title{
              color: #333333;
              font-size: 18px;
            }

            .content{
              color: #666666;
              font-size: 14px;
              overflow:hidden;
              text-overflow: ellipsis;
              display:-webkit-box; //将对象作为弹性伸缩盒子模型显示。
              -webkit-box-orient:vertical; //从上到下垂直排列子元素（设置伸缩盒子的子元素排列方式）
              -webkit-line-clamp: 2; //显示两行
              margin:15px 0;
            }

            .time{
              color: #999;
            }
          }
        }
      }
      .right-wrap{
        padding: 15px 15px;
        box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
        margin-left: 15px;
        flex-shrink: 0;
        .input-with-select{
          width: 250px;
        }

        .title{
          margin-top: 15px;
          font-weight: bold;
          font-size: 20px;
          color: #333333;
        }

        .search-wrap{
          margin-top: 15px;

          span{
            cursor: pointer;
            text-align: center;
            border: solid 1px #6F7F7E;
            width: 80px;
            line-height: 30px;
            display: inline-block;
            margin-right: 15px;
            margin-bottom: 15px;
          }
        }
      }
    }
  }
</style>
