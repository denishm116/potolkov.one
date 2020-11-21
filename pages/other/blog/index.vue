<template>
  <section class="blog sect-mt">
    <div class='container'>
      <nav class="breadcrumbs">
        <ul class="breadcrumbs__list">
          <li>
            <a href="/" class="breadcrumbs__link">Главная</a>
          </li>
          <li>
            <span>Статьи о натяжных потолках</span>
          </li>
        </ul>
      </nav>
      <h1 class="blog__title my-title">
        Статьи о потолках
      </h1>
      <div class="blog__row">
        <div class="blog__column" v-for="article in objects">
          <div class="blog__item">
            <a :href="'blog/' + article.id" class="blog__item-photo ibg">
              <img :src="PATH + article.mainImage" :alt="article.images[0].title">

            </a>
            <div class="blog__item-date">
              04 Май 2020
            </div>
            <a :href="'blog/' + article.id" class="blog__item-title">
              {{ article.title }}
            </a>
            <div class="blog__item-text">
              {{ article.meta_description }}
            </div>
          </div>
        </div>

      </div>
      <div class="pagging">
        <paginator
          v-model="page"
          :page-count="pageCount"
          :margin-pages="2"
          :page-range="3"
          :click-handler="paginatedObjects"

          :container-class="'pagging-list'"
          :page-class="'page-item'"
          :active-link-class="'active'"
          :page-link-class="'pagging__link'"
          :prev-class="'prev-next'"
          :prev-link-class="'prev-next-link'"
          :next-class="'prev-next'"
          :next-link-class="'prev-next-link'"
          :break-view-class="''"
          :break-view-link-class="''"
          :first-last-button="false"
          :hide-prev-next="true"
        ></paginator>
      </div>
    </div>
  </section>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import Paginator from '@/components/frontend/partials/Paginator'
export default {

  head() {
    return {
      title: `Статьи о натяжных потолках - Господин Потолков`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Статьи о натяжных потолках и околопотолочной тематике'
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

  data() {
    return {
      page: 1,
      objects: [],
      objectsPerPage: 12
    }
  },
  computed: {
    pageCount() {
      return Math.ceil(this.ARTICLES.length / this.objectsPerPage)
    },
    ...mapGetters({
      ARTICLES: 'frontend/ARTICLES',
      PATH: 'frontend/PATH'
    })
  },
  methods: {
    paginatedObjects(currentPage) {
      let from = (currentPage - 1) * this.objectsPerPage
      let to = from + this.objectsPerPage
      this.objects = this.ARTICLES.slice(from, to)
    },
    ...mapActions({
      FETCH_ARTICLES: 'frontend/FETCH_ARTICLES'
    })
  },
  async mounted() {
    await this.FETCH_ARTICLES()
    this.paginatedObjects(this.page)
  },
  components: {
    Paginator
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
