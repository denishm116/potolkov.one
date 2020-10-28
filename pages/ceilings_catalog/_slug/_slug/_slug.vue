<template>
  <div class="margin">
    <v-row>
      <v-col>
        <section class="cattegory">
          <div class='container'>
            <nav class="breadcrumbs">
              <ul class="breadcrumbs__list">
                <li>
                  <a href="" class="breadcrumbs__link">Главная</a>
                </li>
                <li>
                  <a href="/ceilings_catalog" class="breadcrumbs__link">Каталог натяжных потолков</a>
                </li>
                <li>
                  <span>{{ ceiling.title }}</span>
                </li>
              </ul>
            </nav>
            <h2 class="cattegory__title title">{{ ceiling.title }}</h2>
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



    <projects :ourObjects="ourObjects" :width="1920" :title="'Наши работы'" v-if="ourObjects.length >= 1"></projects>

    <v-read-also :articles="articles"></v-read-also>

  </div>
</template>
<script>
import PhotoGallery from '@/components/partials/PhotoGallery'

import Projects from '@/components/frontend/Projects'
import vReadAlso from '@/components/frontend/partials/vReadAlso'

import {mapGetters} from 'vuex'

export default {
  data: () => {
    return {
      width: 1920,
      ceiling: {},
      title: '',
      description: '',
      items: [{}],
      ourObjects: [],
      articles: []
    }
  },
  computed: {
    ...mapGetters({
      PATH: 'frontend/PATH'
    }),
    obj() {
      return this.ourObjects
    }
  },
  methods: {
    itemsInit() {
      this.items = this.ceiling.images.map(item => {
        return {
          src: this.PATH + item.path,
          thumbnail: this.PATH + item.thumb,
        }
      })
    },
    async fetchEntity() {
      const ceiling = await this.$axios.$get('frontend/getCeilings/' + this.$route.params.slug)
      const ourObjects = await this.$axios.$get('frontend/ourObjectsForCeiling/' + this.$route.params.slug)
      const articles = await this.$axios.$get('frontend/articlesForCeiling/' + this.$route.params.slug)
      this.ceiling = ceiling
      this.ourObjects = ourObjects
      this.articles = articles
    },
  },
  async mounted() {
    await this.fetchEntity()
    await this.itemsInit()
  },
  components: {
    Projects, PhotoGallery, vReadAlso
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
