<template>
  <section class="blog">
    <div class="container">
      <h2 class="blog__title read">
        {{ articles.length ? 'Статьи по теме' : '' }}
      </h2>
      <div class="blog__row row-read">
        <div class="blog__column" v-for="article in articles">
          <div class="blog__item">
            <a :href="'/other/blog/' + article.id" class="blog__item-photo ibg">
              <img :src="PATH + article.mainImage" alt="">
            </a>
            <div class="blog__item-date">
              {{new Date(article.created_at).getDate() }}.{{new Date(article.created_at).getMonth() + 1 }}.{{new Date(article.created_at).getFullYear() }} г.
            </div>
            <a :href="'/other/blog/' + article.id" class="blog__item-title">
              {{ article.title }}
            </a>
            <div class="blog__item-text">
              {{ article.meta_description }}
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import {mapGetters} from 'vuex'
    export default {
        props: [
          'articles'
        ],
      computed: {
          ...mapGetters({
            PATH: 'frontend/PATH'
          })
      }

    };
</script>

<style scoped>
.blog {
  margin: 0px 0px 0px 0px;
}
.container {
  max-width: 1370px;
  margin: 0 auto;
  width: 100%;
}
</style>
