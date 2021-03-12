<template>
  <div>
    <h1>Калькулятор стоимости натяжных потолков</h1>
    <div class="container">
      <v-breadcrumbs class="mt"
        :second="{name: 'Калькулятор стоимости натяжных потолков', to: false, active: false}"
      ></v-breadcrumbs>
      <Calculator></Calculator>
    </div>

  </div>

</template>

<script>
import Calculator from "@/components/frontend/Calculator"
import vBreadcrumbs from '@/components/frontend/partials/vBreadcrumbs'

export default {
  head() {
    return {
      title: `Калькулятор натяжных потолков - Господин Потолков`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Калькулятор стоимости натяжных потолков - Компания Господин Потолков предлагает натяжные потолки в Краснодаре от189р. с установкой!'
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
    Calculator, vBreadcrumbs
  }

}
</script>

<style scoped>

.container {
  max-width: 1370px;
  margin: 0 auto;
  width: 100%;
}

.mt {
  margin: 150px 0 -100px 0;
}
</style>
