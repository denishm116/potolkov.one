<template>
  <section class="commun">
    <div class='container'>
      <h2 class="commun__title title">
        Если у Вас возникли вопросы оставьте
        свои данные и мы свяжемся с Вами
      </h2>
      <form action="#" class="commun__form">
        <div class="commun__form-input">
          <input autocomplete="off" type="text" name="form[]" placeholder="Ваше имя" class="input"/>
        </div>
        <div class="commun__form-input">
          <input autocomplete="off" type="tel" name="form[]" placeholder="Номер телефон" class="input"/>
        </div>
        <button type="submit" class="commun__form-btn btn">Отправить</button>
      </form>
    </div>
  </section>


</template>

<script>
    export default {

    }
</script>

<style scoped>
  .container {
    max-width: 1270px;
    margin: 0 auto;
    width: 100%;
  }
</style>
