<template>
  <section class="catalog">
    <div class='container'>

      <v-breadcrumbs
        :second="{name: 'Каталог комплектующих', to: false, active: false}"
      ></v-breadcrumbs>

      <h1 class="catalog__title my-title">Комплектующие для натяжных потолков</h1>
      <p class="catalog__text">
        Существует несколько неотъемлеемых от натяжных потолков вещей, таких как потолочные карнизы, плинтуса, потолчная
        вставки, потолочный профиль или багет, кольца, закладные, соединители, разделители и многоее другое. В этом
        разделе мы представим комплектующие, необходимые всем. Это потолочные карнизы, скрытые, классические, потолчную
        вставку и т. д.
      </p>
      <div class="catalog__row my-10">
        <div class="catalog__column" v-for="(catalog, index) in component_catalog">
          <div class="catalog__item">


            <nuxt-link :to="'/components_catalog/' + catalog.slug" class="catalog__item-photo ibg">
              <img v-if="catalog.images.length" :src="path + catalog.images[0].path" alt=""/>
            </nuxt-link>

            <nuxt-link :to="'/components_catalog/' + catalog.slug" class="catalog__item-title">{{
                catalog.title
              }}
            </nuxt-link>
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
  head() {
    return {
      title: 'Комплектующие для натяжных потолков - Господин Потолков',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Комплектующие для натяжных потолков - Компания Господин Потолков предлагает натяжные потолки в Краснодаре от 260 р. с установкой!'
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
          'content': 'Натяжные потолки в Краснодаре от 260 р. - Господин Потолков',
        },
        {
          'property': 'og:description',
          'content': 'Компания Господин Потолков предлагает натяжные потолки в Краснодаре от 260 р. с установкой! 10 лет гарантии. Бесплатный замер.',
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
          'content': 'Натяжные потолки в Краснодаре от 260 р. - Господин Потолков'
        },
        {
          'name': 'twitter:card',
          'content': 'summary_large_image'
        },
        {
          'name': 'twitter:title',
          'content': 'Натяжные потолки в Краснодаре от 260 р. - Господин Потолков'
        },
        {
          'name': 'twitter:description',
          'content': 'Компания Господин Потолков предлагает натяжные потолки в Краснодаре от 260 р. с установкой! 10 лет гарантии. Бесплатный замер.'
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
      component_catalog: 'frontend/component_catalog'
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
