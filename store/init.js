export const initState = {
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
    console.log(789)
    store.commit('setDomain', context.req.headers.host);
  },
}
