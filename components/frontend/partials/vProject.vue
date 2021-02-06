<template>
  <div>
    <div class="projects__row">
      <div class="projects__column">
        <PhotoGallery :width="width" :items="items" :addons="{ enableLargeView: true }" class="mx-5"></PhotoGallery>
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

                <div class="projects-info-item__row description_hover">
                  <div v-if="ourObject.catalogs.length > 2" class="hidden_description cats">
                    <div v-for="cat in ourObject.catalogs"
                    >- {{ cat.title }}
                    </div>
                  </div>
                  <div v-if="ourObject.catalogs.length > 2">
                    <div v-for="(cat, index) in ourObject.catalogs.slice(0, 2)"
                    >- {{
                        cat.title
                      }}
                    </div>
                    <div style="line-height: 2px;">...</div>
                  </div>
                  <div v-else>
                    <div v-for="(cat, index) in ourObject.catalogs"
                         class="projects-info-block__text__categories">- {{
                        cat.title
                      }}
                    </div>
                  </div>
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
            <a class="projects__btn btn" @click.prevent="openDialog">Заказать замер</a>
            <a href="/ceilings_catalog" class="projects__btn_white btn tr">Каталог</a>
          </div>
        </div>

      </div>
    </div>

    <div v-if="dialog">
    <v-order-dialog :dialog="dialog" @closeDialog="closeDialog"></v-order-dialog>
    </div>


  </div>

</template>

<script>
import PhotoGallery from "../../partials/PhotoGallery"
import vOrderDialog from '@/components/frontend/partials/vOrderDilog'

export default {
  props: [
    'ourObject', 'width'
  ],
  data() {
    return {
      dialog: false,
    }
  },
  computed: {
    dialogListener() {
      return this.dialog
    },
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
    closeDialog() {
      this.dialog = false;
    },
    openDialog() {
      this.dialog = true;
    }
  },
  components: {
    PhotoGallery, vOrderDialog
  }
}
</script>

<style scoped>

.projects__btn::after {
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
  /*animation-delay: 3s;*/
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}


.cats {
  min-width: max-content;
  z-index: 1;
}

.description_hover {
  position: relative;
  height: 100%;
  min-width: 100%;
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
