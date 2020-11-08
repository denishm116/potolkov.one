<template>
  <section class="commun">
    <div class='container'>
      <div class="commun__title title">
        Остались вопросы?<br>
        Мы перезвоним!
      </div>
      <form action="#" class="commun__form">
        <div class="commun__form-input">
          <input autocomplete="off" type="text" placeholder="Ваше имя" class="input"/>
        </div>
        <div class="commun__form-input">
          <input autocomplete="off" type="tel" placeholder="Номер телефона" class="input"/>
        </div>
        <button class="commun__form-btn btn">Отправить</button>
        <div class="confidential">*Компания "Господин Потолков" гарантирует конфиденциальность Ваших персональных данных.</div>
      </form>

    </div>
  </section>


</template>

<script>
    export default {

    }
</script>

<style scoped>
.confidential {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #eaeaea;
  font-size: 12px;
}
@media (max-width: 576px) {
  .confidential {
    margin: 5px;
    bottom: 2px;
    right: 0;
  }
}
  .container {
    max-width: 1270px;
    margin: 0 auto;
    width: 100%;
  }
</style>
