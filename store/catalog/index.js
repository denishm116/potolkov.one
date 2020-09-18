export const state = () => ({
  catalog: {}
})

export const mutations = {

  SET_CATALOG(state, catalog) {
    state.catalog = catalog
  }
}

export const actions = {
  async fetchCatalog({commit, state}) {
    try {
      const catalog =  await this.$axios.$get('admin/catalog')
      commit('SET_CATALOG', catalog)

    } catch (e) {
      return e
    }

  }
}


export const getters = {
  allCatalog: state => state.catalog,
}
