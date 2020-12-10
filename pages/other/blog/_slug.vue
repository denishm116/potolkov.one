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
            <span class="art" v-html="ARTICLE.description"></span>

            <div v-for="subArticle in ARTICLE.sub_articles">
              <div class="article__info-text">
                <span v-html="subArticle.description"></span>

              </div>
              <div class="image_wrapper">
                <div class="image_container">
                  <div class="image_item" v-for="image in subArticle.images">
                    <div class="image_item_container">
                      <img :src="PATH + image.path">
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>


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
              {{ new Date(article.created_at).getDate() }}.{{
                new Date(article.created_at).getMonth() + 1
              }}.{{ new Date(article.created_at).getFullYear() }} г.
            </div>
            <a href="" class="blog__item-title">
              {{ article.title }}
            </a>
            <div class="blog__item-text">
              {{ article.meta_description }}
            </div>
          </div>
        </div>

      </div>
    </div>
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
    return {asyncCatalog}
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

h2 {
  font-size: 46px;
  font-weight: bold;
  margin-top: 15px;
  display: block;
}

h3 {
  font-size: 36px;
  margin-top: 45px;
  display: block;
}

.image_item_container {
  max-width: 1270px;
}

.image_wrapper {
  margin: 25px 0;
}

.image_container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background: rgba(237, 237, 237, 0.98);

}

.image_item {
  max-width: 47%;

  margin: 20px 0;
  align-self: center;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.4);
}

@media (max-width: 768px) {
  .image_item {
    max-width: none;
    padding: 5px;
    margin: 5px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.4);
  }
}

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
