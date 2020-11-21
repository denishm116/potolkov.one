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
                Выезд замерщика в пределах Краснодара - БЕСПЛАТНО
              </p>
            </div>
          </div>
          <div class="order__column">
            <form action="#" class="order__form">
              <h3 class="order__form-title">
                Закажите бесплатный обратный звонок
              </h3>
              <div class="order__form-input">
                <input autocomplete="off" type="text" v-model="userName"  placeholder="Ваше имя"
                       class="input"/>
              </div>
              <div class="order__form-input">
                <vPhoneInput @putPhone="getPhone"></vPhoneInput>
              </div>
              <button class="order__form-btn btn" @click.prevent="sendFormData">Заказать</button>

            </form>

          </div>
        </div>
        <div class="order__photo">
          <img src="~/assets/img/order/man.png" alt=""/>
        </div>
      </div>
      <div class="confidential">*Компания "Господин Потолков" гарантирует конфиденциальность Ваших персональных данных.</div>
    </div>
    <emailSender  :formData="formData"></emailSender>
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
      phone: '',
      userName: ''
    }
  },
  methods: {
    getPhone(phone) {
      this.phone = phone
    },
    sendFormData() {
      this.formData = {
        userName: this.userName,
        phone: this.phone,
        formName: 'Форма с мужичком',
      }
    },
  }
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
