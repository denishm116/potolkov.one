<template>
  <section class="catalog">
    <div class='container'>

      <v-breadcrumbs
        :second="{ name: 'Каталог комплектующих', to: '/components_catalog', active: true }"
        :third="{ name: children.title, to: false, active: false }"
      ></v-breadcrumbs>

      <h1 class="catalog__title my-title">{{children.title}}</h1>
      <p class="catalog__text">
        <span v-html="children.description"></span>
      </p>
      <div class="catalog__row">
        <div class="catalog__column" v-for="(catalog, index) in children.children">

          <div class="catalog__item">

            <nuxt-link :to="$route.params.slug + '/' + catalog.slug" class="catalog__item-photo ibg">
              <img :src="PATH + catalog.mainImage" alt="catalog.title"/>
            </nuxt-link>

            <nuxt-link :to="$route.params.slug + '/' + catalog.slug" class="catalog__item-title">{{catalog.title}}</nuxt-link>
          </div>

        </div>


      </div>

    </div>
  </section>
</template>

<script>

  import {mapGetters} from "vuex";
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
      const asyncCatalog = await $axios.$get('frontend/getComponentChildren/' + params.slug)
      return { asyncCatalog }
    },

    data: () => {
      return {
        children: [],
      }
    },

    computed: {
      ...mapGetters({
        PATH: 'frontend/PATH'
      }),
    },

    methods: {
      async fetchCeiling() {
        const response = await this.$axios.$get('frontend/getComponentChildren/' + this.$route.params.slug)
        this.children = response
      },
    },

    mounted() {
      this.fetchCeiling()
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
