<template>
  <input type="tel" @input="acceptNumber" placeholder="(918) 123 - 4567" class="input" v-model="phone">
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
      let x = this.phone.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
      this.phone = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
      this.$emit('putPhone', this.phone)
    },
  }

}
</script>

<style scoped>

</style>
