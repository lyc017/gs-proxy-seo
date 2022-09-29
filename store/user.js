export const state= ()=>({
  userName: 'dalin'
})
export const mutations=({
  changeName(state,value){
    state.userName = value
  }
})
