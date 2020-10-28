<template>
  <section class="catalog">
    <div class='container'>
      <nav class="breadcrumbs">
        <ul class="breadcrumbs__list">
          <li>
            <a href="/" class="breadcrumbs__link">Главная</a>
          </li>
          <li>
            <a href="/ceilings_catalog" class="breadcrumbs__link">Каталог натяжных потолков</a>
          </li>
          <li>
            <span>{{ children.title }}</span>
          </li>
        </ul>
      </nav>
      <h2 class="catalog__title title">{{ children.title }}</h2>
      <p class="catalog__text">
        <span v-html="children.description"></span>
      </p>
      <div class="catalog__row">
        <div class="catalog__column" v-for="(catalog, index) in children.children">

          <div class="catalog__item">

            <nuxt-link :to="$route.params.slug + '/' + catalog.slug" class="catalog__item-photo ibg">
              <img :src="PATH + catalog.mainImage" alt=""/>
            </nuxt-link>

            <a href="#" class="catalog__item-title">{{ catalog.title }}</a>
          </div>

        </div>


      </div>

    </div>

    <projects :ourObjects="ourObjects" :width="1920" :title="'Наши работы'" v-if="ourObjects.length >= 1"></projects>

    <v-read-also :articles="articles"></v-read-also>

  </section>
</template>

<script>
import Projects from '@/components/frontend/Projects'
import vReadAlso from '@/components/frontend/partials/vReadAlso'
import {mapGetters} from "vuex";


export default {
  data() {
    return {
      children: [],
      ourObjects: [],
      articles: [],
    }
  },
  computed: {
    ...mapGetters({
      PATH: 'frontend/PATH'
    }),
  },
  methods: {
    async fetchEntity() {
      this.children = await this.$axios.$get('frontend/getChildren/' + this.$route.params.slug)
      this.ourObjects = await this.$axios.$get('frontend/ourObjectsForCatalog/' + this.$route.params.slug)
      this.articles = await this.$axios.$get('frontend/articlesForCatalog/' + this.$route.params.slug)
    },

  },
  async mounted() {
    await this.fetchEntity()
  },
  components: {
    Projects, vReadAlso
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
