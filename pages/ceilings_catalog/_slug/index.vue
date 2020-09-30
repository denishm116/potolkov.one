<template>
  <section class="catalog">
    <div class='container'>
      <nav class="breadcrumbs">
        <ul class="breadcrumbs__list">
          <li>
            <a href="" class="breadcrumbs__link">Главная</a>
          </li>
          <li>
            <span>Хлебные крошки</span>
          </li>
        </ul>
      </nav>
      <h2 class="catalog__title title">Каталог натяжных потолков (Сын)</h2>
      <p class="catalog__text">
        На сегодняшний день существует огромнейший выбор натяжных потолков на любой вкус и кошелек, и мы, компания
        "Господин Потолков", можем предложить Вам любое решение из существующих. Это и классические
        белые, матовые, глянцевые и сатиновые потолки, цветные потолки, которые также могут быть разных фактур. Это и
        многоуровневые потолки с подсветкой и без, и современные парящие потолки, и резные потолки Apply, и
        технологичные потолки DoubleVision, изображение на которых меняется в зависимости от
        освещения.
      </p>
      <div class="catalog__row">
        <div class="catalog__column" v-for="(catalog, index) in children">
          <div class="catalog__item">

            <nuxt-link :to="$route.params.slug + '/' + catalog.ceiling.slug" class="catalog__item-photo ibg">
              <img :src="path " alt=""/>
            </nuxt-link>

            <a href="#" class="catalog__item-title">{{catalog.title}}</a>
          </div>
          <nuxt-child></nuxt-child>
        </div>


      </div>

    </div>
  </section>
</template>

<script>

  export default {
    data: () => {
      return {
        children: [],
      }

    },
    computed: {

      path() {
        return process.env.baseURL + 'storage/'
      }
    },
    methods: {
      async fetchCeiling() {
        const response = await this.$axios.$get('frontend/getChildren/' + this.$route.params.slug)

        this.children = response[0].children
      },
      test() {

      }
    },
    mounted() {
      this.fetchCeiling()
      this.test()
    },

  }
</script>

<style scoped>
  .container {
    max-width: 1370px;
    margin: 0 auto;
    width: 100%;
  }
</style>
