<template>
  <div class="wrapper">
    <Main></Main>
    <Flat></Flat>


    <Calculator></Calculator>
    <!--    <Stocks></Stocks>-->
    <Order></Order>

    <Why></Why>
    <Projects :ourObjects="OUR_OBJECTS" :width="1920" v-if="OUR_OBJECTS.length > 0"
              :title="'Выполненные проекты'"></Projects>
    <Questions></Questions>
    <Moments></Moments>
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
      title: 'Натяжные потолки в Краснодаре от 260 р. - Господин Потолков',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Компания Господин Потолков предлагает натяжные потолки в Краснодаре от 260 р. с установкой! 10 лет гарантии. Бесплатный замер.'
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
          'content':  'Натяжные потолки в Краснодаре от 260 р. - Господин Потолков',
        },
        {
          'property':  'og:description',
          'content': 'Компания Господин Потолков предлагает натяжные потолки в Краснодаре от 260 р. с установкой! 10 лет гарантии. Бесплатный замер.',
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
          'content': 'Натяжные потолки в Краснодаре от 260 р. - Господин Потолков'
        },
        {
          'name':  'twitter:card',
          'content': 'summary_large_image'
        },
        {
          'name':  'twitter:title',
          'content': 'Натяжные потолки в Краснодаре от 260 р. - Господин Потолков'
        },
        {
          'name':  'twitter:description',
          'content': 'Компания Господин Потолков предлагает натяжные потолки в Краснодаре от 260 р. с установкой! 10 лет гарантии. Бесплатный замер.'
        },
        {
          'name':  'twitter:image:src',
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
      OUR_OBJECTS: 'frontend/OUR_OBJECTS'
    }),
  },
  methods: {
    ...mapActions({
      FETCH_OUR_OBJECTS: 'frontend/FETCH_OUR_OBJECTS'
    }),
  },
  mounted() {
    this.FETCH_OUR_OBJECTS()
  },

}
</script>

<style scoped>

</style>
