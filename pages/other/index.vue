<template>
  <section class="catalog">
    <div class='container'>
      <nav class="breadcrumbs">
        <ul class="breadcrumbs__list">
          <li>
            <a href="" class="breadcrumbs__link">Главная</a>
          </li>
          <li>
            <span>Дополнительно о потолках</span>
          </li>
        </ul>
      </nav>
      <h2 class="catalog__title title">Дополнительно о потолках</h2>
      <p class="catalog__text">
        В этом разделе вы мы собрали всю оставшуюся информацию о натяжных потоолках и нашем сайте. Здесь вы можете
        оставить свой отзыв, задать вопрос, ознакомиться со списком часто задаваемых вопросов, почитать статьи о
        потолках. Возможно в статьях Вы найдете ответы на неочевидные вопросы (например, какго цвета выбрать потолок),
        или почерпнете вдохновение для создание уникального дизайна.
      </p>
      <div class="catalog__row">
        <div class="catalog__column" v-for="otherItem in other">
          <div class="catalog__item">


            <a :href=" otherItem.slug" class="catalog__item-photo ibg">
              <img :src="otherItem.img" alt=""/>
            </a>

            <a href="#" class="catalog__item-title">{{otherItem.title}}</a>
          </div>
          <nuxt-child></nuxt-child>
        </div>


      </div>

    </div>
  </section>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
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
</style>
