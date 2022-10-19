<template>
  <el-dialog
      :title="`${handle}咨询`"
      :width="'1000px'"
      class="article-detail"
      :close-on-click-modal="false"
      :visible.sync="show"
      :before-close="close">
    <el-form ref="form" :model="form" label-width="40px" >
      <el-form-item label="标题">
        <div class="flex">
          <el-input v-model="form.title" size="small" placeholder="请输入标题" class="ad-title"></el-input>
          <el-checkbox v-model="form.checked">推荐</el-checkbox>
        </div>
      </el-form-item>
      <el-form-item label="内容">
        <gs-editor :value="form.content" @input="handleChange"></gs-editor>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
        <el-button @click="close" :size="$const.FORM_ATTRIBUTES.size">取 消</el-button>
        <el-button type="primary" @click="check" :size="$const.FORM_ATTRIBUTES.size">确 定</el-button>
      </span>
  </el-dialog>
</template>

<script>
  export default {
    name: 'ArticleDetail',
    data() {
      return {
        form: {
          title: '',
          checked: false,
          content: ''
        },
        handle: ''
      }
    },
    props: {
      show: {
        type: Boolean,
        default: false
      },
      id: {
        default: ''
      }
    },
    watch: {
      show: {
        handler () {
          if (this.show) {
            this.handle = '新增'
            this.form = {
              title: '',
              checked: false,
              content: '',
              rtime: null
            }
            if (this.id && this.id !== '') {
              this.handle = '编辑'
              this.getDetail()
            }
          }
        },
        immediate: true
      }
    },
    methods: {
      getDetail () {
        this.$http.get('/admin/information/get', {
          id: this.id,
          showLoading: 1
        }).then(({status, data}) => {
          if (status === 200) {
            data.information.checked = data.information.rtime && data.information.rtime !== ''
            this.form = Object.assign(this.form, data.information)
          }
        })
      },

      handleChange (value) {
        this.form.content = value
      },
      check () {
        let {title, content, checked} = this.form
        if (title === '') {
          this.alert('请填写标题')
          return false
        } else if (content === '') {
          this.alert('请填写内容')
          return false
        }
        let params = {
          title,
          content,
          recommend: (checked ? 1 : 0),
          showLoading: 1
        }
        if (this.id && this.id !== '') {
          params.id = this.id
        }
        this.$http.form('/admin/information/saveOrUpdate', params).then(({status, data}) => {
          if (status === 200) {
            this.success('操作成功', () => {
              this.$emit('success')
              this.close()
            })
          }
        })
      },
      close () {
        this.$emit('update:show', false)
      }

    }
  }
</script>

<style scoped lang="less">
  @import '~@/static/css/backstage/order';
  @import '~@/static/css/backstage/manager';
  .article-detail{
    .ad-title{
      width:60%;
      margin-right:15px;
    }
    /deep/.el-dialog__body{
      padding:20px 20px 0;
    }
  }
</style>
