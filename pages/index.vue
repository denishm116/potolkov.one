<template>
  <div class="wrapper">
    <Main></Main>
    <Calculator></Calculator>
    <Order></Order>
    <!--    <Stocks></Stocks>-->
    <Projects :ourObjects="OUR_OBJECTS_FOR_LANDING" :width="1920" v-if="OUR_OBJECTS_FOR_LANDING.length > 0"
              :title="'Наши работы'"></Projects>
    <Flat></Flat>
    <Why></Why>
    <Moments></Moments>
    <Questions></Questions>
    <Reviews></Reviews>
    <Map></Map>
  </div>
</template>

<script>
import Main from "@/components/frontend/Main"
import Flat from "@/components/frontend/Flat"
import Calculator from "@/components/frontend/Calculator"
import Stocks from "@/components/frontend/Stocks"
import Order from "@/components/frontend/Order"
import Why from "@/components/frontend/Why"
import Questions from "@/components/frontend/Questions"
import Moments from "@/components/frontend/Moments"
import Reviews from "@/components/frontend/Reviews"
import Map from "@/components/frontend/Map"
import Communicate from "@/components/frontend/Communicate"
import Projects from "@/components/frontend/Projects"
import {mapActions, mapGetters} from "vuex";

export default {

  head() {
    return {
      title: 'Натяжные потолки в Краснодаре от 189 р. с установкой',
      meta: [
        {
          hid: 'yandex-verification',
          name: 'yandex-verification',
          content: '0e637a5f8bb61215'
        },
        {
          hid: 'description',
          name: 'description',
          content: 'Натяжные потолки в Краснодаре от 189 р. с установкой! 10 лет гарантии. Бесплатный замер. Господин Потолков.'
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

  components: {
    Main, Flat, Stocks, Order, Calculator, Why, Questions, Moments, Reviews, Map, Communicate, Projects
  },
  computed: {
    ...mapGetters({
      OUR_OBJECTS_FOR_LANDING: 'frontend/OUR_OBJECTS_FOR_LANDING'
    }),
  },
  methods: {
    ...mapActions({
      FETCH_OUR_OBJECTS_FOR_LANDING: 'frontend/FETCH_OUR_OBJECTS_FOR_LANDING'
    }),
  },
 mounted() {
    this.FETCH_OUR_OBJECTS_FOR_LANDING()
  },

}
</script>

<style scoped>

</style>
