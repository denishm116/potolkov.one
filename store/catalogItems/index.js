export const state = () => ({
  ceilings: {},
  lightnings: {},
  components: {},

})

export const mutations = {
  SET_CEILINGS(state, ceilings) {
    state.ceilings = ceilings
  },
  SET_LIGHTNINGS(state, lightnings) {
    state.lightnings = lightnings
  },
  SET_COMPONENTS(state, components) {
    state.components = components
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

  async FETCH_LIGHTNINGS({commit, state}) {
    try {
      const lightnings =  await this.$axios.$get('admin/lightnings')
      commit('SET_LIGHTNINGS', lightnings)
    } catch (e) {
      return e
    }
  },
  async ADD_LIGHTNING({commit, state, dispatch}, params) {
    try {
      await this.$axios.$post('admin/lightnings', params)
      dispatch('FETCH_LIGHTNINGS')
    } catch (e) {
      return e
    }
  },
  async FETCH_COMPONENTS({commit, state}) {
    try {
      const components =  await this.$axios.$get('admin/components')
      commit('SET_COMPONENTS', components)
    } catch (e) {
      return e
    }
  },
  async ADD_COMPONENT({commit, state, dispatch}, params) {
    try {
      await this.$axios.$post('admin/components', params)
      dispatch('FETCH_COMPONENTS')
    } catch (e) {
      return e
    }
  },

}


export const getters = {
  CEILINGS: state => state.ceilings,
  LIGHTNINGS: state => state.lightnings,
  COMPONENTS: state => state.components,
}
