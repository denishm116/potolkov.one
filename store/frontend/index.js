export const state = () => ({
  ceiling_catalog: {}
})

export const mutations = {

  SET_CEILING_CATALOG(state, ceiling_catalog) {
    state.ceiling_catalog = ceiling_catalog
  }
}

export const actions = {
  async fetchCeilingCatalog({commit, state}) {
    try {
      const ceiling_catalog =  await this.$axios.$get('frontend/getCeilingCatalog')
      commit('SET_CEILING_CATALOG', ceiling_catalog)

    } catch (e) {
      return e
    }

  }
}

export const getters = {
  ceiling_catalog: state => state.ceiling_catalog,
}
