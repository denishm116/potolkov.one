<template>
  <section class="blog sect-mt">
    <div class='container'>

      <v-breadcrumbs
        :second="{name: ' Каталог изображений для фотопечати', to: false, active: false}"
      ></v-breadcrumbs>

      <h1 class="blog__title my-title">
        Каталог изображений для фотопечати
      </h1>
      <div class="blog__row">
        <div class="fotopechat__column" v-for="object in objects">
          <div class="fotopechat__item">
            <a href="" class="blog__item-photopechat" @click.prevent="showLarge(object)">
              <img :src="object.src" :alt="object.title">

            </a>
            <a href="" class="blog__item-title">
              {{ object.title }}
            </a>
          </div>

        </div>
        <large-view
          id="largeView"
          :accent-color="accentColor"
          :item="largePicture"
          v-if="showLargeView"
          @close-large-view="closeLargeView"
        />
      </div>
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
          :first-last-button="false"
          :hide-prev-next="true"
        ></paginator>
      </div>
    </div>
  </section>
</template>

<script>
import {mapGetters} from 'vuex'
import Paginator from '@/components/frontend/partials/Paginator'
import LargeView from "@/components/partials/LargeView"
import vBreadcrumbs from '@/components/frontend/partials/vBreadcrumbs'

export default {

  head() {
    return {
      title: `Каталог изображений для фотопечати - Господин Потолков`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Каталог изображений для фотопечати - Компания Господин Потолков предлагает натяжные потолки в Краснодаре от 260 р. с установкой!'
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

  props: {
    accentColor: {
      type: String,
      default: '#3498db'
    },
    addons: {
      type: Object,
      default() {
        return {}
      }
    }
  },

  data() {
    return {
      page: 1,
      objects: [],
      objectsPerPage: 9,
      showLargeView: false,
      largePicture: {}
    }
  },

  computed: {
    pageCount() {
      return Math.ceil(this.fotopechat.length / this.objectsPerPage)
    },
    ...mapGetters({
      fotopechat: 'frontend/fotopechat'
    })
  },

  methods: {
    closeLargeView() {
      this.showLargeView = false
    },
    paginatedObjects(currentPage) {
      let from = (currentPage - 1) * this.objectsPerPage
      let to = from + this.objectsPerPage
      this.objects = this.fotopechat.slice(from, to)
    },
    showLarge(picture) {
      this.largePicture = picture
      this.showLargeView = true
    }
  },

  async mounted() {
    this.paginatedObjects(this.page)
  },
  components: {
    Paginator, LargeView, vBreadcrumbs
  }
}
</script>

<style scoped>
.container h1 {
  margin: 0 0 30px 0;
}

.fotopechat__column {
  padding: 0px 34px;
  flex: 0 0 33.33333%;
  margin: 0px 0px 40px 0px;
}

.fotopechat__item {
  max-width: 400px;
}

.blog__item-photopechat {
  padding: 0px 0px 75.5% 0px;
  margin: 0px 0px 20px 0px;
  transition: all 0.3s;
}

.blog__item-photopechat img {
  width: 100%;
  height: 100%;
}

@media (min-width: 992px) {
  .blog__item-photopechat:hover {
    transform: scale(1.08);
  }
}

.container {
  width: 1270px;
}

h1 {
  margin: 150px 0 150px 0;
  font-size: 36px;
}
</style>
