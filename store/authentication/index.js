export const state = () => ({
  authenticationWindow: false,
  isUser: ''
})

export const mutations = {
  authenticationWindow(state) {
    state.authenticationWindow = !state.authenticationWindow
  }
}


export const actions = {
  authenticationWindow({commit, dispatch}) {
   commit('authenticationWindow')
  },
}


export const getters = {
  authenticationWindow: state => state.authenticationWindow,
  isUser: state => isUser
}
