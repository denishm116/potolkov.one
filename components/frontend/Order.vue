<template>
  <section class="order">
    <div class="order__border">
      <div class='container'>
        <div class="order__row">
          <div class="order__column">
            <div class="order__info">
              <h2 class="order__title">
                ЗАКАЖИТЕ ПРЯМО СЕЙЧАС
              </h2>
              <p class="order__text">
                выезд замерщика и получите каждый 5м2 в подарок
              </p>
            </div>
          </div>
          <div class="order__column">
            <form action="#" class="order__form">
              <h3 class="order__form-title">
                Оставьте свои данные
                и мы свяжемся с вами
              </h3>
              <div class="order__form-input">
                <input autocomplete="off" type="text" name="form[]" placeholder="Ваше имя"
                       class="input"/>
              </div>
              <div class="order__form-input">
                <input autocomplete="off" type="tel" name="form[]" placeholder="Ваш телефон"
                       class="input"/>
              </div>
              <button type="submit" class="order__form-btn btn">Отправить</button>
            </form>
          </div>
        </div>
        <div class="order__photo">
          <img src="~/assets/img/order/man.png" alt=""/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {

    }
</script>

<style scoped>

</style>
