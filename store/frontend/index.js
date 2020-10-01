export const state = () => ({
  ceiling_catalog: {},
  other: [
    {title: 'Часто задаваемые вопросы', slug: 'faq', children: [], img: require("assets/img/other/01.jpg")},
    {title: 'Калькулятор', slug: 'calculator', children: [], img:  require("assets/img/other/01.jpg")},
    {title: 'Отзывы', slug: 'reviews', children: [], img:  require("assets/img/other/01.jpg")},
    {title: 'Статьи о потолках', slug: 'blog', children: [], img:  require("assets/img/other/01.jpg")},
    {title: 'Слив воды', slug: 'sliv_vodi', children: [], img:  require("assets/img/other/01.jpg")},
    {title: 'Ремонт натяжных потолков', slug: 'remont_potolkov', children: [], img:  require("assets/img/other/01.jpg")},
    {title: 'Каталог фотопечати', slug: 'katalog_fotopechati', children: [], img:  require("assets/img/other/01.jpg")},
    {title: 'Каталог цветов', slug: 'katalog_cvetov', children: [], img:  require("assets/img/other/01.jpg")},
  ]
})

export const mutations = {

  SET_CEILING_CATALOG(state, ceiling_catalog) {
    state.ceiling_catalog = ceiling_catalog
  }
}

export const actions = {
  async fetchCeilingCatalog({commit, state}) {
    try {
      const ceiling_catalog = await this.$axios.$get('frontend/getCeilingCatalog')
      commit('SET_CEILING_CATALOG', ceiling_catalog)

    } catch (e) {
      return e
    }

  }
}

export const getters = {
  ceiling_catalog: state => state.ceiling_catalog,
  other: state => state.other,
}
