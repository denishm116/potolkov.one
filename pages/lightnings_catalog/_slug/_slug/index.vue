<template>
  <section class="catalog">
    <v-row>

    <v-col>
    <div class='container'>

      <v-breadcrumbs
        :second="{ name: 'Каталог освещения', to: '/lightnings_catalog', active: true }"
        :third="{ name: breadcrumb.title, to: '/lightnings_catalog/' + breadcrumb.path, active: true }"
        :forth="{ name: children.title, to: false, active: false }"
      ></v-breadcrumbs>

      <h1 class="catalog__title my-title">{{ children.title }}</h1>
      <div class="cattegory__row">
        <div class="article__info">
          <div class="article__photo">
            <PhotoGallery
              v-if="children.images"
              :width="width"
              :items="items"
              :startImage="startImage"
              :addons="{ enableLargeView: true }"
            >
            </PhotoGallery>
          </div>
          <div class="article__info-text">
            <span v-html="children.description"></span>
          </div>

        </div>
      </div>


    </div>
    </v-col>
    </v-row>

    <div class='container'>
      <div class="catalog__row">
        <div class="catalog__column" v-for="(ceiling, index) in children.lightnings">

          <div class="catalog__item">

            <a :href="$route.params.slug + '/' + ceiling.slug" class="catalog__item-photo ibg">
              <img :src="PATH + ceiling.mainImage" :alt="ceiling.title"/>
            </a>

            <a :href="$route.params.slug + '/' + ceiling.slug" class="catalog__item-title">{{ ceiling.title }}</a>
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
          content: this.asyncCatalog.title + ' - Компания Господин Потолков предлагает натяжные потолки в Краснодаре от 189 р. с установкой!'
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
          'content': 'Натяжные потолки в Краснодаре от 189 р. - Господин Потолков',
        },
        {
          'property': 'og:description',
          'content': 'Компания Господин Потолков предлагает натяжные потолки в Краснодаре от 189 р. с установкой! 10 лет гарантии. Бесплатный замер.',
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
          'content': 'Натяжные потолки в Краснодаре от 189 р. - Господин Потолков'
        },
        {
          'name': 'twitter:card',
          'content': 'summary_large_image'
        },
        {
          'name': 'twitter:title',
          'content': 'Натяжные потолки в Краснодаре от 189 р. - Господин Потолков'
        },
        {
          'name': 'twitter:description',
          'content': 'Компания Господин Потолков предлагает натяжные потолки в Краснодаре от 189 р. с установкой! 10 лет гарантии. Бесплатный замер.'
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
      width: 1920,
      items: [{}],
      startImage: 0,
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
    },
    itemsInit() {
      if (this.children.images) {
        this.children.images.forEach((item, index) => {
          if (item.main) this.startImage = index
        })

        this.items = this.children.images.map(item => {
          return {
            src: (item.path) ? (this.PATH + item.path) : null,
            thumbnail: this.PATH + item.thumb,
          }
        })
      } else {
        return {
          src: '',
          thumbnail: '',
        }
      }
    }
  },

  async mounted() {
    await this.fetchCeiling()
    await this.FETCH_LIGHTNING_CATALOG()
    await this.createBreadcrumb()
    this.itemsInit()
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
