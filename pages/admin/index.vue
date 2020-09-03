<template>
  <div class="bg-grey">

    <v-row no-gutters
    >
      <v-col>
        <span class="grey--text text--darken-3 text-right text-uppercase text-lg-h5 font-weight-bold ">Добавить объект</span>
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
          <v-subheader>Профиль</v-subheader>


          <v-card-actions right>

            <v-btn class="ma-5"
                   color="access accent-4"
                   @click="saveData()"
                   :disabled="activeButtonVar"
            >
              Сохранить
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

    </v-row>
    <v-row no-gutters class="pt-10">
      <v-col>
        <v-card
          class="mx-auto"

        >
          <v-subheader>Дополнительно</v-subheader>

          {{$auth.user}}<br>
          {{formData}}<br>


          <v-card-actions right>
            <v-spacer></v-spacer>
            <v-btn
              color="access accent-4"

            >
              Сохранить
            </v-btn>
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
        // status: this.$auth.user.status,

        activeButtonVar: true
      }
    },

    methods: {
      async saveData() {
        const data = await this.$axios.$post('user/update', this.formData)
        await console.log(data, this.formData)
      },
      activeButton() {
        this.activeButtonVar = false
      }
    },
    mounted() {


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
      formData() {
        return {
          // status: this.status,
          // name: this.$auth.user.name,
          // last_name: this.$auth.user.last_name,
          // email: this.$auth.user.email,
          // phone: this.$auth.user.phone,
        }
      }
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
    /*justify-content: center;*/
    /*align-items: center;*/
    /*text-align: center;*/
  }

  .title {
    font-family: 'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
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
