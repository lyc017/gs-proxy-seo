<template>
  <div class="header-wrap">
    <table class="header-table" width="100%">
      <tbody>
      <tr>
        <th>protocol</th>
        <td>HTTP/1.1</td>
      </tr>
      <tr>
        <th>request-method</th>
        <td>GET</td>
      </tr>
      <tr>
        <th>client-ip</th>
        <td>117.28.155.16</td>
      </tr>
      <tr class="sep">
        <th>&nbsp;</th>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <th>accept</th>
        <td>{{data.accept}}</td>
      </tr>
      <tr>
        <th>accept-encoding</th>
        <td>{{data['accept-encoding']}}</td>
      </tr>
      <tr>
        <th>accept-language</th>
        <td>{{data['accept-language']}}</td>
      </tr>
      <tr>
        <th>connection</th>
        <td>{{data.connection}}</td>
      </tr>
      <tr>
        <th>cookie</th>
        <td>{{data.cookie}}</td>
      </tr>
      <tr>
        <th>host</th>
        <td>{{data.host}}</td>
      </tr>
      <tr>
        <th>sec-ch-ua</th>
        <td>{{data.host}}</td>
      </tr>
      <tr>
        <th>sec-ch-ua-mobile</th>
        <td>?0</td>
      </tr>
      <tr>
        <th>sec-ch-ua-platform</th>
        <td>"macOS"</td>
      </tr>
      <tr>
        <th>sec-fetch-dest</th>
        <td>document</td>
      </tr>
      <tr>
        <th>sec-fetch-mode</th>
        <td>navigate</td>
      </tr>
      <tr>
        <th>sec-fetch-site</th>
        <td>none</td>
      </tr>
      <tr>
        <th>sec-fetch-user</th>
        <td>?1</td>
      </tr>
      <tr>
        <th>upgrade-insecure-requests</th>
        <td>1</td>
      </tr>
      <tr>
        <th>user-agent</th>
        <td>{{data['user-agent']}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'HeaderIndex',
    data() {
      return {
        data: {}
      }
    },
    mounted() {
      this.request()
    },
    methods: {
      request() {
        this.$http.get('/request', {}).then(({status, data}) => {
          if (status === 200) {
            this.data = data
          }
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .header-wrap {
    margin: 50px 8px;

    .header-table {
      font-family: "Courier New", Courier, monospace;
      text-align: left;
      border-collapse: collapse;
      margin: 15px auto;
    }

    .header-table td, th {
      border: 1px solid #666;
      padding: 6px 8px;
      vertical-align: baseline
    }

    .header-table th {
      background-color: #ccf;
      font-size: 16px;
      font-weight: 700;
      width: 280px
    }

    .header-table tr.sep td, .header-table tr.sep th {
      min-height: 18px;
      background-color: #fff;
      border-left: none;
      border-right: none
    }
  }
</style>
