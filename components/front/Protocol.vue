<template>
  <div>
    <NetworkSecurity v-if="active === LIBRARY_TYPE.C_SECURITY"></NetworkSecurity>
    <UserRegister v-else-if="active === LIBRARY_TYPE.C_REGISTER"></UserRegister>
    <UserPrivacy v-else-if="active === LIBRARY_TYPE.C_PRIVACY"></UserPrivacy>
  </div>
</template>

<script>
import NetworkSecurity from '@/pages/front/protocol/NetworkSecurity'
import UserPrivacy from '@/pages/front/protocol/UserPrivacy'
import UserRegister from '@/pages/front/protocol/UserRegister'
import {LIBRARY_TYPE} from '@/static/js/front/library'

export default {
  name: 'Protocol',
  components: {UserPrivacy, UserRegister, NetworkSecurity},
  data () {
    return {
      LIBRARY_TYPE
    }
  },
  props: {
    active: {
      type: String,
      default: LIBRARY_TYPE.C_REGISTER
    }
  }
}
</script>

<style scoped>

</style>
