<template>
  <div class="copy-code-container">
    <template v-if="showCopy">
      <el-tooltip effect="light" content="复制" placement="bottom">
        <i class="el-icon-copy-document icon-copy" v-copy="code"></i>
      </el-tooltip>
    </template>
    <pre><code :class="languageClass">{{code}}</code></pre>
  </div>
</template>

<script>
  import Prism from 'prismjs'

  export default {
    name: 'GsCode',
    data() {
      return {}
    },
    mounted() {
      Prism.highlightAll()
    },
    props: {
      showCopy: { // 显示复制
        type: Boolean,
        default: true
      },
      showLine: { // 显示行号
        type: Boolean,
        default: true
      },
      code: { // 代码内容
        type: String,
        default: ''
      },
      language: { // 语言
        type: String,
        default: 'language-javascript'
      }
    },
    computed: {
      languageClass() {
        let array = []
        if (this.showLine) {
          array.push('line-numbers')
        }
        array.push(this.language)
        return array
      }
    }
  }
</script>

<style lang="less" scoped>
  .copy-code-container {
    position: relative;

    .icon-copy {
      display: none;
    }
  }

  .copy-code-container:hover {
    .icon-copy {
      display: block;
      z-index: 999;
      position: absolute;
      right: 30px;
      top: 30px;
      color: #999;
      font-size: 20px;
      cursor: pointer;
    }
  }

  /deep/ pre[class*=language-] {
    white-space: pre-wrap
  }

  // 右标
  pre[class*=language-]:before {
    position: absolute;
    z-index: 3;
    top: 8px;
    right: 8px;
    font-size: 12px;
    color: hsla(0, 0%, 100%, .4);
  }

  pre[class~=language-js]:before {
    content: "js";
  }

  pre[class~=language-css]:before {
    content: "css";
  }

  pre[class~=language-javascript]:before {
    content: "js";
  }

  pre[class~=language-typescript]:before {
    content: "ts";
  }

  pre[class~=language-python]:before {
    content: "python";
  }

  pre[class~=language-java]:before {
    content: "java";
  }

  pre[class~=language-markup]:before {
    content: "html";
  }

  pre[class~=language-php]:before {
    content: "php";
  }

  pre[class~=language-go]:before {
    content: "go";
  }

  pre[class~=language-cs]:before {
    content: "c#";
  }
</style>
