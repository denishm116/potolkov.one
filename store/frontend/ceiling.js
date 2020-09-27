export const state = () => ({
  ceiling: {}
})

export const mutations = {

  SET_CEILING(state, ceiling) {
    state.ceiling = ceiling
  }
}

export const actions = {
  async fetchCeiling({commit, state}) {
    try {
      const ceiling =  await this.$axios.$get('frontend/getCeiling/')
      commit('SET_CEILING', ceiling)

    } catch (e) {
      return e
    }

  }
}


export const getters = {
  allCatalog: state => state.catalog,
}
