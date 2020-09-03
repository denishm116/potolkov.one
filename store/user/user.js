export const state = () => ({
    barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',

    drawer: null,

})

export const mutations = {

    SET_DRAWER(state) {
        state.drawer = !state.drawer
    },
    SET_DRAWER_FALSE(state) {
        state.drawer = null
    },
    SET_DATA(state, data) {
        state.userData = data
    },
}

export const actions = {
    drawer({state, commit, dispatch}) {
        commit('SET_DRAWER')

    },
    drawerFalse({commit}) {
        commit('SET_DRAWER_FALSE')
    },
    async getData({commit}) {
       const data = await this.$axios.$get('user/getData')
        commit('SET_DATA', data)
        console.log('IN STATE ' + data)
    }
}


export const getters = {
    userData: state => state.userData,
    drawer: state => state.drawer,
    barColor: state => state. barColor,
}
