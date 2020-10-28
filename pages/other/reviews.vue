<template>
  <div>
    <section class="testi sect-mt">
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
          Отзывы
        </h2>
        <div class="testi__block">
          <div class="testi-card">
            <div class="testi-card__item">
              <div class="testi-card__photo ibg">
                <img :src="require('assets/img/about/01.png')" alt=""/>
              </div>
              <div class="testi-card__info">
                <div class="testi-card__wrap">
                  <h3 class="testi-card__title">Имя Фамилия</h3>
                  <span class="testi-card__date">26.08.2020</span>
                </div>
                <div class="testi-card__text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure
                  dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                  illo
                  inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                  ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur
                  magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                  qui
                  dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
                  eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                </div>
              </div>
            </div>
          </div>
          <div class="testi-card">
            <div class="testi-card__item">
              <div class="testi-card__photo ibg">
                <img :src="require('assets/img/about/01.png')" alt=""/>
              </div>
              <div class="testi-card__info">
                <div class="testi-card__wrap">
                  <h3 class="testi-card__title">Имя Фамилия</h3>
                  <span class="testi-card__date">26.08.2020</span>
                </div>
                <div class="testi-card__text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure
                  dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                  illo
                  inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                  ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur
                  magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                  qui
                  dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
                  eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                </div>
              </div>
            </div>
          </div>
          <div class="testi-card">
            <div class="testi-card__item">
              <div class="testi-card__photo ibg">
                <img  alt=""/>
              </div>
              <div class="testi-card__info">
                <div class="testi-card__wrap">
                  <h3 class="testi-card__title">Имя Фамилия</h3>
                  <span class="testi-card__date">26.08.2020</span>
                </div>
                <div class="testi-card__text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure
                  dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                  illo
                  inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                  ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur
                  magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                  qui
                  dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
                  eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    <section class="add-testi">
      <div class='container'>
        <h2 class="add-testi__title title">
          Оставить свой отзыв
        </h2>
        <form action="#" class="add-testi__form">
          <div class="add-testi__form-input">
            <input autocomplete="off" type="text" name="form[]" placeholder="Ваше имя" class="input"/>
          </div>
          <div class="add-testi__form-input">
            <input autocomplete="off" type="email" name="form[]" placeholder="E-mail" class="input"/>
          </div>
          <textarea name="textarea" placeholder="Текст отзыва" class="input"></textarea>
          <button class="add-testi__form-btn btn">Отправить</button>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
.container {
  max-width: 1370px;
  margin: 150px auto;
  width: 100%;

}

</style>
