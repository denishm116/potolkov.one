<template>
  <div>


    <div class="projects__row">
      <div class="projects__column">
        <PhotoGallery :width="width" :items="items" :addons="{ enableLargeView: true }"></PhotoGallery>
      </div>
      <div class="projects__column">
        <div class="projects__flex__column">
          <div class="projects__info">
            <div class="projects__info-block projects-info-block">
              <div class="projects-info-block__icon">
                <img :src="require('assets/img/projects/icons/06.png')" alt=""/>
              </div>
              <div class="projects-info-block__text">
                <span>{{ ourObject.title }}</span>
              </div>
            </div>
            <div class="projects__info-block projects-info-block">
              <div class="projects__flex">
                <div class="projects__flex">
                  <div class="projects-info-block__icon">
                    <img :src="require('assets/img/projects/icons/02.png')" alt=""/>
                  </div>
                  <div>
                    <div class="projects-info-block__text">
                      <span>Площадь</span> {{ ourObject.square }} м2
                    </div>
                  </div>
                </div>
                <div class="projects__flex">
                  <div class="projects-info-block__icon">
                    <img :src="require('assets/img/projects/icons/04.png')" alt=""/>
                  </div>
                  <div>
                    <div class="projects-info-block__text">
                      <span>Цена</span> {{ ourObject.price }} р
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="projects__info-block projects-info-block">
              <div class="projects-info-block__icon">
                <img :src="require('assets/img/projects/icons/05.png')" alt=""/>
              </div>
              <div class="projects-info-block__text">
                <span>Категории</span>

                <div v-for="cat in ourObject.catalogs" class="projects-info-block__text__categories">- {{
                    cat.title
                  }}
                </div>

              </div>
            </div>
          </div>
          <div class="projects__info-item">
            <div class="projects-info-item__title">
              Что было сделано
            </div>
            <div class="projects-info-item__row description_hover">
              <div v-html="ourObject.description" class="hidden_description"
                   v-if="ourObject.description.length >= 450"></div>
              <span v-if="ourObject.description.length >= 450"
                    v-html="ourObject.description.slice(0, 450) + `... далее`"></span>
              <span v-else v-html="ourObject.description" style="padding-bottom: 2rem"></span>
            </div>
          </div>
          <div class="projects__buttons">
            <a href="" class="projects__btn btn" @click.prevent="dialog = true">Заказать замер</a>
            <a href="/ceilings_catalog" class="projects__btn btn tr">Каталог</a>
          </div>
        </div>

      </div>
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
            color="error"
            fab
            x-small
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text>
          <p>*Компания "Господин Потолков" гарантирует конфиденциальность Ваших персональных данных.
          </p>

          <div class="order__form-input">
            <input autocomplete="off" type="text" v-model="userName"  placeholder="Ваше имя"
                   class="input"/>
          </div>
          <div class="order__form-input">
            <vPhoneInput @putPhone="getPhone"></vPhoneInput>
          </div>
          <button class="order__form-btn btn" @click.prevent="sendFormData">Заказать бесплатный звонок</button>
        </v-card-text>

     </v-card>
      <emailSender :formData="formData"></emailSender>
    </v-dialog>




  </div>

</template>

<script>
import PhotoGallery from "../../partials/PhotoGallery"
import emailSender from '@/components/frontend/partials/emailSender'
import vPhoneInput from '@/components/frontend/partials/vPhoneInput'

export default {
  props: [
    'ourObject', 'width'
  ],
  data() {
    return {
      dialog: false,
      formData: {},
      phone: '',
      userName: ''
    }
  },
  computed: {

    path() {
      return process.env.baseURL + 'storage/'
    },
    items() {
      let obj = this.ourObject
      return obj.images.map(item => {
        return {
          src: this.path + item.path,
          thumbnail: this.path + item.thumb,
        }
      })
    }
  },
  methods: {
    getPhone(phone) {
      this.phone = phone
    },
    sendFormData() {
      this.formData = {
        userName: this.userName,
        phone: this.phone,
        formName: 'Выполнеенные проекты',
      }
      setTimeout(() => {if (this.dialog && this.phone) this.dialog = false}, 3000)
    },
  },
  components: {
    PhotoGallery, emailSender, vPhoneInput
  }
}
</script>

<style scoped>

.description_hover {
  position: relative;
  height: 250px;

}

.description_hover:hover .hidden_description {
  display: block;
  position: absolute;
  left: 0;
  top: -20px;
  opacity: 1;
  box-shadow: 3px 3px 13px rgba(0, 0, 0, 0.53);
  background: #fff;
  padding: 15px;
  overflow: auto;

}

.hidden_description {
  position: absolute;
  left: 0;
  top: 0;
  transition: 0.2s;
  opacity: 0;
  display: none;
  transition: 0.2s;
}

@media (max-width: 479.98px) {
  .description_hover {
    height: 100%;
  }
}

a {
  cursor: pointer;
  color: #ffffff;
}
</style>
