<template>
  <section class="main">
    <div class="container">
      <div class="main__column">
        <h1 class="main__title animate__animated animate__bounce">
          <span>НАТЯЖНЫЕ ПОТОЛКИ </span>в Краснодаре
        </h1>
        <div class="main__text">
          Больше 12 лет мы - специалисты компании "Господин Потолков" трудимся во благо комфорта и красоты жителей
          Крснодарского края. От всей души делимся с Вами своими знаниями и трудолюбием. В каждом квадратном метре натянутого потолка нами потолка сатичка нашей души!
        </div>
        <div class="main__wrap">
          <a href="" class="main__btn btn">Перейти в каталог</a>
          <span class="main__label">Создайте свой уютный уголок</span>
        </div>
      </div>
      <div class="main__column">
        <form action="#" class="main__form form">
          <h3 class="form__title">Узнайте цену на
            натяжной потолок</h3>
          <div class="form__radiobuttons options">
            <div class="option active">
              <input type="radio" value="1" name="form[type]"/>
              Белый
            </div>
            <div class="option">
              <input type="radio" value="2" name="form[type]"/>
              Цветной
            </div>
            <div class="option">
              <input type="radio" value="3" name="form[type]"/>
              Фотопечать
            </div>
          </div>

          <h4 class="form__subtitle">
            Площадь потолка, м2
          </h4>
          <div class="form__input">
            <input autocomplete="off" type="text" name="form[]" placeholder="10" class="input"/>
          </div>
          <div class="form__info">
            <h5 class="form__info-title">Ваша цена сегодня</h5>
            <span>8 379 ₽</span>
          </div>
          <div class="form__num">
            <input type="tel" name="form[]" placeholder="Ваш номер телефона" class="input">
            <button class="form__btn btn" type="submit">Заказть звонок</button>
          </div>
          <div class="form__root">
            <div class="check">
              Согласен с политикой конфиденциальности
              <input type="checkbox" value="1" name="form[]">
            </div>
          </div>
        </form>

      </div>
    </div>
  </section>
</template>

<script>
  export default {}
</script>

<style scoped>
  .container {
    max-width: 1270px;
    margin: 0 auto;
    width: 100%;
  }
</style>
