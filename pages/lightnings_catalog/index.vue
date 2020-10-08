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
      <h2 class="catalog__title title">Каталог Освещения</h2>
      <p class="catalog__text">
        Есть масса способов украсить натяжной потолок. Один из них - это освещение. Еще несколько лет
        назад под освещением воспринималась только люстра, сегодня же, помимо люстры, потолок, и комнату в целом, могут украшать: точечные светодиодные светильники (споты),
        светодиодная подсветка по периметру потолка, и новинка последних сезонов - световые линии.
      </p>
      <div class="catalog__row">
        <div class="catalog__column" v-for="(catalog, index) in lightning_catalog">
          <div class="catalog__item">


            <nuxt-link :to="'/lightnings_catalog/' + catalog.slug" class="catalog__item-photo ibg">
              <img v-if="catalog.images.length" :src="path + catalog.images[0].path" alt=""/>
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
  import {mapGetters} from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        lightning_catalog: 'frontend/lightning_catalog'
      }),
      path() {
        return process.env.baseURL + 'storage/'
      }
    },
    methods: {},

    generate: {}
  }
</script>

<style scoped>
  .container {
    max-width: 1370px;
    margin: 0 auto;
    width: 100%;
  }
</style>
