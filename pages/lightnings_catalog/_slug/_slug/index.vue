<template>
  <section class="catalog">
    <div class='container'>

      <v-breadcrumbs
        :second="{ name: 'Каталог освещения', to: '/lightnings_catalog', active: true }"
        :third="{ name: breadcrumb.title, to: '/lightnings_catalog' + breadcrumb.path, active: true }"
        :forth="{ name: children.title, to: false, active: false }"
      ></v-breadcrumbs>

      <h1 class="catalog__title my-title">{{ children.title }}</h1>
      <div class="catalog__text">
        <p v-html="children.description"></p>

      </div>
      <div class="catalog__row">
        <div class="catalog__column" v-for="(ceiling, index) in children.lightnings">

          <div class="catalog__item">
            {{ ceiling }}
            <nuxt-link :to="$route.params.slug + '/' + ceiling.slug" class="catalog__item-photo ibg">
              <img :src="PATH + ceiling.mainImage" alt=""/>
            </nuxt-link>

            <nuxt-link :to="$route.params.slug + '/' + ceiling.slug" class="catalog__item-title">{{ ceiling.title }}</nuxt-link>
          </div>

        </div>


      </div>

    </div>
  </section>
</template>

<script>

import {mapActions, mapGetters} from "vuex";
import vBreadcrumbs from '@/components/frontend/partials/vBreadcrumbs'

export default {


  head() {
    return {
      title: `${this.asyncCatalog.title} - Господин Потолков`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.asyncCatalog.title + ' - Компания Господин Потолков предлагает натяжные потолки в Краснодаре от 260 р. с установкой!'
        },
        {
          'property': 'og:type',
          'content': 'website',
        },
        {
          'property': 'og:url',
          'content': `https://potolkov.shop${this.$route.path}`,
        },
        {
          'property': 'og:title',
          'content': 'Натяжные потолки в Краснодаре от 260 р. - Господин Потолков',
        },
        {
          'property': 'og:description',
          'content': 'Компания Господин Потолков предлагает натяжные потолки в Краснодаре от 260 р. с установкой! 10 лет гарантии. Бесплатный замер.',
        },
        {
          'property': 'og:site_name',
          'content': 'potolkov.shop',
        },
        {
          'property': 'og:locale',
          'content': 'ru_RU',
        },
        {
          'property': 'og:image',
          'content': 'https://potolkov.shop/site-screen.jpg'
        },
        {
          'property': 'og:image:alt',
          'content': 'Натяжные потолки в Краснодаре от 260 р. - Господин Потолков'
        },
        {
          'name': 'twitter:card',
          'content': 'summary_large_image'
        },
        {
          'name': 'twitter:title',
          'content': 'Натяжные потолки в Краснодаре от 260 р. - Господин Потолков'
        },
        {
          'name': 'twitter:description',
          'content': 'Компания Господин Потолков предлагает натяжные потолки в Краснодаре от 260 р. с установкой! 10 лет гарантии. Бесплатный замер.'
        },
        {
          'name': 'twitter:image:src',
          'content': 'https://potolkov.shop/site-screen.jpg'
        },
      ]
    }
  },
  async asyncData({params, $axios}) {
    const asyncCatalog = await $axios.$get('frontend/getLightningChildren/' + params.slug)
    return { asyncCatalog }
  },


  data: () => {
    return {
      children: [],
      title: '',
      description: '',
      breadcrumb: {}
    }
  },

  computed: {
    ...mapGetters({
      LIGHTNING_CATALOG: 'frontend/lightning_catalog',
      PATH: 'frontend/PATH'
    }),
    },

  methods: {
    ...mapActions({
      FETCH_LIGHTNING_CATALOG: 'frontend/fetchLightningCatalog',
    }),
    async fetchCeiling() {
      this.children = await this.$axios.$get('frontend/getLightningChildren/' + this.$route.params.slug)
    },
    createBreadcrumb() {
      let splitedPath = this.$route.path.split('/')
      this.breadcrumb =  {
        path: splitedPath[2],
        title: this.LIGHTNING_CATALOG.filter(item => item.slug == splitedPath[2])[0].title,
      }
      console.log(this.LIGHTNING_CATALOG)
    }
  },

  async mounted() {
    await this.fetchCeiling()
    await this.FETCH_LIGHTNING_CATALOG()
    await this.createBreadcrumb()
  },

  components: {
    vBreadcrumbs
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
