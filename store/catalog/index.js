export const state = () => ({
  ceiling_catalog: {},
  lightning_catalog: {},
  component_catalog: {},
  ceiling_catalog_item: {},
})

export const mutations = {
  SET_CEILING_CATALOG(state, ceiling_catalog) {
    state.ceiling_catalog = ceiling_catalog
  },
  SET_CEILING_CATALOG_ITEM(state, ceiling_catalog_item) {
    state.ceiling_catalog_item = ceiling_catalog_item
  },

  SET_LIGHTNING_CATALOG(state, lightning_catalog) {
    state.lightning_catalog = lightning_catalog
  },
  SET_COMPONENT_CATALOG(state, component_catalog) {
    state.component_catalog = component_catalog
  },

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
      await this.$axios.$post('admin/catalog', params)
      dispatch('FETCH_CEILING_CATALOG')
    } catch (e) {
      return e
    }
  },
  async FETCH_CEILING_CATALOG_ITEM({commit, state}, params) {

    try {
      const ceiling_catalog_item = await this.$axios.$get('admin/catalog/' + params)

      commit('SET_CEILING_CATALOG_ITEM', ceiling_catalog_item)
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
      dispatch('FETCH_LIGHTNING_CATALOG')
    } catch (e) {
      return e
    }
  },
  async FETCH_COMPONENT_CATALOG({commit}) {
    try {
      const component_catalog = await this.$axios.$get('admin/component_catalog')
      commit('SET_COMPONENT_CATALOG', component_catalog)
      return component_catalog
    } catch (e) {
      return e
    }
  },

  async ADD_COMPONENT_CATEGORY({commit, dispatch}, params) {
    try {
      const component_category = await this.$axios.$post('admin/component_catalog', params)
      dispatch('FETCH_COMPONENT_CATALOG')
    } catch (e) {
      return e
    }
  }
}


export const getters = {
  CEILING_CATALOG: state => state.ceiling_catalog,
  CEILING_CATALOG_ITEM: state => state.ceiling_catalog_item,

  LIGHTNING_CATALOG: state => state.lightning_catalog,
  COMPONENT_CATALOG: state => state.component_catalog,
}
