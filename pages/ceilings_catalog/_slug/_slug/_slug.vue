<template>
  <div class="margin">
    <v-row>
      <v-col>
        <section class="cattegory">
          <div class='container'>

            <v-breadcrumbs
              :second="{ name: 'Каталог натяжных потолков', to: '/ceilings_catalog', active: true }"
              :third="{ name: breadcrumbThird.title, to: '/ceilings_catalog/' + breadcrumbThird.path, active: true }"
              :forth="{ name: breadcrumbForth.title, to: '/ceilings_catalog/' + breadcrumbThird.path + '/' + breadcrumbForth.path, active: true }"
              :fifth="{ name: ceiling.title, to: false, active: false }"
            ></v-breadcrumbs>

            <h1 class="cattegory__title my-title">{{ ceiling.title }}</h1>
            <div class="cattegory__row">
              <div class="article__info">
                <div class="article__photo">
                  <PhotoGallery :width="width" :items="items" :addons="{ enableLargeView: true }"></PhotoGallery>
                </div>
                <div class="article__info-text">
                  <span v-html="ceiling.description"></span>
                </div>

              </div>
            </div>

          </div>
        </section>
      </v-col>
    </v-row>


    <projects :ourObjects="ourObjects" :width="width" :title="'Наши работы'" v-if="ourObjects.length >= 1"></projects>

    <v-read-also :articles="articles"></v-read-also>

  </div>
</template>
<script>
import PhotoGallery from '@/components/partials/PhotoGallery'
import vBreadcrumbs from '@/components/frontend/partials/vBreadcrumbs'
import Projects from '@/components/frontend/Projects'
import vReadAlso from '@/components/frontend/partials/vReadAlso'
import {mapActions, mapGetters} from 'vuex'

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
    const asyncCatalog = await $axios.$get('frontend/getCeilings/' + params.slug)
    return {asyncCatalog}
  },


  data: () => {
    return {
      width: 1920,
      ceiling: {},
      title: '',
      description: '',
      items: [{}],
      ourObjects: [],
      articles: [],
      breadcrumbThird: {},
      breadcrumbForth: {},
      startImage: 0
    }
  },

  computed: {
    ...mapGetters({
      CEILINGS_CATALOG: 'frontend/ceiling_catalog',
      PATH: 'frontend/PATH'
    }),
  },

  methods: {
    createBreadcrumbs() {
      let splitedPath = this.$route.path.split('/')
      this.breadcrumbThird = {
        path: splitedPath[2],
        title: this.CEILINGS_CATALOG.filter(item => item.slug == splitedPath[2])[0].title,
      }
      this.CEILINGS_CATALOG.forEach(item => {
        if (item.slug == splitedPath[2]) {
          this.breadcrumbForth = {
            path: splitedPath[3],
            title: item.children.filter(child => child.slug == splitedPath[3])[0].title
          }
        }
      })
    },
    itemsInit() {
      this.ceiling.images.forEach((item, index) => {
        if (item.main) this.startImage = index
      })
      this.items = this.ceiling.images.map(item => {
        return {
          src: this.PATH + item.path,
          thumbnail: this.PATH + item.thumb,
        }
      })
    },
    async fetchEntity() {
      this.ceiling = await this.$axios.$get('frontend/getCeilings/' + this.$route.params.slug)
      this.ourObjects = await this.$axios.$get('frontend/ourObjectsForCeiling/' + this.$route.params.slug)
      this.articles = await this.$axios.$get('frontend/articlesForCeiling/' + this.$route.params.slug)
    },
    ...mapActions({
      FETCH_CEILINGS_CATALOG: 'frontend/fetchCeilingCatalog',
    }),
  },
  async mounted() {
    await this.FETCH_CEILINGS_CATALOG
    await this.fetchEntity()
    await this.itemsInit()
    await this.createBreadcrumbs()
  },
  components: {
    Projects, PhotoGallery, vReadAlso, vBreadcrumbs
  }
}
</script>

<style scoped>

.article__photo {
  margin: 0px 40px 15px 0px;
  float: left;
  max-width: 600px;
}

.margin {
  margin: 150px 0 0 0;
}

.container {
  max-width: 1370px;
  margin: 0 auto;
  width: 100%;
}

.cattegory__row {
  margin: 50px 0;
}
</style>
