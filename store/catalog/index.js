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
  async FETCH_CEILING_CATALOG({commit, state}) {
    try {
      const ceiling_catalog = await this.$axios.$get('admin/catalog')
      commit('SET_CEILING_CATALOG', ceiling_catalog)
    } catch (e) {
      return e
    }
  },

  async ADD_CEILING_CATEGORY({commit, dispatch}, params) {
    try {
      const ceiling_category = await this.$axios.$post('admin/catalog', params)
      commit('ADD_CEILING_CATEGORY', ceiling_category)
      dispatch('FETCH_CEILING_CATALOG')
    } catch (e) {
      return e
    }
  },
  async FETCH_LIGHTNING_CATALOG({commit}) {
    try {
      const lightning_catalog = await this.$axios.$get('admin/lightning_catalog')
      commit('SET_LIGHTNING_CATALOG', lightning_catalog)
      return lightning_catalog
    } catch (e) {
      return e
    }
  },

  async ADD_LIGHTNING_CATEGORY({commit, dispatch}, params) {
    try {
      const lightning_category = await this.$axios.$post('admin/lightning_catalog', params)
      commit('ADD_LIGHTNING_CATEGORY', lightning_category)
      dispatch('FETCH_LIGHTNING_CATALOG')
    } catch (e) {
      return e
    }
  }
}


export const getters = {
  CEILING_CATALOG: state => state.ceiling_catalog,
  LIGHTNING_CATALOG: state => state.lightning_catalog,
}
