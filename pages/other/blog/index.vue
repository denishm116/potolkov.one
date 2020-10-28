<template>
  <section class="blog sect-mt">
    <div class='container'>
      <nav class="breadcrumbs">
        <ul class="breadcrumbs__list">
          <li>
            <a href="" class="breadcrumbs__link">Главная</a>
          </li>
          <li>
            <span>Статьи о натяжных потолках</span>
          </li>
        </ul>
      </nav>
      <h2 class="blog__title title">
        Статьи о потолках
      </h2>
      <div class="blog__row">
        <div class="blog__column" v-for="article in ARTICLES">
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
        <a href="" class="pagging__arrow">В начало</a>
        <ul class="pagging-list">
          <li><a href="" class="pagging__link active">1</a></li>
          <li><a href="" class="pagging__link">2</a></li>
          <li><a href="" class="pagging__link">3</a></li>
          <li><a href="" class="pagging__link">4</a></li>
          <li><a href="" class="pagging__link">...</a></li>
          <li><a href="" class="pagging__link">10</a></li>
        </ul>
        <a href="" class="pagging__arrow">В конец</a>
      </div>
    </div>
  </section>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  computed: {
    ...mapGetters({
      ARTICLES: 'frontend/ARTICLES',
      PATH: 'frontend/PATH'
    })
  },
  methods: {
    ...mapActions({
      FETCH_ARTICLES: 'frontend/FETCH_ARTICLES'
    })
  },
  mounted() {
    this.FETCH_ARTICLES()
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
