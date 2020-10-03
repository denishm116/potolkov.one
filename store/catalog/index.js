export const state = () => ({
  ceiling_catalog: {},
  lightning_catalog: {},
})

export const mutations = {
  SET_CEILING_CATALOG(state, ceiling_catalog) {
    state.ceiling_catalog = ceiling_catalog
  },
  ADD_CEILING_CATEGORY(state, ceiling_catalog) {
    state.ceiling_catalog = ceiling_catalog
  },
  SET_LIGHTNING_CATALOG(state, lightning_catalog) {
    state.lightning_catalog = lightning_catalog
  },
  ADD_LIGHTNING_CATEGORY(state, lightning_catalog) {
    state.lightning_catalog = lightning_catalog
  }
}

export const actions = {
  async fetchCeilingCatalog({commit, state}) {
    try {
      const ceiling_catalog = await this.$axios.$get('admin/catalog')
      commit('SET_CEILING_CATALOG', ceiling_catalog)

    } catch (e) {
      return e
    }
  },

  async addCeilingCategory({commit, dispatch}, params) {
    try {
      const ceiling_category = await this.$axios.$post('admin/catalog', params)
      commit('ADD_CEILING_CATEGORY', ceiling_category)
      dispatch('fetchCeilingCatalog')
    } catch (e) {
      return e
    }
  },
  async fetchLightningCatalog({commit}) {
    try {
      const lightning_catalog = await this.$axios.$get('admin/lightning_catalog')
      commit('SET_LIGHTNING_CATALOG', lightning_catalog)
      return lightning_catalog
    } catch (e) {
      return e
    }
  },

  async addLightningCategory({commit, dispatch}, params) {
    try {
      const lightning_category = await this.$axios.$post('admin/lightning_catalog', params)
      commit('ADD_LIGHTNING_CATEGORY', lightning_category)
      dispatch('fetchLightningCatalog')
    } catch (e) {
      return e
    }
  }
}


export const getters = {
  CEILING_CATALOG: state => state.ceiling_catalog,
  LIGHTNING_CATALOG: state => state.lightning_catalog,
}
