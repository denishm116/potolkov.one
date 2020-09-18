<template>
  <section class="price">
    <div class='container'>
      <h2 class="price__title title">
        РАССЧИТАЙТЕ СТОИМОСТЬ
        ВАШЕГО ПОТОЛКА
      </h2>
      <form action="#" class="price__form">
        <div class="price__row">
          <div class="price__column">
            <div class="price__input">
              <div class="price__input-title">Площадь потолка, м2</div>
              <input autocomplete="off" type="text" name="form[]" placeholder="10" class="input"/>
            </div>
          </div>
          <div class="price__column">
            <div class="price__input">
              <div class="price__input-title">Количество углов</div>
              <input autocomplete="off" type="text" name="form[]" placeholder="4" class="input"/>
            </div>
          </div>
          <div class="price__column">
            <div class="price__input">
              <div class="price__input-title">Кол-во точек света</div>
              <input autocomplete="off" type="text" name="form[]" placeholder="1" class="input"/>
            </div>
          </div>
          <div class="price__column">
            <div class="price__input">
              <div class="price__input-title">Карниз для штор</div>
              <input autocomplete="off" type="text" name="form[]" placeholder="0" class="input"/>
            </div>
          </div>
        </div>

        <div class="price__row options">
          <div class="price__column">
            <div class="price__form-title">Максимальная ширина потолка</div>
          </div>
          <div class="price__column">
            <div class="option active">
              <input type="radio" value="1" name="form[type]"/>
              До 3,2 м
            </div>
          </div>
          <div class="price__column">
            <div class="option">
              <input type="radio" value="2" name="price"/>
              От 3,2 до 3,6 м
            </div>
          </div>
          <div class="price__column">
            <div class="option">
              <input type="radio" value="3" name="price"/>
              от 3,6 до 5,5 м
            </div>
          </div>
        </div>

        <div class="price__row options">
          <div class="price__column">
            <div class="price__form-title">Цвет</div>
          </div>
          <div class="price__column">
            <div class="option active">
              <input type="radio" value="1" name="form[type]"/>
              Белый
            </div>
          </div>
          <div class="price__column">
            <div class="option">
              <input type="radio" value="2" name="price"/>
              Цветной
            </div>
          </div>
          <button type="submit" class="price__form-btn btn">Рассчитать стоимость</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
    export default {

    }
</script>

<style scoped>

</style>
