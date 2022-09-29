<template>
  <div>
新闻耶
  </div>

</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      title: '新闻'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'news'
        }
      ]
    }
  }
}
</script>
