<template>
  <section class="catalog">
    <div class='container'>
      <nav class="breadcrumbs">
        <ul class="breadcrumbs__list">
          <li>
            <a href="" class="breadcrumbs__link">Главная</a>
          </li>
          <li>
            <span>Каталог натяжных потолков</span>
          </li>
        </ul>
      </nav>
      <h2 class="catalog__title title">Каталог натяжных потолков</h2>
      <p class="catalog__text">
        На сегодняшний день существует огромнейший выбор натяжных потолков на любой вкус и кошелек, и мы, компания
        "Господин Потолков", можем предложить Вам любое решение из существующих. Это и классические
        белые, матовые, глянцевые и сатиновые потолки, цветные потолки, которые также могут быть разных фактур. Это и
        многоуровневые потолки с подсветкой и без, и современные парящие потолки, и резные потолки Apply, и
        технологичные потолки DoubleVision, изображение на которых меняется в зависимости от освещения.
      </p>
      <div class="catalog__row">
        <div class="catalog__column" v-for="(catalog, index) in ceiling_catalog">
          <div class="catalog__item">


            <nuxt-link :to="'/ceilings_catalog/' + catalog.slug" class="catalog__item-photo ibg">
              <img v-if="catalog.images.length" :src="PATH + catalog.mainImage" alt=""/>
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
import {mapGetters, mapActions} from 'vuex'

export default {
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
