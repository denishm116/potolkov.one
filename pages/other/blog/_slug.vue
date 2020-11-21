<template>
  <div class="flex">
    <section class="article sect-mt">
      <div class='container'>
        <nav class="breadcrumbs">
          <ul class="breadcrumbs__list">
            <li>
              <a href="/" class="breadcrumbs__link">Главная</a>
            </li>
            <li>
              <a href="/other/blog/" class="breadcrumbs__link">Статьи о натяжных потолках</a>
            </li>
            <li>
              <span>{{ ARTICLE.title }}</span>
            </li>
          </ul>
        </nav>
        <h1 class="article__title my-title">
          {{ ARTICLE.title }}
        </h1>
        <div class="article__info">
          <div class="article__photo">
            <img :src="PATH + ARTICLE.mainImage" :alt="ARTICLE.title">
          </div>
          <div class="article__info-text">
            <span v-html="ARTICLE.description"></span>


          </div>

        </div>
      </div>
    </section>

    <section class='container'>
      <horizontal-list :items="items" :options="options">
        <template v-slot:default="{item}">
          <div>
            <div class="aspect r-10-12 border-3 overflow-hidden">
              <div class="relative wh-100 lh-0">
                <img :src="item.image"/>


                <div class="bg-overlay absolute-0 wh-100 p-24 flex-end">
                  <span class="m-0 text-ellipsis-2l text-center white font-weight-bold blog__item-title">{{ item.title }}</span>
                </div>
              </div>
            </div>
            <br>

            <p class="mt-4 text-ellipsis-2l">{{ item.content }}</p>
          </div>
        </template>
      </horizontal-list>
    </section>

    <section class="blog">
      <div class='container'>
        <h2 class="blog__title read">
          Читайте так же
        </h2>
        <div class="blog__row row-read">
          <div class="blog__column" v-for="article in ARTICLES">
            <div class="blog__item">
              <a href="" class="blog__item-photo ibg">
                <img :src="PATH + article.mainImage" :alt="article.title">
              </a>
              <div class="blog__item-date">
                {{new Date(article.created_at).getDate() }}.{{new Date(article.created_at).getMonth() + 1 }}.{{new Date(article.created_at).getFullYear() }} г.
              </div>
              <a href="" class="blog__item-title">
                {{ article.title }}
              </a>
              <div class="blog__item-text">
                {{ article.meta_description}}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'


import HorizontalList from "@/components/partials/HorizontalList"

export default {

  head() {
    return {
      title: `${this.asyncCatalog.title} - Господин Потолков`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.asyncCatalog.title + ' - Компания Господин Потолков предлагает натяжные потолки в Краснодаре от 260 р. с установкой!'
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
  async asyncData({params, $axios}) {
    const asyncCatalog = await $axios.$get('frontend/article/' + params.slug)
    return { asyncCatalog }
  },

  components: {
    HorizontalList
  },
  data() {
    return {
      options: {
        responsive: [
          {end: 576, size: 1},
          {start: 576, end: 768, size: 2},
          {start: 768, end: 992, size: 3},
          {size: 4}
        ],
        list: {
          // 1200 because @media (min-width: 1200px) and therefore I want to switch to windowed mode
          windowed: 1200,

          // Because: #app {padding: 80px 24px;}
          padding: 24
        },
        navigation: {
          // when to show navigation
          start: 992,
          color: '#ffffff'
        }
      },
      items: [],
    }
  },
  computed: {
    ...mapGetters({
      ARTICLES: 'frontend/ARTICLES',
      ARTICLE: 'frontend/ARTICLE',
      PATH: 'frontend/PATH'
    }),

  },
  methods: {
    ...mapActions({
      FETCH_ARTICLE: 'frontend/FETCH_ARTICLE',
      FETCH_ARTICLES: 'frontend/FETCH_ARTICLES'
    }),
    itemsInit() {
     this.items = this.ARTICLE.images.map(item => {
          return {
            title: item.title,
            content: item.description,
            image: this.PATH + item.path,
          }
        })
    },
  },
  async mounted() {
    await this.FETCH_ARTICLE(this.$route.params.slug)
    await this.FETCH_ARTICLES()
    await this.itemsInit()
  }
}
</script>

<style scoped>
.flex {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.container {
  max-width: 1370px;
  margin: 0 auto;
  width: 100%;
}

.vhl-btn-left, .vhl-btn-right {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  background: red;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  z-index: 2;
}


section.sect-mt {
  margin-top: 150px;
}

section > div {
  margin-top: 24px;
  margin-bottom: 24px;
}

.Banner {
  background-image: url("https://picsum.photos/id/1011/2000/500");
}

.background-image {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.ImageBoxed {
  flex: 0 0 25%;
  max-width: 25%;
}
</style>
