export const state = () => ({
  ceiling_catalog: {},
  lightning_catalog: {},
  component_catalog: {},
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
}

export const actions = {
  async fetchCeilingCatalog({commit, state}) {
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
}



export const getters = {
  ceiling_catalog: state => state.ceiling_catalog,
  lightning_catalog: state => state.lightning_catalog,
  component_catalog: state => state.component_catalog,
  other: state => state.other,
}
