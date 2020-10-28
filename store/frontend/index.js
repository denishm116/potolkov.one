export const state = () => ({
  path: process.env.baseURL + 'storage/',

  ceiling_catalog: {},
  lightning_catalog: {},
  component_catalog: {},

  articles: {},
  article: {},

  our_objects: {},
  our_object: {},

  other: [
    {title: 'Часто задаваемые вопросы', slug: 'faq', children: [], img: require("assets/img/other/01.jpg")},
    {title: 'Калькулятор стоимости', slug: 'calculator', children: [], img:  require("assets/img/other/02.jpg")},
    {title: 'Отзывы', slug: 'reviews', children: [], img:  require("assets/img/other/06.jpg")},
    {title: 'Статьи о потолках', slug: 'blog', children: [], img:  require("assets/img/other/03.jpg")},
    {title: 'Слив воды', slug: 'sliv_vodi', children: [], img:  require("assets/img/other/04.jpg")},
    {title: 'Ремонт натяжных потолков', slug: 'remont_potolkov', children: [], img:  require("assets/img/other/05.jpg")},
    {title: 'Каталог фотопечати', slug: 'katalog_fotopechati', children: [], img:  require("assets/img/other/07.jpg")},
    {title: 'Каталог цветов', slug: 'katalog_cvetov', children: [], img:  require("assets/img/other/08.jpg")},
  ]
})

export const mutations = {
  SET_CEILING_CATALOG(state, ceiling_catalog) {
    state.ceiling_catalog = ceiling_catalog
  },
  SET_LIGHTNING_CATALOG(state, lightning_catalog) {
    state.lightning_catalog = lightning_catalog
  },
  SET_COMPONENT_CATALOG(state, component_catalog) {
    state.component_catalog = component_catalog
  },
  SET_ARTICLES(state, articles) {
    state.articles = articles
  },
  SET_ARTICLE(state, article) {
    state.article = article
  },
  SET_OUR_OBJECTS(state, our_objects) {
    state.our_objects = our_objects
  },
  SET_OUR_OBJECT(state, our_object) {
    state.our_object = our_object
  },
}

export const actions = {
  async fetchCeilingCatalog({commit}) {
    try {
      const ceiling_catalog = await this.$axios.$get('frontend/getCeilingCatalog')
      commit('SET_CEILING_CATALOG', ceiling_catalog)
    } catch (e) {
      return e
    }
  },
  async fetchLightningCatalog({commit}) {
    try {
      const lightning_catalog = await this.$axios.$get('frontend/getLightningCatalog')
      commit('SET_LIGHTNING_CATALOG', lightning_catalog)
    } catch (e) {
      return e
    }
  },
  async fetchComponentCatalog({commit}) {
    try {
      const component_catalog = await this.$axios.$get('frontend/getComponentCatalog')
      commit('SET_COMPONENT_CATALOG', component_catalog)
    } catch (e) {
      return e
    }
  },
  async FETCH_ARTICLES({commit}) {
    try {
      const articles = await this.$axios.$get('frontend/articles')
      commit('SET_ARTICLES', articles)
    } catch (e) {
      return e
    }
  },
  async FETCH_ARTICLE({commit}, id) {
    try {
      const article = await this.$axios.$get('frontend/article/' + id)
      commit('SET_ARTICLE', article)
    } catch (e) {
      return e
    }
  },
  async FETCH_OUR_OBJECTS({commit}) {
    try {
      const our_objects =  await this.$axios.$get('frontend/ourObjects')
      commit('SET_OUR_OBJECTS', our_objects)

    } catch (e) {
      return e
    }
  },
  async FETCH_OUR_OBJECT({commit}, id) {
    try {
      const our_object =  await this.$axios.$get('frontend/ourObject/' + id)
      commit('SET_OUR_OBJECT', our_object)

    } catch (e) {
      return e
    }
  },
}



export const getters = {
  PATH: state => state.path,
  ceiling_catalog: state => state.ceiling_catalog,
  lightning_catalog: state => state.lightning_catalog,
  component_catalog: state => state.component_catalog,
  ARTICLES: state => state.articles,
  ARTICLE: state => state.article,
  OUR_OBJECT: state => state.our_object,
  OUR_OBJECTS: state => state.our_objects,
  other: state => state.other,
}
