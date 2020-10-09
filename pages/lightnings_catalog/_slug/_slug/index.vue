<template>
  <section class="catalog">
    <div class='container'>
      <nav class="breadcrumbs">
        <ul class="breadcrumbs__list">
          <li>
            <a href="" class="breadcrumbs__link">Главная</a>
          </li>
          <li>
            <span>Хлебные крошки1</span>
          </li>
        </ul>
      </nav>
      <h2 class="catalog__title title">{{children.title}}</h2>
      <p class="catalog__text">

        {{children.description}}
        {{children}}
      </p>
      <div class="catalog__row">
        <div class="catalog__column" v-for="(ceiling, index) in children.lightnings">

          <div class="catalog__item">
            {{ceiling}}
            <nuxt-link :to="$route.params.slug + '/' + ceiling.slug" class="catalog__item-photo ibg">
              <img :src="path " alt=""/>
            </nuxt-link>

            <a href="#" class="catalog__item-title">{{ceiling.title}}</a>
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
        title: '',
        description: ''
      }
    },

    computed: {
      path() {
        return process.env.baseURL + 'storage/'
      }
    },

    methods: {
      async fetchCeiling() {
        const children = await this.$axios.$get('frontend/getLightningChildren/' + this.$route.params.slug)
        this.children = children
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
