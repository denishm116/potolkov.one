<template>
  <section class="main">
    <div class="container">
      <div class="main__column">
        <h1 class="main__title animate__animated animate__bounce">
          <span>Натяжные потолки</span>в Краснодаре
        </h1>
        <div class="main__text">
          Больше 11 лет мы, специалисты компании "Господин Потолков", трудимся ради комфорта и уюта жителей
          Краснодарского края. От всей души делимся с Вами своим опытом и трудолюбием. В каждом квадратном метре
          натянутого нами потолка - частичка нашей души: будь то дом, офис, или детский сад, в который ходит Ваш
          ребенок!
        </div>
        <div class="main__wrap">
          <a href="/ceilings_catalog/" class="main__btn btn">Перейти в каталог</a>
          <span class="main__label">Создайте свой уютный уголок</span>
        </div>
      </div>
      <div class="main__column">
        <form action="#" class="main__form form">
          <h3 class="form__title">Выберите ширину Вашего потолка</h3>
          <div>
            <v-radio-group
              row
              v-model="radio"
              @change="calculate"
            >
              <v-spacer></v-spacer>
              <v-radio
                v-for="ceiling in ceilings"
                :label="ceiling.title"
                color="red"
                :key="ceiling.id"
                :value="ceiling.id"
              ></v-radio>
              <v-spacer></v-spacer>


            </v-radio-group>
          </div>
          <h4 class="form__subtitle">
            Площадь потолка, м2
          </h4>
          <div class="form__input">
            <input autocomplete="off" type="number" @input="calculate" class="input" v-model="quadrature"/>
          </div>
          <div class="form__info">
            <h5 class="form__info-title">Ваша цена сегодня</h5>
            <span>{{ price }} ₽</span>
          </div>
          <div class="form__num">
            <vPhoneInput @putPhone="getPhone"></vPhoneInput>
            <button class="form__btn btn" @click.prevent="sendFormData">Заказть звонок</button>
          </div>
          <div class="form__root">
            <div class="check" :class="{'active': active}" @click="checked">
              Перезвонить в ближайшее время
              <input type="checkbox" value="1" name="form[]" checked>
            </div>
          </div>
        </form>
      </div>
    </div>
    <emailSender :formData="formData"></emailSender>
  </section>

</template>

<script>
import emailSender from '@/components/frontend/partials/emailSender'
import vPhoneInput from '@/components/frontend/partials/vPhoneInput'

export default {
  components: {
    emailSender, vPhoneInput
  },
  data() {
    return {
      formData: {},
      active: true,
      radio: 0,
      quadrature: 10,
      price: 2600
    }
  },

  computed: {
    ceilings() {
      return [
        {
          title: 'до 2-х м',
          id: 0,
          active: true
        },
        {
          title: 'от 2-х до 3,6 м',
          id: 1,
          active: false
        },
        {
          title: 'больше 3,6 м',
          id: 2,
          active: false
        },
      ]

    }
  },

  methods: {
    getPhone(phone) {
      this.phone = phone
    },
    sendFormData() {
      this.formData = {
        userName: 'Неизвестно',
        phone: this.phone,
        formName: 'Верхний калькулятор',
      }
    },
    makeActive(id) {
      this.ceilings.forEach((ceiling, i) => {
        this.ceilings[i].active = false
        if (ceiling.id == id) {
          this.ceilings[i].active = true
        }
      })
    },
    calculate() {
      if (this.radio === 0)
        this.price = this.quadrature * 260
      else if (this.radio === 1)
        this.price = this.quadrature * 280
      else
        this.price = this.quadrature * 340
    },
    checked() {
      this.active = !this.active
    }
  },

}
</script>

<style scoped>

.main__btn, .form__btn {
  color: #eaeaea;
}

.container {
  max-width: 1270px;
  margin: 0 auto;
  width: 100%;
}
</style>
