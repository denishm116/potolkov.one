<template>
  <section class="commun">
    <div class='container'>
      <div class="commun__title  my-title">
        Остались вопросы?<br>
        Мы перезвоним!
      </div>
      <form action="#" class="commun__form">
        <div class="commun__form-input">
          <input autocomplete="off" type="text"  v-model="userName"  placeholder="Ваше имя" class="input"/>
        </div>
        <div class="commun__form-input">
          <vPhoneInput @putPhone="getPhone"></vPhoneInput>
        </div>
        <button class="commun__form-btn btn"  @click.prevent="sendFormData">Заказать бесплатный звонок</button>
        <div class="confidential">*Компания "Господин Потолков" гарантирует конфиденциальность Ваших персональных данных.</div>
      </form>
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
        formName: 'Форма над футером',
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
