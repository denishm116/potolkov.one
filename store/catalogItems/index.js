export const state = () => ({
  ceilings: {}
})

export const mutations = {
  SET_CEILINGS(state, ceilings) {
    state.ceilings = ceilings
  },

}

export const actions = {
  async FETCH_CEILINGS({commit, state}) {
    try {
      const ceilings =  await this.$axios.$get('admin/ceilings')
      commit('SET_CEILINGS', ceilings)
    } catch (e) {
      return e
    }
  },
  async ADD_CEILING({commit, state, dispatch}, params) {
    try {
      await this.$axios.$post('admin/ceilings', params)
      dispatch('FETCH_CEILINGS')
    } catch (e) {
      return e
    }
  },

}


export const getters = {
  CEILINGS: state => state.ceilings,
}
