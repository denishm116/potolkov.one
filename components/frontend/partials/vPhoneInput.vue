<template>
  <input type="tel" @input="acceptNumber" v-mask="'+7 (###) ###-##-##'" placeholder="+7 (918) 123 - 4567" class="input" v-model="phone">
</template>

<script>
export default {
  data() {
    return {
      phone: ''
    }
  },
  methods: {
    acceptNumber() {
      this.$emit('putPhone', this.phone)
    },
  }

}
</script>
