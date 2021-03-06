<template>
  <section class="catalog">
    <v-row>
      <v-col>
        <div class='container'>
          <v-breadcrumbs
            :second="{ name: 'Каталог натяжных потолков', to: '/ceilings_catalog', active: true }"
            :third="{ name: breadcrumb.title, to: '/ceilings_catalog/' + breadcrumb.path, active: true }"
            :forth="{ name: child.title, to: false, active: false }"
          ></v-breadcrumbs>

          <h1 class="catalog__title my-title">{{ child.title }}</h1>

          <div class="cattegory__row">
            <div class="article__info">
              <div class="article__photo" >
                <PhotoGallery
                  v-if="child.images"
                  :width="width"
                  :items="items"
                  :startImage="startImage"
                  :addons="{ enableLargeView: true }"
                >
                </PhotoGallery>
              </div>
              <div class="article__info-text">
                <span v-html="child.description"></span>
              </div>

            </div>
          </div>

        </div>
      </v-col>
    </v-row>

    <div class='container'>
      <div class="catalog__row">
        <div class="catalog__column" v-for="(ceiling, index) in child.ceilings">

          <div class="catalog__item">

            <a :href="$route.params.slug + '/' + ceiling.slug" class="catalog__item-photo ibg">
              <img :src="PATH + ceiling.mainImage" :alt="ceiling.title"/>
            </a>

            <a :href="$route.params.slug + '/' + ceiling.slug" class="catalog__item-title">{{ ceiling.title }}</a>
          </div>
        </div>
      </div>
    </div>

    <projects :ourObjects="ourObjects" :width="width" :title="'Наши работы'" v-if="ourObjects.length >= 1 && child.images"></projects>

    <v-read-also :articles="articles"></v-read-also>
  </section>
</template>

<script>
import vBreadcrumbs from '@/components/frontend/partials/vBreadcrumbs'
import Projects from '@/components/frontend/Projects'
import vReadAlso from '@/components/frontend/partials/vReadAlso'
import {mapGetters, mapActions} from 'vuex'

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
    const asyncCatalog = await $axios.$get('frontend/getChildren/' + params.slug)
    return {asyncCatalog}
  },

  data: () => {
    return {
      width: 1920,
      items: [{}],
      child: [],
      ourObjects: [],
      articles: [],
      breadcrumb: {},
      startImage: 0
    }
  },

  computed: {
    ...mapGetters({
      CEILINGS_CATALOG: 'frontend/ceiling_catalog',
      PATH: 'frontend/PATH'
    })
  },

  methods: {
    ...mapActions({
      FETCH_CEILINGS_CATALOG: 'frontend/fetchCeilingCatalog',
    }),
    async fetchEntity() {
      this.child = await this.$axios.$get('frontend/getChildren/' + this.$route.params.slug)
      this.ourObjects = await this.$axios.$get('frontend/ourObjectsForCatalog/' + this.$route.params.slug)
      this.articles = await this.$axios.$get('frontend/articlesForCatalog/' + this.$route.params.slug)
    },
    createBreadcrumb() {
      let splittedPath = this.$route.path.split('/')
      this.breadcrumb = {
        path: splittedPath[2],
        title: this.CEILINGS_CATALOG.filter(item => item.slug == splittedPath[2])[0].title,
      }
    },
    itemsInit() {
      if (this.child.images) {
        this.child.images.forEach((item, index) => {
          if (item.main) this.startImage = index
        })

        this.items = this.child.images.map(item => {
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
    await this.fetchEntity()
    await this.FETCH_CEILINGS_CATALOG
    this.createBreadcrumb()
    this.itemsInit()
  },

  components: {
    Projects, vReadAlso, vBreadcrumbs
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
