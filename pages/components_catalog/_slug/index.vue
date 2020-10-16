<template>
  <section class="catalog">
    <div class='container'>
      <nav class="breadcrumbs">
        <ul class="breadcrumbs__list">
          <li>
            <a href="" class="breadcrumbs__link">Главная</a>
          </li>
          <li>
            <span>Хлебные крошки2</span>
          </li>
        </ul>
      </nav>
      <h2 class="catalog__title title">{{children.title}}</h2>
      <p class="catalog__text">
        {{children.description}}
      </p>
      <div class="catalog__row">
        <div class="catalog__column" v-for="(catalog, index) in children.children">

          <div class="catalog__item">
<!--{{catalog}}11-->
            <nuxt-link :to="$route.params.slug + '/' + catalog.slug" class="catalog__item-photo ibg">
              <img :src="path " alt=""/>
            </nuxt-link>

            <a href="#" class="catalog__item-title">{{catalog.title}}</a>
          </div>
<!--          <nuxt-child></nuxt-child>-->
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
        const response = await this.$axios.$get('frontend/getComponentChildren/' + this.$route.params.slug)
        this.children = response

      },

    },
    mounted() {
      this.fetchCeiling()
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
