<template>
  <section class="catalog">
    <div class='container'>

      <v-breadcrumbs
        :second="{name: 'Каталог освещения', to: false, active: false}"
      ></v-breadcrumbs>

      <h2 class="catalog__title my-title">Освещение для натяжных потолков</h2>
      <div class=" my-5">

      <p class="catalog__text my-5">
        Есть масса способов украсить натяжной потолок. Один из них - это освещение. Еще несколько лет
        назад под освещением воспринималась только люстра, сегодня же, помимо люстры, потолок, и комнату в целом, могут
        украшать: точечные светодиодные светильники (споты),
        светодиодная подсветка по периметру потолка, и новинка последних сезонов - <a href="https://potolkov.shop/ceilings_catalog/s-podsvetkoi/svetovye-linii-na-natyaznom-potolke"> световые линии </a>.
      </p>
      </div>
      <div class="catalog__row  my-10">
        <div class="catalog__column" v-for="(catalog, index) in lightning_catalog">
          <div class="catalog__item">
            <nuxt-link :to="'/lightnings_catalog/' + catalog.slug" class="catalog__item-photo ibg">
              <img v-if="catalog.images.length" :src="path + catalog.images[0].path" alt=""/>
            </nuxt-link>
            <nuxt-link :to="'/lightnings_catalog/' + catalog.slug" class="catalog__item-title">{{ catalog.title }}</nuxt-link>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>

import {mapGetters} from 'vuex'
import vBreadcrumbs from '@/components/frontend/partials/vBreadcrumbs'

export default {

  head() {
    return {
      title: 'Светильники для натяжных потолков  - Господин Потолков',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Каталог натяжных потолков - Компания Господин Потолков предлагает натяжные потолки в Краснодаре от 189 р. с установкой!'
        },
        {
          'property':  'og:type',
          'content':  'website',
        },
        {
          'property':  'og:url',
          'content':  `https://potolkov.shop${this.$route.path}`,
        },
        {
          'property':  'og:title',
          'content':  'Натяжные потолки в Краснодаре от 189 р. - Господин Потолков',
        },
        {
          'property':  'og:description',
          'content': 'Компания Господин Потолков предлагает натяжные потолки в Краснодаре от 189 р. с установкой! 10 лет гарантии. Бесплатный замер.',
        },
        {
          'property':  'og:site_name',
          'content': 'potolkov.shop',
        },
        {
          'property':  'og:locale',
          'content': 'ru_RU',
        },
        {
          'property':  'og:image',
          'content': 'https://potolkov.shop/site-screen.jpg'
        },
        {
          'property':  'og:image:alt',
          'content': 'Натяжные потолки в Краснодаре от 189 р. - Господин Потолков'
        },
        {
          'name':  'twitter:card',
          'content': 'summary_large_image'
        },
        {
          'name':  'twitter:title',
          'content': 'Натяжные потолки в Краснодаре от 189 р. - Господин Потолков'
        },
        {
          'name':  'twitter:description',
          'content': 'Компания Господин Потолков предлагает натяжные потолки в Краснодаре от 189 р. с установкой! 10 лет гарантии. Бесплатный замер.'
        },
        {
          'name':  'twitter:image:src',
          'content': 'https://potolkov.shop/site-screen.jpg'
        },

      ]
    }
  },

  computed: {
    ...mapGetters({
      lightning_catalog: 'frontend/lightning_catalog'
    }),
    path() {
      return process.env.baseURL + 'storage/'
    }
  },

  components: {
    vBreadcrumbs
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
