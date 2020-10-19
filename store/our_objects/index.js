export const state = () => ({
  our_objects: {},
  our_object: {},



})

export const mutations = {
  SET_OUR_OBJECTS(state, our_objects) {
    state.our_objects = our_objects
  },
  SET_OUR_OBJECT(state, our_object) {
    state.our_object = our_object
  },

}

export const actions = {

  async FETCH_OUR_OBJECTS({commit, state}) {
    try {
      const our_objects =  await this.$axios.$get('admin/ourObject')
      commit('SET_OUR_OBJECTS', our_objects)

    } catch (e) {
      return e
    }
  },
  async FETCH_OUR_OBJECT({commit}, params) {
    try {
      const our_object =  await this.$axios.$get('admin/ourObject/' + params)
      commit('SET_OUR_OBJECT', our_object)

    } catch (e) {
      return e
    }
  },
  async ADD_OUR_OBJECT({commit, state, dispatch}, params) {
    try {
      await this.$axios.$post('admin/ourObject', params)
      dispatch('FETCH_OUR_OBJECTS')
    } catch (e) {
      return e
    }
  },

  async UPDATE_OUR_OBJECT({commit, state, dispatch},params) {
    try {
      await this.$axios.$patch(params.url, params.params)
      dispatch('FETCH_OUR_OBJECTS')
    } catch (e) {
      return e
    }
  },

}


export const getters = {
  OUR_OBJECT: state => state.our_object,
  OUR_OBJECTS: state => state.our_objects,
}
