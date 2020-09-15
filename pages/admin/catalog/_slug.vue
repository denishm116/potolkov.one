<template>
  <div>
    <h1>Название категории: {{data.title}}</h1>
    <h3>Псевдоним: {{data.slug}}</h3>
    <h3>Описание: {{data.description}}</h3>

    <div v-for="image in data.images">
      <img :src="path + image.path">
    </div>
  </div>
</template>

<script>
  export default {
    layout: 'admin',
    data() {
      return {
        // path: process.env.baseUrl + '/storage/',
        data: ''
      }
    },
    validate() {
      return true;
    },
    methods: {
      async getData() {
        const catalog = await this.$axios.$get('admin/catalog/' + this.$route.params.slug)
        this.data = catalog[0]
        console.log(this.path)
      }
    },
    mounted() {
      this.getData()

    },
    computed: {
      path() {
        return process.env.BASEUrl + 'storage/'
      }
    }

  }
</script>

<style scoped>

</style>
