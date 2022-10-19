<template>
  <div class="xms-flex-wrap order-manage">
    <div class="xms-flex-headerOrBottom gs-top-padding gs-border-radius-shadow">
      <gs-head msg="企业认证">
        <template v-slot:right>
          <div class="gs-header-right">
            <ul class="flex ma-search">
              <li>
                <el-select v-model="status" placeholder="审核状态" size="small" @change="reset">
                  <el-option label="审核状态" value=""></el-option>
                  <el-option :label="item.name" :value="item.value" v-for="(item, index) in statusList" :key="index"></el-option>
                </el-select>
              </li>
              <li>
                <el-input v-model="companyName" size="small" placeholder="请输入企业名称"></el-input>
              </li>
              <li>
                <el-button type="primary" :size="$const.FORM_ATTRIBUTES.size" @click="reset">查询</el-button>
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
            prop="companyName"
            align="center"
            label="企业名称"
            >
          </el-table-column>
          <el-table-column
              prop="creditCode"
            align="center"
            label="统一社会信用代码">
          </el-table-column>
          <el-table-column
            prop="bank"
            align="center"
            label="开户银行">
          </el-table-column>
          <el-table-column
            align="center"
            label="银行账号">
            <template slot-scope="scope">
              {{completeName(scope.row.bankAccount)}}
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            width="110"
            label="联系电话">
            <template slot-scope="scope">
              {{completeName(scope.row.contactPhone)}}
            </template>
          </el-table-column>
          <el-table-column
              align="center"
              width="80"
              label="营业执照">
            <template slot-scope="scope">
              <el-image
                  style="width: 50px; height: 50px"
                  :src="scope.row.licenseImg"
                  :preview-src-list="[scope.row.licenseImg]">
              </el-image>
            </template>
          </el-table-column>
          <el-table-column
              align="center"
              width="100"
              label="审核状态">
            <template slot-scope="scope">
              {{statusList.filter(item => item.value === scope.row.authStatus)[0].name}}
            </template>
          </el-table-column>
          <el-table-column
            prop="ctime"
            align="center"
            label="提交时间">
          </el-table-column>
          <el-table-column label="操作" width="120" align="center">
            <template slot-scope="scope" v-if="scope.row.authStatus === -1">
              <el-button type="text" size="mini" @click="cancel(scope.row.id)">拒绝</el-button>
              <el-button type="text" size="mini" @click="openCheck(scope.row)">通过</el-button>
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
    <el-dialog
        title="打款确认"
        :width="'600px'"
        class="certificate-pass"
        :close-on-click-modal="false"
        :visible.sync="dialog.show"
        :before-close="close">
      <div class="cp-box">
        <gs-tip :msg='`请如实填写向"${dialog.item.companyName}"对公账号(${dialog.item.bankAccount})转入的金额`'></gs-tip>
        <div class="flex justify-center">
          <el-input placeholder="转账金额" v-enter-money v-model="dialog.price" clearable>
            <template slot="prepend">￥</template>
            <template slot="append">元</template>
          </el-input>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="close" :size="$const.FORM_ATTRIBUTES.size">取 消</el-button>
        <el-button type="primary" @click="check" :size="$const.FORM_ATTRIBUTES.size">通过</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>


  export default {
    name: 'ArticleMg',
    data() {
      return {
        status: -1,
        statusList: this.$store.state.ef_status,
        companyName: '',
        tableData: [],
        config: { // 翻页
          msg: '暂无数据',
          noData: false,
          page: 1,
          pageSize: 10,
          total: 0
        },
        dialog: {
          show: false,
          price: '',
          item: {}
        }
      }
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
        this.$http.post('/authAdmin/list', {
          page,
          pageSize,
          status: this.status,
          companyName: this.companyName,
          showLoading: 1
        }).then(({status, data}) => {
          if (status === 200) {
            this.config.noData = data.list.length === 0
            this.tableData = data.list
            if (page === 1) this.config.total = data.count
          } else {
            this.config.msg = data.msg
            this.config.noData = true
          }
        })
      },
      // 拒绝
      cancel(id) {
        this.messageConfirm('拒绝后，认证失败，是否确认？', {}).then(() => {
          this.update(id, 2)
        }).catch(() => {
        })
      },
      update(id, status) {
        let params = {
          id,
          status,
          showLoading: 1
        }
        if (status === 3) {
          params.price = this.dialog.price
        }
        this.$http.post('/authAdmin/update', params).then(({status, data}) => {
          if (status === 200) {
            this.success('操作成功', () => {
              this.getList()
              this.dialog.show = false
            })
          }
        })
      },
      // 通过
      openCheck(item) {
        this.dialog.item = item
        this.dialog.show = true
      },
      check() {
        let {price} = this.dialog
        if (price === '') {
          this.alert('转账金额必填')
          return false
        } else if (Number(price) === 0 || Number(price) > 1) {
          this.alert('转账金额范围0.01~0.99')
          return false
        }
        this.update(this.dialog.item.id, 3)
      },
      close() {
        this.dialog.show = false
      }
    }
  }
</script>

<style scoped lang="less">
  @import '~@/static/css/backstage/order';
  @import '~@/static/css/backstage/manager';
</style>
