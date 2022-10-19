<template>
  <div class="xms-flex-wrap order-manage">
    <div class="xms-flex-headerOrBottom gs-top-padding gs-border-radius-shadow">
      <gs-head msg="行业资讯">
        <template v-slot:right>
          <div class="gs-header-right">
            <ul class="flex ma-search">
              <li>
                <el-input v-model="keyword" size="small" placeholder="请输入关键字"></el-input>
              </li>
              <li>
                <el-select v-model="recommend" placeholder="请选择" size="small">
                  <el-option label="不限" value=""></el-option>
                  <el-option label="已推荐" :value="1"></el-option>
                  <el-option label="未推荐" :value="0"></el-option>
                </el-select>
              </li>
              <li>
                <el-button type="primary" :size="$const.FORM_ATTRIBUTES.size" @click="reset">查询</el-button>
              </li>
              <li>
                <el-button type="primary" :size="$const.FORM_ATTRIBUTES.size" @click="openDetail">新增</el-button>
              </li>
            </ul>
          </div>
        </template>
      </gs-head>
    </div>
    <div class="xms-flex-middle gs-content-padding">
      <div class="gs-border-radius-shadow gs-background-white pad-15">
        <el-table
          ref="multipleTable"
          :data="tableData"
          row-key="id"
          class="order-table"
          :stripe="$const.TABLE_ATTRIBUTES.stripe"
          :border="$const.TABLE_ATTRIBUTES.border"
          :size="$const.TABLE_ATTRIBUTES.size"
        >
          <el-table-column
            prop="id"
            align="center"
            label="编号"
            width="60">
          </el-table-column>
          <el-table-column
            prop="title"
            label="标题">
            <template slot-scope="scope">
              <a class="col-blue cursor-p" :href="`/information/detail/${scope.row.id}`" target="_blank">{{scope.row.title}}</a>
            </template>
          </el-table-column>
          <el-table-column
            prop="ctime"
            align="center"
            width="180"
            label="创建时间">
          </el-table-column>
          <el-table-column
            align="center"
            width="180"
            label="修改时间">
            <template slot-scope="scope">
              {{completeName(scope.row.utime)}}
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            width="180"
            label="推荐时间">
            <template slot-scope="scope">
              {{completeName(scope.row.rtime)}}
            </template>
          </el-table-column>
          <el-table-column label="操作" width="160">
            <template slot-scope="scope">
              <el-button type="text" size="mini" @click="openDetail(scope.row)">编辑</el-button>
              <el-button type="text" size="mini" @click="cancel(scope.row.id)">删除</el-button>
              <el-button type="text" size="mini" @click="recommendHandle(scope.row)">
                <template v-if="scope.row.rtime && scope.row.rtime !== ''">取消</template>
                推荐
              </el-button>
            </template>
          </el-table-column>
          <template v-if="config.noData" v-slot:empty>
            <gs-no-data :msg="config.msg" v-if="config.noData"></gs-no-data>
          </template>
        </el-table>
      </div>
    </div>
    <div class="xms-flex-headerOrBottom gs-bottom-padding gs-border-radius-shadow">
      <div class="flex justify-between align-middle om-handler">
        <div>
        </div>
        <gs-pagination :pageIndex.sync="config.page" :pageSize.sync="config.pageSize"
                       :total="config.total" @sizeChange="getList" @pageChange="getList"></gs-pagination>
      </div>
    </div>
    <article-detail :show.sync="detail.show" :id="detail.id" @success="okDetail"></article-detail>
  </div>
</template>

<script>
  import ArticleDetail from '@/components/backstage/manager/ArticleDetail'

  export default {
    name: 'ArticleMg',
    data() {
      return {
        tableData: [],
        config: { // 翻页
          msg: '暂无数据',
          noData: false,
          page: 1,
          pageSize: 10,
          total: 0
        },
        keyword: '',
        recommend: '',
        detail: {
          show: false,
          id: ''
        }
      }
    },
    components: {
      ArticleDetail
    },
    mounted() {
      this.reset()
    },
    methods: {
      // 列表
      reset() {
        this.config.page = 1
        this.getList()
      },
      getList() {
        // 获取列表
        let {page, pageSize} = this.config
        this.$http.get('/admin/information/list', {
          pageNum: page,
          pageSize,
          keyword: this.keyword,
          recommend: this.recommend,
          showLoading: 1
        }).then(({status, data}) => {
          if (status === 200) {
            this.config.noData = data.list.length === 0
            this.tableData = data.list
            if (page === 1) this.config.total = data.total
          } else {
            this.config.msg = data.msg
            this.config.noData = true
          }
        })
      },
      // 新增编辑
      openDetail(item) {
        let id = item ? item.id : ''
        this.detail = {
          show: true,
          id
        }
      },
      okDetail() {
        if (this.detail.id && this.detail.id !== '') {
          this.getList()
        } else {
          this.reset()
        }
      },

      // 推荐
      recommendHandle(item) {
        let {rtime, id} = item
        let recommend = rtime && rtime !== '' ? 0 : 1
        this.messageConfirm(`确定${recommend === 0 ? '取消' : ''}推荐？`, {}).then(() => {
          this.$http.get('/admin/information/recommend', {
            id,
            recommend,
            showLoading: 1
          }).then(({status, data}) => {
            if (status === 200) {
              if (data.code === 0) {
                this.success('操作成功', () => {
                  this.getList()
                })
              }
            }
          })
        }).catch(() => {
        })
      },

      // 删除
      cancel(id) {
        this.messageConfirm('确定删除？', {}).then(() => {
          this.$http.get('/admin/information/delete', {
            id: id,
            showLoading: 1
          }).then(({status, data}) => {
            if (status === 200) {
              this.success('删除成功', () => {
                if (this.tableData.length === 1 && this.config.page !== 1) {
                  this.config.page--
                }
                this.getList()
              })
            }
          })
        }).catch(() => {
        })
      }

    }
  }
</script>

<style scoped lang="less">
  @import '~@/static/css/backstage/order';
  @import '~@/static/css/backstage/manager';
</style>
