<template>
  <section class="catalog">
    <div class='container'>
      <v-breadcrumbs
        :second="{name: 'Дополнительно о потолках', to: false, active: false}"

      ></v-breadcrumbs>
      <h1 class="catalog__title my-title">Дополнительно о потолках</h1>
      <p class="catalog__text">
        В этом разделе вы мы собрали всю оставшуюся информацию о натяжных потоолках и нашем сайте. Здесь вы можете
        оставить свой отзыв, задать вопрос, ознакомиться со списком часто задаваемых вопросов, почитать статьи о
        потолках. Возможно в статьях Вы найдете ответы на неочевидные вопросы (например, какго цвета выбрать потолок),
        или почерпнете вдохновение для создание уникального дизайна.
      </p>
      <div class="catalog__row">
        <div class="catalog__column" v-for="otherItem in other">
          <div class="catalog__item">


            <a :href="'/other/' + otherItem.slug" class="catalog__item-photo ibg">
              <img :src="otherItem.src" alt="" class="shadow">
            </a>

            <a :href="'/other/' + otherItem.slug" class="catalog__item-title">{{otherItem.title}}</a>
          </div>
          <nuxt-child></nuxt-child>
        </div>


      </div>

    </div>
  </section>
</template>

<script>
  import {mapGetters} from 'vuex'
  import vBreadcrumbs from '@/components/frontend/partials/vBreadcrumbs'

  export default {

    components: {
      vBreadcrumbs
    },

    head() {
      return {
        title: `Дополнительно о натяжных потолках - Господин Потолков`,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Дополнительно о натяжных потолках - Компания Господин Потолков предлагает натяжные потолки в Краснодаре от 189 р. с установкой!'
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

    computed: {
      ...mapGetters({
        other: 'frontend/other',
      }),
    }
  }
</script>

<style scoped>
  .container {
    max-width: 1370px;
    margin: 0 auto;
    width: 100%;
  }
  .shadow {
    box-shadow:3px 3px 13px rgba(0, 0, 0, 0.26);
  }
</style>
