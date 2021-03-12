<template>
  <section class="main">
    <div class="container">
      <div class="main__column">
        <h1 class="main__title animate__animated animate__bounce">
          <span>Натяжные потолки</span>в Краснодаре
        </h1>

        <div class="main__text">
          <div class="main-title"><span>11 лет</span> на рынке</div>
          <div class="main-title">Более <span>550 000 м<sup>2</sup></span> установлено</div>
          <div class="main-title"><span>10 лет</span> гарантия на полотна</div>

          <!--          Больше 11 лет мы, специалисты компании "Господин Потолков", трудимся ради комфорта и уюта жителей-->
          <!--          Краснодарского края. От всей души делимся с Вами своим опытом и трудолюбием. В каждом квадратном метре-->
          <!--          натянутого нами потолка - частичка нашей души: будь то дом, офис, или детский сад, в который ходит Ваш-->
          <!--          ребенок!-->
        </div>
        <div class="main__wrap">
          <a class="main__btn btn" @click.prevent="openDialog">Заказать бесплатный замер</a>
          <!--          <span class="main__label">Потолки на любой вкус и кошелек</span>-->
          <div v-if="dialog">
            <v-order-dialog :dialog="dialog" @closeDialog="closeDialog"></v-order-dialog>
          </div>
        </div>
      </div>
      <div class="main__column">
        <div class="main__form form">
          <!--          <div class="form__title">АКЦИЯ</div>-->
          <div class="form__subtitle"><span class="red_date">АКЦИЯ</span> до <span class="red_date">{{
              dateOnScreen
            }}</span>г.
          </div>
          <div class="into_arrow">
            <div class="akcia_arrow"><span class="akcia_arrow_189">189</span><span
              class="akcia_arrow_rub"> р/м<sup>2</sup></span></div>
            <div class="akcia_arrow_s_ustanovkoi"> С УСТАНОВКОЙ</div>
          </div>

          <div class="form__num">
            <vPhoneInput @putPhone="getPhone"></vPhoneInput>
            <button class="form__btn btn" @click.prevent="sendFormData">Заказть звонок</button>
          </div>
          <div class="podrobnosti_wrapper">
            <div class="podrobnosti">подробности акции
              <div class="akcia"><p>Стоимость действительна при заказе потолков с использованием плёнки ПВХ общей
                площадью более 30 кв.м. В акции участвуют только белые матовые M501 (1,4м) и глянцевые
                L501 (1,4м) полотна. Установка крепежного профиля входит в стоимост потолка.</p>

                <p>Установка осветительных приборов, маскировочной ленты, потолочных карнизов, обработка дополнительных
                  углов
                  (более 4 в помещении), окантовка труб и другие комплектующие
                  оплачиваются дополнительно.</p>

                Минимальну стоимость заказа уточняйте у менеджеров по тел: <p class="tel"><a href="tel:+79996314541"> +7
                  (999) 631-45-41</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <emailSender :formData="formData"></emailSender>
  </section>

</template>

<script>
import emailSender from '@/components/frontend/partials/emailSender'
import vPhoneInput from '@/components/frontend/partials/vPhoneInput'
import vOrderDialog from '@/components/frontend/partials/vOrderDilog'

export default {
  components: {
    emailSender, vPhoneInput, vOrderDialog
  },
  data() {
    return {
      dialog: false,
      dateOnScreen: "",
      formData: {},
      phone: ""
    }
  },

  methods: {
    setDate() {
      let datePlusTwoWeeks = new Date(Date.now() + 205900000)
      let year = datePlusTwoWeeks.getFullYear()

      let m = datePlusTwoWeeks.getMonth()

      let month = m ? (m + 1) : ("0" + (m + 1))

      let day = datePlusTwoWeeks.getDate()
      if (day < 10)
        day = "0" + day
      if (month < 10)
        month = "0" + month

      this.dateOnScreen = day + "." + month + "." + year
    },
    getPhone(phone) {
      this.phone = phone
    },
    sendFormData() {
      this.formData = {
        userName: 'Неизвестно',
        phone: this.phone,
        formName: 'Форма из акции',
      }
    },
    closeDialog() {
      this.dialog = false;
    },
    openDialog() {
      this.dialog = true;
    }
  },
  mounted() {
    this.setDate()
  }
}
</script>

<style scoped>

.main-title {
  font-size: 30px;
  margin-bottom: 1rem;
}

.main-title span {
  color: #ff0000;
}

.main__wrap {
  max-width: 50%;
  text-align: center;
  align-self: center;
}

@media (max-width: 992px) {
  .main__wrap {
    margin: 0 auto;
    max-width: 100%;
  }

  .main-title {
    font-size: 20px;
    margin-bottom: 0.5rem;
  }

  .main__column:nth-child(1) {
    padding: 0px 0px 0px 0px;
    margin: -100px 0px 30px 0px;
  }

  .main__column {
    align-items: center;
    align-self: center;
    text-align: center;
  }
}

.main__btn::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 1.5em;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.6);
  transform: translateX(-4em) skewX(-45deg);
  animation: blick;
  animation-duration: 4s;
  animation-delay: 3s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

.tel {
  margin: 1rem auto;
  text-align: center;
}

.akcia {
  position: absolute;
  left: 0;
  top: 50%;
  padding: 10px;
  background: white;
  border-radius: 5px;
  text-align: left;
  color: #222222;
  font-size: 15px;
  font-weight: normal;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  width: 100%;
  display: none;
  transition: 0.3s;
  border: 2px solid red;
}

.podrobnosti:hover .akcia {
  display: block;

}

.podrobnosti_wrapper {
  margin: 0 auto;
}

.podrobnosti {
  display: inline-block;
  text-align: center;
  font-size: 15px;
  color: red;
  margin-top: 10px;
  cursor: pointer;
}

.main__form {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-weight: bolder;
}

.into_arrow {
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0;
  padding: 0;
  background: url("~@/assets/img/main/akcia_arrow.svg") no-repeat;
  background-size: 100%;
}

.akcia_arrow_189 {
  color: white;
  font-weight: bolder;
  font-size: 145px;
  line-height: 1;

}

.akcia_arrow_rub {
  color: white;
  font-weight: bolder;
  font-size: 60px;
}

.akcia_arrow_s_ustanovkoi {
  color: white;
  font-weight: bolder;
  font-size: 50px;
  line-height: 1;
  margin-bottom: 55px;
}

.red_date {
  color: #ff0000;
  margin-right: 5px;
}

.main__btn, .form__btn {
  color: #eaeaea;
}

.container {
  max-width: 1270px;
  margin: 0 auto;
  width: 100%;
}

@media (max-width: 480px) {
  .into_arrow {
    padding-top: 1rem;
  }

  .akcia_arrow_189 {
    font-size: 65px;
    line-height: 1;
  }

  .akcia_arrow_rub {
    font-size: 45px;
  }

  .akcia_arrow_s_ustanovkoi {
    line-height: 1;
    font-size: 30px;
    margin-bottom: 30px;
  }

  .podrobnosti {
    font-size: 15px;
  }
}

@media (max-width: 450px) {
  .akcia_arrow_s_ustanovkoi {
    line-height: 1;
    font-size: 25px;
    margin-bottom: 30px;
  }
}

@media (max-width: 380px) {
  .main__title {
    font-size: 25px;
  }

  .main-title {
    font-size: 18px;
    margin-bottom: 0.5rem;
  }
}

@media (max-width: 320px) {
  .main__title {
    margin-top: 15px;
    font-size: 20px;
  }
}

@media (max-width: 350px) {
  .into_arrow {
    padding-top: 1rem;
  }

  .akcia_arrow_189 {
    font-size: 65px;
    line-height: 1;
  }

  .akcia_arrow_rub {
    font-size: 35px;
  }

  .akcia_arrow_s_ustanovkoi {
    line-height: 1;
    font-size: 30px;
    margin-bottom: 70px;
  }

  .podrobnosti {

    font-size: 15px;

  }
}

</style>
