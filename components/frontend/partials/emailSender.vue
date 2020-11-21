<template>
  <v-snackbar
    v-model="snackbar"
    :timeout="timeout"
    shaped
    rounded="pill"
    color="red"
  >
    {{ text }}

    <template v-slot:action="{ attrs }">
      <v-btn
        color="white"
        text
        v-bind="attrs"
        @click="snackbar = false"
      >
        ок
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  data() {
    return {
      text: '',
      snackbar: false,
    }
  },
  props: {
    timeout: {
      type: Number,
      default: 2000
    },
    formData: {
      type: Object,
      default: {}
    },
    test: {
      type: Boolean
    }
  },
  methods: {
    async sendMail() {
      try {
        await this.$axios.post('frontend/sendMail', this.formData)
      } catch (e) {
        console.log(e)
      }
    },
  },
  watch: {
    formData: async function () {
      if (this.formData.phone) {
        await this.sendMail()
        this.text = 'Заявка отправлена'
        this.snackbar = true
      } else {
        this.text = 'Введите номер телефона'
        this.snackbar = true
      }
    }
  }
}
</script>

<style scoped>

</style>
