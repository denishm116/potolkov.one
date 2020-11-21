<template>
  <div class="margin">
    <section class="cattegory">
      <div class='container'>

        <v-breadcrumbs
          :second="{ name: 'Каталог натяжных потолков', to: '/lightnings_catalog', active: true }"
          :third="{ name: breadcrumbThird.title, to: '/lightnings_catalog/' + breadcrumbThird.path, active: true }"
          :forth="{ name: breadcrumbForth.title, to: '/lightnings_catalog/' + breadcrumbThird.path + '/' + breadcrumbForth.path, active: true }"
          :fifth="{ name: lightning.title, to: false, active: false }"
        ></v-breadcrumbs>

        <h1 class="cattegory__title my-title">{{lightning.title}}</h1>
        <div class="cattegory__row">
          <div class="article__info">
            <div class="article__photo">
              <PhotoGallery :width="width" :items="items" :addons="{ enableLargeView: true }"></PhotoGallery>

            </div>
            <div class="article__info-text">
              <span v-html="lightning.description"></span>
            </div>

          </div>
        </div>
      </div>
    </section>


  </div>
</template>

<script>
import PhotoGallery from '@/components/partials/PhotoGallery'
import vBreadcrumbs from '@/components/frontend/partials/vBreadcrumbs'
import {mapActions, mapGetters} from "vuex";
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
      const asyncCatalog = await $axios.$get('frontend/getLightning/' + params.slug)
      return { asyncCatalog }
    },


    data: () => {
      return {
        width: 1920,
        lightning: {},
        title: '',
        description: '',
        items: [{}],
        ourObjects: [],
        articles: [],
        breadcrumbThird: {},
        breadcrumbForth: {},
     }
    },

    computed: {
      ...mapGetters({
        LIGHTNING_CATALOG: 'frontend/lightning_catalog',
        PATH: 'frontend/PATH'
      }),

    },

    methods: {
      createBreadcrumbs() {
        let splitedPath = this.$route.path.split('/')
        this.breadcrumbThird = {
          path: splitedPath[2],
          title: this.LIGHTNING_CATALOG.filter(item => item.slug == splitedPath[2])[0].title,
        }
        this.LIGHTNING_CATALOG.forEach(item => {
          if (item.slug == splitedPath[2]) {
            this.breadcrumbForth = {
              path: splitedPath[3],
              title: item.children.filter(child => child.slug == splitedPath[3])[0].title
            }
          }
        })
      },
      itemsInit() {
        this.items = this.lightning.images.map(item => {
          return {
            src: this.PATH + item.path,
            thumbnail: this.PATH + item.thumb,
          }
        })
      },
      async fetchEntity() {
        this.lightning = await this.$axios.$get('frontend/getLightning/' + this.$route.params.slug)
      },
      ...mapActions({
        FETCH_LIGHTNING_CATALOG: 'frontend/fetchCeilingCatalog',
      }),
    },

    async mounted() {
      await this.fetchEntity()
      await this.FETCH_LIGHTNING_CATALOG()
      await this.createBreadcrumbs()
      await this.itemsInit()
      console.log(this.lightning)
    },

    components: {
      PhotoGallery, vBreadcrumbs
    }

  }
</script>

<style scoped>
  .margin {
    margin: 150px 0 0 0;
  }
  .container {
    max-width: 1370px;
    margin: 0 auto;
    width: 100%;
  }
</style>
