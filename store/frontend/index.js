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
    {title: 'Каталог фотопечати', slug: 'katalog_fotopechati', children: [], src:  require("assets/img/other/07.jpg")},
    {title: 'Каталог цветов', slug: 'katalog_cvetov', children: [], src:  require("assets/img/other/08.jpg")},
    {title: 'Статьи о потолках', slug: 'blog', children: [], src:  require("assets/img/other/03.jpg")},
    {title: 'Калькулятор стоимости', slug: 'calculator', children: [], src:  require("assets/img/other/02.jpg")},
    {title: 'Отзывы', slug: 'reviews', children: [], src:  require("assets/img/other/06.jpg")},
    {title: 'Часто задаваемые вопросы', slug: 'faq', children: [], src: require("assets/img/other/01.jpg")},
    // {title: 'Слив воды', slug: 'sliv_vodi', children: [], src:  require("assets/img/other/04.jpg")},
    // {title: 'Ремонт натяжных потолков', slug: 'remont_potolkov', children: [], src:  require("assets/img/other/05.jpg")},

  ],

  fotopechat: [
    {title: 'page0001', src: require("assets/img/fotopechat/page0001.jpg")},
    {title: 'page0002', src: require("assets/img/fotopechat/page0002.jpg")},
    {title: 'page0003', src: require("assets/img/fotopechat/page0003.jpg")},
    {title: 'page0004', src: require("assets/img/fotopechat/page0004.jpg")},
    {title: 'page0005', src: require("assets/img/fotopechat/page0005.jpg")},
    {title: 'page0006', src: require("assets/img/fotopechat/page0006.jpg")},
    {title: 'page0007', src: require("assets/img/fotopechat/page0007.jpg")},
    {title: 'page0008', src: require("assets/img/fotopechat/page0008.jpg")},
    {title: 'page0009', src: require("assets/img/fotopechat/page0009.jpg")},
    {title: 'page0010', src: require("assets/img/fotopechat/page0010.jpg")},
    {title: 'page0011', src: require("assets/img/fotopechat/page0011.jpg")},
    {title: 'page0012', src: require("assets/img/fotopechat/page0012.jpg")},
    {title: 'page0013', src: require("assets/img/fotopechat/page0013.jpg")},
    {title: 'page0014', src: require("assets/img/fotopechat/page0014.jpg")},
    {title: 'page0015', src: require("assets/img/fotopechat/page0015.jpg")},
    {title: 'page0016', src: require("assets/img/fotopechat/page0016.jpg")},
    {title: 'page0017', src: require("assets/img/fotopechat/page0017.jpg")},
    {title: 'page0018', src: require("assets/img/fotopechat/page0018.jpg")},
    {title: 'page0019', src: require("assets/img/fotopechat/page0019.jpg")},
    {title: 'page0020', src: require("assets/img/fotopechat/page0020.jpg")},
    {title: 'page0021', src: require("assets/img/fotopechat/page0021.jpg")},
    {title: 'page0021', src: require("assets/img/fotopechat/page0021.jpg")},
    {title: 'page0022', src: require("assets/img/fotopechat/page0022.jpg")},
    {title: 'page0023', src: require("assets/img/fotopechat/page0023.jpg")},
    {title: 'page0024', src: require("assets/img/fotopechat/page0024.jpg")},
    {title: 'page0025', src: require("assets/img/fotopechat/page0025.jpg")},
    {title: 'page0026', src: require("assets/img/fotopechat/page0026.jpg")},
    {title: 'page0027', src: require("assets/img/fotopechat/page0027.jpg")},
    {title: 'page0028', src: require("assets/img/fotopechat/page0028.jpg")},
    {title: 'page0029', src: require("assets/img/fotopechat/page0029.jpg")},
    {title: 'page0030', src: require("assets/img/fotopechat/page0030.jpg")},
    {title: 'page0031', src: require("assets/img/fotopechat/page0031.jpg")},
    {title: 'page0032', src: require("assets/img/fotopechat/page0032.jpg")},
    {title: 'page0033', src: require("assets/img/fotopechat/page0033.jpg")},
    {title: 'page0034', src: require("assets/img/fotopechat/page0034.jpg")},
    {title: 'page0035', src: require("assets/img/fotopechat/page0035.jpg")},
    {title: 'page0036', src: require("assets/img/fotopechat/page0036.jpg")},
    {title: 'page0037', src: require("assets/img/fotopechat/page0037.jpg")},
    {title: 'page0038', src: require("assets/img/fotopechat/page0038.jpg")},
    {title: 'page0039', src: require("assets/img/fotopechat/page0039.jpg")},
    {title: 'page0040', src: require("assets/img/fotopechat/page0040.jpg")},
    {title: 'page0041', src: require("assets/img/fotopechat/page0041.jpg")},
    {title: 'page0042', src: require("assets/img/fotopechat/page0042.jpg")},
    {title: 'page0043', src: require("assets/img/fotopechat/page0043.jpg")},
    {title: 'page0044', src: require("assets/img/fotopechat/page0044.jpg")},
    {title: 'page0045', src: require("assets/img/fotopechat/page0045.jpg")},
    {title: 'page0046', src: require("assets/img/fotopechat/page0046.jpg")},
    {title: 'page0047', src: require("assets/img/fotopechat/page0047.jpg")},
    {title: 'page0048', src: require("assets/img/fotopechat/page0048.jpg")},
    {title: 'page0049', src: require("assets/img/fotopechat/page0049.jpg")},
    {title: 'page0050', src: require("assets/img/fotopechat/page0050.jpg")},
    {title: 'page0051', src: require("assets/img/fotopechat/page0051.jpg")},
    {title: 'page0052', src: require("assets/img/fotopechat/page0052.jpg")},
    {title: 'page0053', src: require("assets/img/fotopechat/page0053.jpg")},
    {title: 'page0054', src: require("assets/img/fotopechat/page0054.jpg")},
    {title: 'page0055', src: require("assets/img/fotopechat/page0055.jpg")},
    {title: 'page0056', src: require("assets/img/fotopechat/page0056.jpg")},
    {title: 'page0057', src: require("assets/img/fotopechat/page0057.jpg")},
    {title: 'page0058', src: require("assets/img/fotopechat/page0058.jpg")},
    {title: 'page0059', src: require("assets/img/fotopechat/page0059.jpg")},
    {title: 'page0060', src: require("assets/img/fotopechat/page0060.jpg")},
    {title: 'page0061', src: require("assets/img/fotopechat/page0061.jpg")},
    {title: 'page0062', src: require("assets/img/fotopechat/page0062.jpg")},
    {title: 'page0063', src: require("assets/img/fotopechat/page0063.jpg")},
    {title: 'page0064', src: require("assets/img/fotopechat/page0064.jpg")},
    {title: 'page0065', src: require("assets/img/fotopechat/page0065.jpg")},
    {title: 'page0066', src: require("assets/img/fotopechat/page0066.jpg")},
    {title: 'page0067', src: require("assets/img/fotopechat/page0067.jpg")},
    {title: 'page0068', src: require("assets/img/fotopechat/page0068.jpg")},
    {title: 'page0069', src: require("assets/img/fotopechat/page0069.jpg")},
    {title: 'page0070', src: require("assets/img/fotopechat/page0070.jpg")},
    {title: 'page0071', src: require("assets/img/fotopechat/page0071.jpg")},
    {title: 'page0072', src: require("assets/img/fotopechat/page0072.jpg")},
    {title: 'page0073', src: require("assets/img/fotopechat/page0073.jpg")},
    {title: 'page0074', src: require("assets/img/fotopechat/page0074.jpg")},
    {title: 'page0075', src: require("assets/img/fotopechat/page0075.jpg")},
    {title: 'page0076', src: require("assets/img/fotopechat/page0076.jpg")},
    {title: 'page0077', src: require("assets/img/fotopechat/page0077.jpg")},
    {title: 'page0078', src: require("assets/img/fotopechat/page0078.jpg")},
    {title: 'page0079', src: require("assets/img/fotopechat/page0079.jpg")},
    {title: 'page0080', src: require("assets/img/fotopechat/page0080.jpg")},
    {title: 'page0081', src: require("assets/img/fotopechat/page0081.jpg")},
    {title: 'page0082', src: require("assets/img/fotopechat/page0082.jpg")},
    {title: 'page0083', src: require("assets/img/fotopechat/page0083.jpg")},
    {title: 'page0084', src: require("assets/img/fotopechat/page0084.jpg")},
    {title: 'page0085', src: require("assets/img/fotopechat/page0085.jpg")},
    {title: 'page0086', src: require("assets/img/fotopechat/page0086.jpg")},
    {title: 'page0087', src: require("assets/img/fotopechat/page0087.jpg")},
    {title: 'page0088', src: require("assets/img/fotopechat/page0088.jpg")},
    {title: 'page0089', src: require("assets/img/fotopechat/page0089.jpg")},
    {title: 'page0090', src: require("assets/img/fotopechat/page0090.jpg")},
    {title: 'page0091', src: require("assets/img/fotopechat/page0091.jpg")},
    {title: 'page0092', src: require("assets/img/fotopechat/page0092.jpg")},
    {title: 'page0093', src: require("assets/img/fotopechat/page0093.jpg")},
    {title: 'page0094', src: require("assets/img/fotopechat/page0094.jpg")},
    {title: 'page0095', src: require("assets/img/fotopechat/page0095.jpg")},
    {title: 'page0096', src: require("assets/img/fotopechat/page0096.jpg")},
    {title: 'page0097', src: require("assets/img/fotopechat/page0097.jpg")},
    {title: 'page0098', src: require("assets/img/fotopechat/page0098.jpg")},
    {title: 'page0099', src: require("assets/img/fotopechat/page0099.jpg")},
    {title: 'page0100', src: require("assets/img/fotopechat/page0100.jpg")},
    {title: 'page0101', src: require("assets/img/fotopechat/page0101.jpg")},
    {title: 'page0102', src: require("assets/img/fotopechat/page0102.jpg")},
    {title: 'page0103', src: require("assets/img/fotopechat/page0103.jpg")},
    {title: 'page0104', src: require("assets/img/fotopechat/page0104.jpg")},
    {title: 'page0105', src: require("assets/img/fotopechat/page0105.jpg")},
    {title: 'page0106', src: require("assets/img/fotopechat/page0106.jpg")},
    {title: 'page0107', src: require("assets/img/fotopechat/page0107.jpg")},
    {title: 'page0108', src: require("assets/img/fotopechat/page0108.jpg")},
    {title: 'page0109', src: require("assets/img/fotopechat/page0109.jpg")},
    {title: 'page0110', src: require("assets/img/fotopechat/page0110.jpg")},
    {title: 'page0111', src: require("assets/img/fotopechat/page0111.jpg")},
    {title: 'page0112', src: require("assets/img/fotopechat/page0112.jpg")},
    {title: 'page0113', src: require("assets/img/fotopechat/page0113.jpg")},
    {title: 'page0114', src: require("assets/img/fotopechat/page0114.jpg")},
    {title: 'page0115', src: require("assets/img/fotopechat/page0115.jpg")},
    {title: 'page0116', src: require("assets/img/fotopechat/page0116.jpg")},
    {title: 'page0117', src: require("assets/img/fotopechat/page0117.jpg")},
    {title: 'page0118', src: require("assets/img/fotopechat/page0118.jpg")},
    {title: 'page0119', src: require("assets/img/fotopechat/page0119.jpg")},
    {title: 'page0120', src: require("assets/img/fotopechat/page0120.jpg")},
    {title: 'page0121', src: require("assets/img/fotopechat/page0121.jpg")},
    {title: 'page0122', src: require("assets/img/fotopechat/page0122.jpg")},
    {title: 'page0123', src: require("assets/img/fotopechat/page0123.jpg")},
    {title: 'page0124', src: require("assets/img/fotopechat/page0124.jpg")},
  ],

  facturi: [
    {title: 'Parcha', subtitle: 'perl', src: require("assets/img/facturi/parcha-perl-1.jpg")},
    {title: 'Parcha', subtitle: '006', src: require("assets/img/facturi/parcha-006.jpg")},
    {title: 'Parcha', subtitle: '008', src: require("assets/img/facturi/parcha-008.jpg")},
    {title: 'Parcha', subtitle: '010', src: require("assets/img/facturi/parcha-010.jpg")},
    {title: 'Parcha', subtitle: '303', src: require("assets/img/facturi/parcha-303.jpg")},
    {title: 'Parcha', subtitle: '501', src: require("assets/img/facturi/percha-501.jpg")},
    {title: 'Modern', subtitle: '225', src: require("assets/img/facturi/modern-225-300x300.jpg")},
    {title: 'Modern', subtitle: '303',src: require("assets/img/facturi/modern-303.jpg")},
    {title: 'Modern', subtitle: '404', src: require("assets/img/facturi/modern-404.jpg")},
    {title: 'Modern', subtitle: '501',src: require("assets/img/facturi/modern-501-300x300.jpg")},
    {title: 'Modern', subtitle: '507', src: require("assets/img/facturi/modern-507.jpg")},
    {title: 'Clouds', subtitle: 'Облака', src: require("assets/img/facturi/clouds.jpg")},
    {title: 'Lines', subtitle: 'Линии', src: require("assets/img/facturi/lines.jpg")},
    {title: 'Drops', subtitle: 'Капли', src: require("assets/img/facturi/drops.jpg")},
    {title: 'Circles', subtitle: 'perl', src: require("assets/img/facturi/circles-perl.jpg")},
    {title: 'Circles', subtitle: 'perl', src: require("assets/img/facturi/mosaic-perl.jpg")},
    {title: 'Галактика', subtitle: 'G114', src: require("assets/img/facturi/g114.jpg")},
    {title: 'Галактика', subtitle: 'G162', src: require("assets/img/facturi/g162.jpg")},
    {title: 'Галактика', subtitle: 'G225', src: require("assets/img/facturi/g225.jpg")},
    {title: 'Галактика', subtitle: 'G303', src: require("assets/img/facturi/g303.jpg")},
    {title: 'Галактика', subtitle: 'G347', src: require("assets/img/facturi/g347.jpg")},
    {title: 'Галактика', subtitle: 'G462', src: require("assets/img/facturi/g462.jpg")},
    {title: 'Галактика', subtitle: 'G478', src: require("assets/img/facturi/g478.jpg")},
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
  facturi: state => state.facturi,
  fotopechat: state => state.fotopechat,
}
