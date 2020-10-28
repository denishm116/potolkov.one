export const state = () => ({
  articles: {},
  article: {},
})

export const mutations = {
  SET_ARTICLES(state, articles) {
    state.articles = articles
  },
  SET_ARTICLE(state, article) {
    state.article = article
  },

}

export const actions = {

  async FETCH_ARTICLES({commit}) {
    try {
      const articles =  await this.$axios.$get('admin/Article')
      commit('SET_ARTICLES', articles)

    } catch (e) {
      return e
    }
  },
  async FETCH_ARTICLE({commit}, params) {
    try {
      const article =  await this.$axios.$get('admin/Article/' + params)
      commit('SET_ARTICLE', article)

    } catch (e) {
      return e
    }
  },
  async ADD_ARTICLE({commit, state, dispatch}, params) {
    try {
      await this.$axios.$post('admin/Article', params)
      dispatch('FETCH_ARTICLES')
    } catch (e) {
      return e
    }
  },

  async UPDATE_ARTICLE({commit, state, dispatch}, params) {
    try {
      await this.$axios.$patch(params.url, params.params)
      dispatch('FETCH_ARTICLES')
    } catch (e) {
      return e
    }
  },

}


export const getters = {
  ARTICLE: state => state.article,
  ARTICLES: state => state.articles,
}
