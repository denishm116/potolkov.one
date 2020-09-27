export const state = () => ({
  ceilings: {}
})

export const mutations = {

  SET_CEILINGS(state, ceilings) {
    state.ceilings = ceilings
  }
}

export const actions = {
  async fetchCeilings({commit, state}) {
    try {
      const ceilings =  await this.$axios.$get('admin/ceilings')
      commit('SET_CEILINGS', ceilings)

    } catch (e) {
      return e
    }

  }
}


export const getters = {
  CEILINGS: state => state.ceilings,
}
