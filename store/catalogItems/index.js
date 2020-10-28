export const state = () => ({
  ceilings: {},
  ceiling: {},

  lightnings: {},
  lightning: {},

  components: {},
  component: {},

})

export const mutations = {
  SET_CEILINGS(state, ceilings) {
    state.ceilings = ceilings
  },
  CEILING(state, ceiling) {
    state.ceiling = ceiling
  },

  SET_LIGHTNINGS(state, lightnings) {
    state.lightnings = lightnings
  },
  LIGHTNING(state, lightning) {
    state.lightning = lightning
  },

  SET_COMPONENTS(state, components) {
    state.components = components
  },
  COMPONENT(state, component) {
    state.component = component
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
  async FETCH_CEILING({commit, state}, params) {
    try {
      const ceiling = await this.$axios.$get('admin/ceilings/' + params)
      commit('CEILING', ceiling)
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

  async FETCH_LIGHTNING({commit, state}, params) {
    try {
      const lightning =  await this.$axios.$get('admin/lightnings/' + params)
      commit('LIGHTNING', lightning)
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

  async FETCH_COMPONENT({commit, state}, params) {
    try {
      const component =  await this.$axios.$get('admin/components/' + params)
      commit('COMPONENT', component)
    } catch (e) {
      return e
    }
  },

}


export const getters = {
  CEILINGS: state => state.ceilings,
  CEILING: state => state.ceiling,
  LIGHTNINGS: state => state.lightnings,
  LIGHTNING: state => state.lightning,
  COMPONENTS: state => state.components,
  COMPONENT: state => state.component,
}
