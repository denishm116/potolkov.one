<template>
  <section class="catalog">
    <div class='container'>

      <v-breadcrumbs
        :second="{name: 'Каталог натяжных потолков', to: false, active: false}"
      ></v-breadcrumbs>

      <h1 class="catalog__title my-title">Каталог натяжных потолков</h1>
      <p class="catalog__text">
        На сегодняшний день существует огромнейший выбор натяжных потолков на любой вкус и кошелек, и мы, компания
        "Господин Потолков", можем предложить Вам любое решение из существующих. Это и классические
        белые, матовые, глянцевые и сатиновые потолки, цветные потолки, которые также могут быть разных фактур. Это и
        многоуровневые потолки с подсветкой и без, и современные парящие потолки, и резные потолки Apply, и
        технологичные потолки DoubleVision, изображение на которых меняется в зависимости от освещения.
      </p>
      <div class="catalog__row mt-10">
        <div class="catalog__column" v-for="(catalog, index) in ceiling_catalog">
          <div class="catalog__item">


            <nuxt-link :to="'/ceilings_catalog/' + catalog.slug" class="catalog__item-photo ibg">
              <img :src="PATH + catalog.mainImage" alt=""/>
            </nuxt-link>

            <nuxt-link :to="'/ceilings_catalog/' + catalog.slug" class="catalog__item-title">{{ catalog.title }}</nuxt-link>
          </div>

        </div>


      </div>

    </div>
    <projects :ourObjects="ourObjects" :width="1920" :title="'Наши работы'" v-if="ourObjects.length >= 1"></projects>

    <v-read-also :articles="articles.slice(0,4)"></v-read-also>
  </section>
</template>

<script>

import {mapGetters, mapActions} from 'vuex'
import vBreadcrumbs from '@/components/frontend/partials/vBreadcrumbs'
import Projects from '@/components/frontend/Projects'
import vReadAlso from '@/components/frontend/partials/vReadAlso'

export default {

  head() {
    return {
      title: 'Каталог натяжных потолков - Господин Потолков',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Каталог натяжных потолков - Компания Господин Потолков предлагает натяжные потолки в Краснодаре от 189 р. с установкой!'
        },
        {
          'property':  'og:type',
          'content':  'website',
        },
        {
          'property':  'og:url',
          'content':  `https://potolkov.shop${this.$route.path}`,
        },
        {
          'property':  'og:title',
          'content':  'Натяжные потолки в Краснодаре от 189 р. - Господин Потолков',
        },
        {
          'property':  'og:description',
          'content': 'Компания Господин Потолков предлагает натяжные потолки в Краснодаре от 189 р. с установкой! 10 лет гарантии. Бесплатный замер.',
        },
        {
          'property':  'og:site_name',
          'content': 'potolkov.shop',
        },
        {
          'property':  'og:locale',
          'content': 'ru_RU',
        },
        {
          'property':  'og:image',
          'content': 'https://potolkov.shop/site-screen.jpg'
        },
        {
          'property':  'og:image:alt',
          'content': 'Натяжные потолки в Краснодаре от 189 р. - Господин Потолков'
        },
        {
          'name':  'twitter:card',
          'content': 'summary_large_image'
        },
        {
          'name':  'twitter:title',
          'content': 'Натяжные потолки в Краснодаре от 189 р. - Господин Потолков'
        },
        {
          'name':  'twitter:description',
          'content': 'Компания Господин Потолков предлагает натяжные потолки в Краснодаре от 189 р. с установкой! 10 лет гарантии. Бесплатный замер.'
        },
        {
          'name':  'twitter:image:src',
          'content': 'https://potolkov.shop/site-screen.jpg'
        },

      ]
    }
  },

  data() {
    return {
      articles: [],
      ourObjects: []
    }
  },

  computed: {
    ...mapGetters({
      PATH: 'frontend/PATH',
      ceiling_catalog: 'frontend/ceiling_catalog'
    }),

  },

  methods: {
    ...mapActions({
      FETCH_CEILING_CATALOG: 'frontend/fetchCeilingCatalog',
    }),
  },

  async mounted() {
    await this.FETCH_CEILING_CATALOG()
    this.ourObjects = await this.$axios.$get('frontend/ourObjects')
    this.articles = await this.$axios.$get('frontend/articles')
   },

  components: {
    vBreadcrumbs, Projects, vReadAlso
  }
}
</script>

<style scoped>
.container {
  max-width: 1370px;
  margin: 0 auto;
  width: 100%;
}
</style>
