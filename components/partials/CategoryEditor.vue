<template>
  <v-row>
    <v-col>
      <v-card class="mx-auto pa-5">

        <h1>Название категории: {{category.title}}</h1>
        <h3>Псевдоним: {{category.slug}}</h3>
        <h3>Описание: {{category.description}}</h3>

        <div v-for="image in category.images">
          <img :src="path + image.path">
        </div>
      </v-card>
      {{category}}


    </v-col>
  </v-row>

</template>

<script>
  export default {
    props: [
      'categoryInit'
    ],
    computed: {
      path() {
        return process.env.baseURL + 'storage/'
      },
      category() {
        return this.categoryInit
      }

    }

  }
</script>

<style scoped>

</style>
