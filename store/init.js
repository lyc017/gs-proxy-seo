
export const loginState = {
  domain: '', // 基础域名
}
//
export const initGetters = {
  domain: (state) => state.domain
}

export const initMutations = {
  setDomain(state, domain) {
    state.domain = domain;
  },
}

export const initActions = {
  nuxtServerInit(store, context) {
    console.log('nuxtServerInit')
    console.log(context,'context')
    store.commit('setDomain', context.req.headers.host);
  },
}
