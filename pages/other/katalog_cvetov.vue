<template>
  <div>
    <section class="catalog catalog-color">
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
        <h2 class="catalog__title title">Каталог цветов и фактур</h2>
        <p class="catalog__text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, omnis architecto molestiae explicabo
          repudiandae neque odit repellat delectus animi officiis doloribus voluptas ipsum tempore porro
          cupiditate id repellendus aliquid quos!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, omnis architecto molestiae explicabo
          repudiandae neque odit repellat delectus animi officiis doloribus voluptas ipsum tempore porro
          cupiditate id repellendus aliquid quos!
        </p>
        <div class="catalog__row row-colors">
          <div class="catalog__column">
            <div class="catalog__item">
              <a href="#" class="catalog__item-photo ibg">
                <img :src="require('assets/img/Catalog/01.jpg')" alt=""/>
              </a>
              <a href="#" class="catalog__item-title">Фактура</a>
            </div>
          </div>
          <div class="catalog__column">
            <div class="catalog__item">
              <a href="#" class="catalog__item-photo ibg">
                <img :src="require('assets/img/Catalog/02.jpg')" alt=""/>
              </a>
              <a href="#" class="catalog__item-title">Цветной лак</a>
            </div>
          </div>
          <div class="catalog__column">
            <div class="catalog__item">
              <a href="#" class="catalog__item-photo ibg">
                <img :src="require('assets/img/Catalog/03.jpg')" alt=""/>
              </a>
              <a href="#" class="catalog__item-title">Цветные матовые</a>
            </div>
          </div>
          <div class="catalog__column">
            <div class="catalog__item">
              <a href="#" class="catalog__item-photo ibg">
                <img :src="require('assets/img/Catalog/04.jpg')" alt=""/>
              </a>
              <a href="#" class="catalog__item-title">Цветные сатин</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="colors">
      <div class='container'>
        <div class="colors__row">
          <div class="colors__photo">
            <img :src="require('assets/img/colors/photo.jpg')" alt=""/>
          </div>
          <div class="colors__text">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>

  .catalog {
    padding: 150px 0px 100px 0px;
  }

  .catalog-color {
    padding: 150px 0px 0px 0px;
  }

  .catalog__title {
    margin: 0px 0px 20px 0px;
  }

  .catalog__text {
    font-size: 18px;
    line-height: 30px;
    margin: 0px 0px 35px 0px;
  }

  .catalog__row {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    font-size: 0;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin: 0px -10px;
  }

  .catalog__column {
    padding: 0px 10px;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 20%;
    flex: 0 0 20%;
    margin: 0px 0px 25px 0px;
  }

  .catalog__item {
    width: 100%;
  }

  .catalog__item-photo {
    margin: 0px 0px 18px 0px;
    padding: 0px 0px 180px 0px;
    display: block;
    -webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
  }

  @media (min-width: 992px) {
    .catalog__item-photo:hover {
      -moz-transform: scale(1.05);
      -ms-transform: scale(1.05);
      -webkit-transform: scale(1.05);
      -o-transform: scale(1.05);
      transform: scale(1.05);
    }
  }

  .catalog__item-title {
    font-size: 18px;
    font-family: "Geometria-Bold";
    font-style: italic;
    text-transform: uppercase;
    display: block;
    color: #333;
    -webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
  }

  @media (min-width: 992px) {
    .catalog__item-title:hover {
      color: #ff0000;
    }
  }

  @media (max-width: 1382px) {
    .catalog__column {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 25%;
      flex: 0 0 25%;
    }
  }

  @media (max-width: 991.98px) {
    .catalog-color {
      padding: 150px 0px 0px 0px;
    }

    .catalog__column {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 33.33333%;
      flex: 0 0 33.33333%;
    }
  }

  @media (max-width: 767.98px) {
    .catalog-color {
      padding: 150px 0px 0px 0px;
    }

    .catalog__item-title {
      font-size: 16px;
    }
  }

  @media (max-width: 576px) {
    .catalog__column {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 50%;
      flex: 0 0 50%;
    }
  }

  @media (max-width: 440px) {
    .catalog__column {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
    }
  }

  .catalog .row-colors .catalog__column {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
  }

  .catalog .row-colors .catalog__item-photo {
    padding: 0px 0px 70% 0px;
  }

  @media (max-width: 991.98px) {
    .catalog .row-colors .catalog__column {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 33.3333%;
      flex: 0 0 33.3333%;
    }
  }

  @media (max-width: 576px) {
    .catalog .row-colors .catalog__column {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 50%;
      flex: 0 0 50%;
    }
  }

  @media (max-width: 400px) {
    .catalog .row-colors .catalog__column {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
    }
  }


  .colors {
    padding: 44px 0px 86px;
  }

  .colors__photo {
    float: left;
    max-width: 900px;
    margin: 0px 40px 20px 0px;
    float: left;
    -ms-flex-item-align: start;
    align-self: flex-start;
  }

  .colors__photo img {
    display: block;
    max-width: 100%;
  }

  .colors__text {
    -webkit-box-flex: 0;
    -ms-flex: 0 1 435px;
    flex: 0 1 435px;
  }

  .colors__text p {
    font-size: 18px;
    line-height: 30px;
    margin: 0px 0px 35px 0px;
  }

  @media (max-width: 1382px) {
    .colors__photo {
      max-width: 700px;
    }
  }

  @media (max-width: 991.98px) {
    .colors {
      padding: 40px 0px 50px;
    }

    .colors__photo {
      float: none;
      margin: 0px 0px 30px 0px;
    }

    .colors__text p {
      margin: 0px 0px 20px 0px;
    }
  }

  @media (max-width: 479.98px) {
    .colors {
      padding: 20px 0px 30px;
    }

    .colors__photo {
      float: none;
      margin: 0px 0px 20px 0px;
    }

    .colors__text p {
      font-size: 16px;
      line-height: 25px;
      margin: 0px 0px 20px 0px;
    }
  }
</style>
