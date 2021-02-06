<template>
  <div>
    <v-dialog
      v-model="dialogInComponentVar"
      max-width="500"
      @click:outside="closeDialog"
    >
      <v-card>
        <v-card-title class="headline popup_title">
          <span>Ваше имя и телефон</span>
          <v-spacer></v-spacer>
          <v-btn
            class="popup_close_button"

            icon

            @click="closeDialog"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text>
          <p>*Компания "Господин Потолков" гарантирует конфиденциальность Ваших персональных данных.
          </p>

          <div class="order__form-input">
            <input autocomplete="off" type="text" v-model="userName" placeholder="Ваше имя"
                   class="input"/>
          </div>
          <div class="order__form-input">
            <vPhoneInput @putPhone="getPhone"></vPhoneInput>
          </div>
          <button class="order__form-btn btn" @click.prevent="sendFormData">Заказать бесплатный звонок</button>
        </v-card-text>

      </v-card>
      <emailSender :formData="formData"></emailSender>
    </v-dialog>
  </div>
</template>

<script>
import emailSender from "@/components/frontend/partials/emailSender";
import vPhoneInput from "@/components/frontend/partials/vPhoneInput";

export default {
  props: [
    'ourObject', 'width', 'dialog'
  ],
  data() {
    return {
      dialogInComponentVar: this.dialog,
      formData: {},
      phone: '',
      userName: ''
    }
  },
  computed: {
    path() {
      return process.env.baseURL + 'storage/'
    },
    items() {
      let obj = this.ourObject
      return obj.images.map(item => {
        return {
          src: this.path + item.path,
          thumbnail: this.path + item.thumb,
        }
      })
    }
  },
  methods: {
    closeDialog() {
      this.dialogInComponentVar = false
      this.$emit('closeDialog')
      },

    getPhone(phone) {
      this.phone = phone
    },
    sendFormData() {
      this.formData = {
        userName: this.userName,
        phone: this.phone,
        formName: 'Из всплывающего окна',
      }
      setTimeout(() => {
        this.closeDialog()
      }, 3000)
    },
  },
  components: {
   emailSender, vPhoneInput
  },
  beforeDestroy() {
    this.closeDialog()
  }
}
</script>

<style scoped>
.popup_title {
  position: relative;
}

.popup_close_button {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 99 !important;
}
</style>
