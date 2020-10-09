<template>
  <section class="blog sect-mt">
    <div class='container'>
      <nav class="breadcrumbs">
        <ul class="breadcrumbs__list">
          <li>
            <a href="" class="breadcrumbs__link">Главная</a>
          </li>
          <li>
            <span>Хлебные крошки</span>
          </li>
        </ul>
      </nav>
      <h2 class="blog__title title">
        Статьи о потолках
      </h2>
      <div class="blog__row">
        <div class="blog__column">
          <div class="blog__item">
            <a href="" class="blog__item-photo ibg">
              <img :src="require('assets/img/blog/01.jpg')" alt="">
            </a>
            <div class="blog__item-date">
              04 Май 2020
            </div>
            <a href="/blog/nazvanie_stati" class="blog__item-title">
              Ссылка на статью (slug)
            </a>
            <div class="blog__item-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo
              iduntlabore et dolore magna aliqua.
            </div>
          </div>
        </div>
        <div class="blog__column">
          <div class="blog__item">
            <a href="" class="blog__item-photo ibg">
              <img :src="require('assets/img/blog/02.jpg')" alt="">
            </a>
            <div class="blog__item-date">
              04 Май 2020
            </div>
            <a href="" class="blog__item-title">
              Название статьи
            </a>
            <div class="blog__item-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo
              iduntlabore et dolore magna aliqua.
            </div>
          </div>
        </div>
        <div class="blog__column">
          <div class="blog__item">
            <a href="" class="blog__item-photo ibg">
              <img :src="require('assets/img/blog/03.jpg')" alt="">
            </a>
            <div class="blog__item-date">
              04 Май 2020
            </div>
            <a href="" class="blog__item-title">
              Название статьи
            </a>
            <div class="blog__item-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo
              iduntlabore et dolore magna aliqua.
            </div>
          </div>
        </div>
        <div class="blog__column">
          <div class="blog__item">
            <a href="" class="blog__item-photo ibg">
              <img :src="require('assets/img/blog/04.jpg')" alt="">
            </a>
            <div class="blog__item-date">
              04 Май 2020
            </div>
            <a href="" class="blog__item-title">
              Название статьи
            </a>
            <div class="blog__item-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo
              iduntlabore et dolore magna aliqua.
            </div>
          </div>
        </div>
        <div class="blog__column">
          <div class="blog__item">
            <a href="" class="blog__item-photo ibg">
              <img :src="require('assets/img/blog/04.jpg')" alt="">
            </a>
            <div class="blog__item-date">
              04 Май 2020
            </div>
            <a href="" class="blog__item-title">
              Название статьи
            </a>
            <div class="blog__item-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo
              iduntlabore et dolore magna aliqua.
            </div>
          </div>
        </div>
        <div class="blog__column">
          <div class="blog__item">
            <a href="" class="blog__item-photo ibg">
              <img :src="require('assets/img/blog/01.jpg')" alt="">
            </a>
            <div class="blog__item-date">
              04 Май 2020
            </div>
            <a href="" class="blog__item-title">
              Название статьи
            </a>
            <div class="blog__item-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo
              iduntlabore et dolore magna aliqua.
            </div>
          </div>
        </div>
        <div class="blog__column">
          <div class="blog__item">
            <a href="" class="blog__item-photo ibg">
              <img :src="require('assets/img/blog/02.jpg')" alt="">
            </a>
            <div class="blog__item-date">
              04 Май 2020
            </div>
            <a href="" class="blog__item-title">
              Название статьи
            </a>
            <div class="blog__item-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo
              iduntlabore et dolore magna aliqua.
            </div>
          </div>
        </div>
        <div class="blog__column">
          <div class="blog__item">
            <a href="" class="blog__item-photo ibg">
              <img :src="require('assets/img/blog/03.jpg')" alt="">
            </a>
            <div class="blog__item-date">
              04 Май 2020
            </div>
            <a href="" class="blog__item-title">
              Название статьи
            </a>
            <div class="blog__item-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo
              iduntlabore et dolore magna aliqua.
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
  export default {}
</script>

<style scoped>
  .container {
    max-width: 1370px;
    margin: 0 auto;
    width: 100%;
  }
</style>
