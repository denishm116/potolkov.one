<template>
  <div class="container">

    <section class="photos sect-mt">
      <div class='container'>
        <nav class="breadcrumbs">
          <ul class="breadcrumbs__list">
            <li>
              <a href="/" class="breadcrumbs__link">Главная</a>
            </li>
            <li>
              <span>Фото натяжных потолков</span>
            </li>
          </ul>
        </nav>
        <h1 class="photos__title my-title">
          Фото натяжных потолков - наши работы
        </h1>
        <div class="photos__row">
          <div class="photos__column" v-for="object in pagObjects">
            <div class="photos__item"  @click="openPopup(object.id)">
              <a href="#" class="photos__item-photo ibg">
                <img :src="PATH + object.mainImage" alt=""/>
              </a>
              <a href="#" class="photos__item-title" @click="openPopup(object.id)">
                {{ object.title }}
              </a>
              <div class="photos__item-wrap">
                <div class="photos__item-date">16.09.2020</div>
                <a href="#" class="photos__item-adress">{{ object.address }}</a>
              </div>
              <div class="photos__item-text">
                <span v-html="object.description.slice(0, 250)"></span>


              </div>
            </div>
          </div>

          <div class="project_wrapper_wrapper" v-if="showBig">
            <div class="wrapper_pos">
              <div class="project_wrapper">
                <v-project
                  :ourObject="OUR_OBJECT"
                  :width="1920"
                ></v-project>
                <div class="close_button">
                  <v-btn
                    @click="showBig = false"
                    fab
                    x-small
                    dark
color="red"
                  >
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                </div>
              </div>

            </div>
          </div>

        </div>
        <div v-if="objectsComp.length">
          <div class="pagging">
          <paginator
            v-model="page"
            :page-count="pageCount"
            :margin-pages="2"
            :page-range="3"
            :click-handler="paginatedObjects"

            :container-class="'pagging-list'"
            :page-class="'page-item'"
            :active-link-class="'active'"
            :page-link-class="'pagging__link'"
            :prev-class="'prev-next'"
            :prev-link-class="'prev-next-link'"
            :next-class="'prev-next'"
            :next-link-class="'prev-next-link'"
            :break-view-class="''"
            :break-view-link-class="''"
            :first-last-button="firstLastButton"
            :hide-prev-next="true"
          ></paginator>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import vProject from '@/components/frontend/partials/vProject'
import Paginator from '@/components/frontend/partials/Paginator'

export default {
  head() {
    return {
      title: 'Фотографии натяжных потолков в Краснодаре',
      meta: [
        {
          hid: 'yandex-verification',
          name: 'yandex-verification',
          content: '0e637a5f8bb61215'
        },
        {
          hid: 'description',
          name: 'description',
          content: 'Фотографии натяжных потолков в Краснодаре. 10 лет гарантии. Бесплатный замер. Господин Потолков.'
        },
        {
          'property': 'og:type',
          'content': 'website',
        },
        {
          'property': 'og:url',
          'content': `https://potolkov.shop${this.$route.path}`,
        },
        {
          'property': 'og:title',
          'content': 'Натяжные потолки в Краснодаре от 260 р. - Господин Потолков',
        },
        {
          'property': 'og:description',
          'content': 'Компания Господин Потолков предлагает натяжные потолки в Краснодаре от 260 р. с установкой! 10 лет гарантии. Бесплатный замер.',
        },
        {
          'property': 'og:site_name',
          'content': 'potolkov.shop',
        },
        {
          'property': 'og:locale',
          'content': 'ru_RU',
        },
        {
          'property': 'og:image',
          'content': 'https://potolkov.shop/site-screen.jpg'
        },
        {
          'property': 'og:image:alt',
          'content': 'Натяжные потолки в Краснодаре от 260 р. - Господин Потолков'
        },
        {
          'name': 'twitter:card',
          'content': 'summary_large_image'
        },
        {
          'name': 'twitter:title',
          'content': 'Натяжные потолки в Краснодаре от 260 р. - Господин Потолков'
        },
        {
          'name': 'twitter:description',
          'content': 'Компания Господин Потолков предлагает натяжные потолки в Краснодаре от 260 р. с установкой! 10 лет гарантии. Бесплатный замер.'
        },
        {
          'name': 'twitter:image:src',
          'content': 'https://potolkov.shop/site-screen.jpg'
        },

      ]
    }
  },
  data() {
    return {
      showBig: false,
      objects: [],
      objectsComp: [],
      page: 1,
      pagObjects: [],
      objectsPerPage: 9
    }

  },
  computed: {
    firstLastButton() {
      return false
    },
    pageCount() {
      return Math.ceil(this.OUR_OBJECTS.length / this.objectsPerPage)
    },
    ...mapGetters({
      OUR_OBJECTS: 'frontend/OUR_OBJECTS',
      OUR_OBJECT: 'frontend/OUR_OBJECT',
      PATH: 'frontend/PATH'
    })
  },
  methods: {
    objectsInit() {
      this.objectsComp = this.OUR_OBJECTS.map(item => {return item})
    },
    paginatedObjects(currentPage) {
      let from = (currentPage - 1) * this.objectsPerPage
      let to = from + this.objectsPerPage
      this.pagObjects = this.OUR_OBJECTS.slice(from, to)
    },
    async openPopup(id) {
      await this.FETCH_OUR_OBJECT(id)
      this.showBig = true
    },
    ...mapActions({
      FETCH_OUR_OBJECTS: 'frontend/FETCH_OUR_OBJECTS',
      FETCH_OUR_OBJECT: 'frontend/FETCH_OUR_OBJECT',

    })
  },
  async mounted() {
    await this.FETCH_OUR_OBJECTS()
    await this.objectsInit()
    this.paginatedObjects(this.page)
  },
  components: {
    vProject, Paginator
  }
}
</script>

<style scoped>

.close_button {
  position: absolute;
  top: 10px;
  right: 10px;
}

.project_wrapper_wrapper {
  z-index: 9999;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  background: rgba(0, 0, 0, 0.6);
  transition: 0.2s;
  /*height: 100%;*/
  width: 100%;
  max-height: 100%;

}

.wrapper_pos {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;

  padding: 5px;
  margin: 0 auto;
  display: flex;
  overflow: auto;
  align-items: center;
  justify-content: center;

  align-content: center;
}

.project_wrapper {
  position: relative;
  /*top: 0;*/
  /*left: 0;*/
  /*margin-left:-25%;*/
  /*right: 0;*/
  /*bottom: 0;*/
  max-width: 1370px;
  background: #ffffff;
  padding: 35px;
  margin: 0 auto;
  width: 100%;

  overflow: hidden;
}

@media (max-width: 1070px) {

  .wrapper_pos {
    position: fixed;
    overflow: auto;
    height: 100%;
    align-items: center;
    justify-content: center;

    align-content: center;
  }

  .project_wrapper {
    padding: 15px;
    height: 100%;
    overflow: auto;
  }

}

.container {
  max-width: 1370px;
  margin: 0 auto;
  width: 100%;
}

.photos {
  padding: 0px 0px 100px 0px;
  margin: 150px 0 0 0;
}

.photos__title {
  margin: 0px 0px 30px 0px;
}

.photos__row {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  font-size: 0;
  margin: 10px -40px;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.photos__column {
  padding: 0px 40px;

  flex: 0 0 33%;
  margin: 0px 0px 35px 0px;
}

.photos__item-photo {
  display: block;
  padding: 0px 0px 75% 0px;
  margin: 0px 0px 25px 0px;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}

@media (min-width: 992px) {
  .photos__item-photo:hover {
    -moz-transform: scale(1.03);
    -ms-transform: scale(1.03);
    -webkit-transform: scale(1.03);
    -o-transform: scale(1.03);
    transform: scale(1.03);
  }
}

.photos__item-title {
  font-size: 18px;
  display: block;
  font-family: "Geometria-Bold";
  text-transform: uppercase;
  color: #333;
  margin: 0px 0px 7px 0px;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}

@media (min-width: 992px) {
  .photos__item-title:hover {
    color: #ff0000;
  }
}

.photos__item-wrap {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  font-size: 0;
  margin: 0px 0px 30px 0px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.photos__item-date {
  font-size: 16px;
  margin: 0px 20px 0px 0px;
}

.photos__item-adress {
  display: block;
  font-size: 16px;
  color: #333;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
  padding: 0px 0px 0px 20px;
  background: url("../../assets/img/photos/icon.png") 0 3px no-repeat;
}

@media (min-width: 992px) {
  .photos__item-adress:hover {
    color: #ff0000;
  }
}

.photos__item-text {
  font-size: 16px;
}

@media (max-width: 1382px) {
  .photos__row {
    margin: 0px -15px;
  }

  .photos__column {
    padding: 0px 15px;
  }
}

@media (max-width: 991.98px) {
  .photos {
    padding: 0px 0px 70px 0px;
  }

  .photos__item-wrap {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    margin: 0px 0px 20px 0px;
  }

  .photos__item-date {
    margin: 0px 0px 10px 0px;
  }

  .photos__item-adress {
    font-size: 14px;
    padding: 0px 0px 0px 15px;
  }
}

@media (max-width: 767.98px) {
  .photos {
    padding: 0px 0px 50px 0px;
  }

  .photos__row {
    margin: 0px -10px;
  }

  .photos__column {
    padding: 0px 10px;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
  }
}

@media (max-width: 479.98px) {
  .photos {
    padding: 0px 0px 30px 0px;
  }

  .photos__column {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
  }
}

</style>
