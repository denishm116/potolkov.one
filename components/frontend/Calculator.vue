<template>

  <section class="price">
    <div class='container'>
      <h2 class="price__title  my-title">
        Калькулятор потолков
      </h2>
      <form action="#" class="price__form">
        <div class="price__row">
          <div class="price__column">
            <div class="price__input">
              <div class="price__input-title">Площадь потолка, м2</div>
              <input autocomplete="off" type="number" class="input" v-model="square">
            </div>
          </div>
          <div class="price__column">
            <div class="price__input">
              <div class="price__input-title">Количество углов</div>
              <input autocomplete="off" type="number" class="input" v-model="corners">
            </div>
          </div>
          <div class="price__column">
            <div class="price__input">
              <div class="price__input-title">Кол-во точек света</div>
              <input autocomplete="off" type="number" class="input" v-model="lightnings">
            </div>
          </div>
          <div class="price__column">
            <div class="price__input">
              <div class="price__input-title">Карниз для штор (метры)</div>
              <input autocomplete="off" type="number" class="input" v-model="rails">
            </div>
          </div>
        </div>

        <div class="price__row options">

          <div class="price__column">
            <div class="price__form-title">Максимальная ширина потолка</div>
          </div>

          <div class="price__column" v-for="(item, index) in width">
            <div class="option" :class="{'active': width[index].active}" @click="changeWidth(index)">
              {{ item.title }}
            </div>
          </div>


        </div>


        <div class="price__row options">
          <div class="price__column">
            <div class="price__form-title">Цвет</div>
          </div>
          <div class="price__column" v-for="(item, index) in color">
            <div class="option" :class="{'active': color[index].active}" @click="changeColor(index)">
              {{ item.title }}
            </div>
          </div>

          <button class="price__form-btn btn" @click.prevent="calculate">Рассчитать</button>
        </div>
      </form>

    </div>
    <v-dialog
      v-model="dialog"
      max-width="500"
    >
      <v-card>

        <v-card-title class="headline">
          <span>Стоимость</span>
          <v-spacer></v-spacer>
          <v-btn
            class="popup_close_button"

            icon

            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text>
          <p>Площадь - {{ square }} кв.м.</p>
          <p>Закладная под светильник - {{ lightnings }} шт.</p>
          <p>Закладная под карниз - {{ rails }} м.п.</p>
          <p>Количество углов - {{ corners }} шт.</p>
          <div class="font-weight-black mx-auto text-h5">Цена с установкой: <span class=" red--text">{{
              price
            }} р.</span></div>
          <div class="red--text font-weight-black my-5 mx-auto">{{ errorMessage }}</div>

        </v-card-text>

        <v-card-actions>

          <div class="form__num popup_submit_button">
            <vPhoneInput @putPhone="getPhone"></vPhoneInput>
            <button class="form__btn btn" @click="sendFormData">Бесплатный замер</button>
          </div>

        </v-card-actions>
      </v-card>
      <emailSender  :formData="formData"></emailSender>
    </v-dialog>
  </section>

</template>

<script>
import emailSender from '@/components/frontend/partials/emailSender'
import vPhoneInput from '@/components/frontend/partials/vPhoneInput'
import vBreadcrumbs from '@/components/frontend/partials/vBreadcrumbs'

export default {

  components: {
    emailSender, vPhoneInput, vBreadcrumbs
  },

  data() {
    return {
      formData: {},
      phone: '',
      errorMessage: '',
      dialog: false,
      square: 10,
      corners: 4,
      lightnings: 1,
      rails: 2,
      radio: 0,
      price: '',
      width: [
        {
          title: 'До 3,2 м',
          id: 0,
          active: true,
          price: 260,
        },
        {
          title: 'От 3,2 до 3,6 м',
          id: 1,
          active: false,
          price: 280,
        },
        {
          title: 'от 3,6 до 5,5 м',
          id: 2,
          active: false,
          price: 350,
        },
      ],
      color: [
        {
          title: 'Белый',
          id: 0,
          active: true,
          markup: 0
        },
        {
          title: 'Цветной',
          id: 1,
          active: false,
          markup: 15
        },

      ],


    }
  },
  methods: {
    getPhone(phone) {
      this.phone = phone
    },
    sendFormData() {
      this.formData = {
        userName: 'Неизвестно',
        phone: this.phone,
        formName: 'Большой калькулятор',
      }
    },
    calculate() {
      this.dialog = true
      let corners = () => {
        if (this.corners < 3 || this.corners === 4) {
          return 0
        } else if (this.corners > 4) {
          return (+this.corners - 4) * 150
        }
      }
      let rails = () => {
        if (this.rails > 0) {
          return this.rails * 280
        } else {
          return 1
        }
      }
      let lightnings = () => {
        if (this.lightnings > 0) {
          return this.lightnings * 280
        } else {
          return 1
        }
      }

      let widthPrice = this.width.filter(item => item.active)[0].price
      let markUpForColor = this.color.filter(item => item.active)[0].markup
      this.price = +(this.square * +(widthPrice + +markUpForColor)) + +corners() + +rails() + +lightnings()
    },
    changeWidth(id) {
      this.width.forEach((item, index) => {
        this.$set(this.width, index, {
          title: item.title,
          id: item.id,
          active: false,
          price: item.price
        })
        if (item.id === id) {
          this.$set(this.width, index, {
            title: item.title,
            id: item.id,
            active: true,
            price: item.price
          })

        }
      })
    },
    changeColor(id) {
      this.color.forEach((item, index) => {
        this.$set(this.color, index, {
          title: item.title,
          id: item.id,
          active: false,
          markup: item.markup
        })
        if (item.id === id) {
          this.$set(this.color, index, {
            title: item.title,
            id: item.id,
            active: true,
            markup: item.markup
          })

        }
      })
    },
  },
}
</script>

<style scoped>

.popup_close_button {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 99 !important;
}

.popup_submit_button {
  margin: 10px 0 10px 35px;
  padding: 0 0 0 0px;
}

@media (max-width: 479.98px) {
  .popup_submit_button {
    margin: 10px auto;
    /*margin: 0 0 20px 10px;*/
    padding: 0 0 0 0px;
  }
}

.form__btn {
  color: #eaeaea;
}

.price__form-btn {
  color: #eaeaea;
}

.price__column {
  width: 100%
}

.container {
  max-width: 1270px;
  margin: 0 auto;
  width: 100%;
}
</style>
