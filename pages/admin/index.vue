<template>
  <div class="bg-grey">

    <v-row no-gutters
    >
      <v-col>
        <span class="grey--text text--darken-3 text-right text-uppercase text-lg-h5 font-weight-bold ">Что добавляем?</span>
      </v-col>
      <v-col class="justify-content-end text-right hidden-md-and-down">
        <span class="grey--text text--darken-3 text-lg-subtitle-1">Дата регистрации: {{localeDate}}</span>
      </v-col>
    </v-row>


    <v-row no-gutters class="pt-10">
      <v-col>
        <v-card
          class="mx-auto"

        >
          <v-subheader>Объекты</v-subheader>


          <v-card-actions right>

            <nuxt-link :to="'/admin/objects/'"
            >
              Добавить объект
            </nuxt-link>
          </v-card-actions>
        </v-card>
      </v-col>

    </v-row>
    <v-row no-gutters class="pt-10">
      <v-col>
        <v-card
          class="mx-auto"

        >
          <v-subheader>Статьи</v-subheader>

<!--          {{$auth.user}}<br>-->
<!--          {{$auth.loggedIn}}<br>-->

          <v-card-actions right>

            <nuxt-link :to="'/admin/blog/'"
            >
              Добавить статью
            </nuxt-link>
          </v-card-actions>
        </v-card>
      </v-col>

    </v-row>


  </div>
</template>


<script>
  export default {
    layout: 'admin',
    data() {
      return {
         activeButtonVar: true
      }
    },

    methods: {
      async saveData() {
        const data = await this.$axios.$post('user/update', this.formData)
      },
      activeButton() {
        this.activeButtonVar = false
      }
    },
    computed: {
      localeDate() {
        // Конвертируем число в строку. Для этого существуют специальные методы
        // toLocaleDateString() или toLocaleString() или toLocaleTimeString()
        // Итоговая строка будет зависеть от локализации системы пользователя.
        // Для русской локали это будет "01.02.2020",
        // для американской "2/1/2020",
        // для немецкой — "1.2.2020"
        // Вы НЕ должны устанавливать формат даты самостоятельно
        return (new Date()).toLocaleDateString()
      },
    },
  }
</script>

<style>
  .bg-grey {
    margin: 0;
    padding: 35px 35px 35px 35px;
    background-color: rgb(238, 238, 238);
    min-height: 100vh;
  }

  .container {
    margin: 0;
    display: flex;
  }

  .title {

    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
</style>
