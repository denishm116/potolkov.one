<template>
  <div class="wrapper">
    <v-card
      class="mx-auto pa-3"
      outlined
      :elevation="12"
    >
      <v-form class="mx-15 mt-15">

        <v-list-item-title class="headline">Вход</v-list-item-title>

        <v-row>
          <v-col
            cols="12"

          >
            <v-text-field
              :error-messages="emailErrors"
              v-model="loginForm.email"
              label="E-mail"
              required
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col
            cols="12"

          >
            <v-text-field
              v-model="loginForm.password"
              :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
              :error-messages="passwordErrors"
              :type="passwordShow ? 'text' : 'password'"
              name="input-10-1"
              label="Пароль"
              hint="Не менее 8 символов"
              counter
              @click:append="passwordShow = !passwordShow"
            ></v-text-field>
          </v-col>
        </v-row>

      </v-form>
      <v-flex class="d-flex justify-center flex-column mx-15 my-15">

        <v-btn @click="login" color="success" class="">
          Войти
        </v-btn>
        <template v-if="$auth.loggedIn">

          <v-btn depressed @click="logOut">
            <v-avatar size="26" left>
              <img
                src="https://cdn.vuetifyjs.com/images/john.jpg"
                alt="John"
              >
            </v-avatar>
            выход
            <v-icon right>mdi-export</v-icon>
          </v-btn>
        </template>
      </v-flex>
      <v-flex class="d-flex justify-center flex-column  mx-15 mt-5">

      </v-flex>
    </v-card>

  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Вход',
      meta: [
        { name: 'robots', content: 'noindex, nofollow' },

      ]
    }
  },
  layout: 'blank',

  data() {
    return {
      passwordShow: false,
      confirmPasswordShow: false,
      loginForm: {
        email: '',
        password: '',
      },
    }
  },

  computed: {
    nameErrors() {
      if (this.errors) return this.errors.name
    },
    emailErrors() {
      if (this.errors) return this.errors.email
    },
    passwordErrors() {

      if (this.errors) return this.errors.password
    },
    passwordConfirmationErrors() {
      if (this.errors) return this.errors.password_confirmation
    },
  },

  methods: {
    async login() {
      try {
        await this.$axios.post('/auth/login', this.loginForm)
        this.$auth.login({data: this.loginForm})
      } catch (e) {
        return e
      }
    },
    logOut() {
      this.$auth.logout()
    }
  }
}
</script>

<style scoped>
.wrapper {
  max-width: 50vw;
  margin: 100px auto;
  box-shadow:3px 3px 13px rgba(0, 0, 0, 1);
}
</style>
