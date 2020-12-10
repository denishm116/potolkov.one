<template>
  <div class="bg-grey">
    <v-row no-gutters>
      <v-col>
        <span class="grey--text text--darken-3 text-right text-uppercase text-lg-h5 font-weight-bold ">Блог:
        статьи о натяжных потолках</span>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card class="pa-5">
          <v-simple-table>
            <template v-slot:default>
              <thead>
              <tr>
                <th class="text-left">
                  Удалить
                </th>
                <th class="text-left">
                  Заголовок
                </th>

                <th class="text-left">
                  Категории
                </th>

                <th class="text-left">
                  Потолки
                </th>
                <th>Мета-описание</th>
              </tr>
              </thead>
              <tbody>
              <tr
                v-for="item in ARTICLES"

              >
                <td>
                  <a small href="" @click.prevent="deleteArticle(item.id)">
                    <v-icon>mdi-delete</v-icon>
                  </a>
                </td>
                <td><a :href="'blog/' + item.id">{{ item.title }}</a></td>

                <td>
                  <span v-for="cats in item.catalogs ">{{ cats.title }}, </span>
                </td>

                <td>
                  <span v-for="cats in item.ceilings ">{{ cats.title }}, </span>
                </td>
                <td>{{ item.meta_description }}</td>
              </tr>
              </tbody>
            </template>
          </v-simple-table>

        </v-card>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col>
        <span
          class="grey--text text--darken-3 text-right text-uppercase text-lg-h5 font-weight-bold ">ДОБАВИТЬ статью</span>
      </v-col>
    </v-row>
    <v-row no-gutters class="mt-3">
      <v-col>

        <v-card class="mx-auto pa-5">
          <v-subheader>Заполните необходимые поля (Название статьи, выберите фотографии и сделайте к ним подписи)
          </v-subheader>
          <v-row>
            <v-col>
              <v-text-field

                label="Заголовок статьи h1"
                outlined
                dense

                v-model="newArticle.title"
              ></v-text-field>
            </v-col>
            <v-col>

            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-text-field

                label="Descrption Meta"
                outlined
                dense
                v-model="newArticle.metaDescription"
              ></v-text-field>
            </v-col>
            <v-col>

            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <ClientOnly>
                <!-- Use the component in the right place of the template -->
                <tiptap-vuetify v-model="newArticle.description" :extensions="extensions"/>
                <template #placeholder>
                  Подождите капельку...
                </template>
              </ClientOnly>
            </v-col>
          </v-row>
          <add-image-component @imageData="imageData" :show="show"></add-image-component>


          <v-row v-for="(subArticle, index) in newArticle.subArticles" :key="index">
            <v-col>
              <v-row>
                <v-col>
                  <ClientOnly>
                    <!-- Use the component in the right place of the template -->
                    <tiptap-vuetify v-model="subArticle.description" :extensions="extensions" @input="makeShowTrue"/>
                    <template #placeholder>
                      Подождите капельку...
                    </template>
                  </ClientOnly>
                </v-col>
              </v-row>

              <v-row class="mt-3" align-content="space-between">
                <v-col v-for="(image, imgIndex) in subArticle.images" align-self="center" :key="imgIndex">
                  <v-card
                    class="mx-auto"
                    max-width="400"
                  >
                    <v-img :src="image.image" class="align-end"></v-img>
                    <v-card-actions>
                      <v-btn
                        class="del"
                        color="error"
                        fab
                        x-small
                        @click="subArticle.images.splice(imgIndex, 1)"
                      >
                        <v-icon>mdi-delete</v-icon>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>

            </v-col>
          </v-row>

          <v-row v-if="subArticleShow">
            <v-col>
              <v-row>
                <v-col>
                  <ClientOnly>
                    <!-- Use the component in the right place of the template -->
                    <tiptap-vuetify v-model="subArticle.description" :extensions="extensions" @input="textChange"/>
                    <template #placeholder>
                      Подождите капельку...
                    </template>
                  </ClientOnly>
                </v-col>
              </v-row>
              <add-image-component @imageData="subArticleImageData" :show="true"></add-image-component>
            </v-col>
          </v-row>

          <div class="white--text text-center">
            <v-btn
              :color="addBlockButtonColor"
              class="ma-2 white--text text-center"
              @click="addSubArticle"
            >
              {{ buttonText }}
              <v-icon
                right
                dark
              >mdi-plus-circle-outline
              </v-icon>
            </v-btn>
          </div>


          <v-catalog-check-boxes
            :ceilingCatalog="CEILING_CATALOG"
            :checkedCatalog="newArticle.catalogs"
            :checkedCeilings="newArticle.ceilings"
            @checkBoxData="checkBoxData"
          ></v-catalog-check-boxes>

        </v-card>

      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-col class="d-flex justify-start">
          <v-btn :color="buttonColor" @click="saveArticle">Сохранить</v-btn>
        </v-col>
      </v-col>
    </v-row>

  </div>
</template>

<script>
import {
  TiptapVuetify,
  Heading,
  Bold,
  Italic,
  Strike,
  Underline,
  Code,
  Paragraph,
  BulletList,
  OrderedList,
  ListItem,
  Link,
  Blockquote,
  HardBreak,
  HorizontalRule,
  History
} from 'tiptap-vuetify'
import {clipperBasic, clipperPreview} from 'vuejs-clipper'
import {mapGetters, mapActions} from 'vuex'
import vCatalogCheckBoxes from "@/components/partials/vCatalogCheckBoxes";
import AddImageComponent from "@/components/partials/AddImageComponent";

export default {
  layout: 'admin',
  data() {
    return {
      buttonColor: 'orange',
      disabled: true,
      show: true,
      subArticleShow: false,
      buttonText: 'Добавить блок',
      formData: [],
      addBlockButtonColor: 'blue',
      newArticle: {
        title: '',
        description: '',
        metaDescription: '',
        images: [],
        catalogs: [],
        ceilings: [],
        subArticles: []
      },
      subArticle: {
        description: '',
        images: '',
      },
      extensions: [
        History,
        Blockquote,
        Link,
        Underline,
        Strike,
        Italic,
        ListItem,
        BulletList,
        OrderedList,
        [
          Heading,
          {
            options: {
              levels: [1, 2, 3]
            }
          }
        ],
        Bold,
        Link,
        Code,
        HorizontalRule,
        Paragraph,
        HardBreak
      ],
    }
  },
  computed: {
    ...mapGetters({
      ARTICLES: 'article/ARTICLES',
      CEILINGS: 'catalogItems/CEILINGS',
      CEILING_CATALOG: 'catalog/CEILING_CATALOG',
    }),
  },

  methods: {
    checkBoxData(data) {
      this.newArticle.catalogs = data.catalogs
      this.newArticle.ceilings = data.ceilings
    },
    async saveArticle() {
      this.show = false
      await this.ADD_ARTICLE(this.newArticle)
      this.newArticle.images = []
      this.subArticle.images = []
      this.newArticle = {
        title: '',
        description: '',
        metaDescription: '',
        images: [],
        catalogs: [],
        ceilings: [],
        subArticles: []
      }
      this.subArticle = {
        description: '',
        images: '',
      }
      this.show = true
    },
    makeShowTrue() {

    },
    textChange() {
      this.disabled = false
      this.addBlockButtonColor = 'red'
    },

    async imageData(imageData) {
      this.newArticle.images = await imageData
    },

    async addSubArticle() {
      if (!this.subArticleShow) {
        this.subArticleShow = true
        this.buttonText = 'Сохранить блок'
      } else {
        await this.newArticle.subArticles.push(this.subArticle)
        this.subArticleShow = false
        this.buttonText = 'Добавить еще блок'
        this.subArticle = {
          description: '',
          images: '',
        }
        this.addBlockButtonColor = 'blue'
      }
    },
    async subArticleImageData(imageData) {
      this.subArticle.images = await imageData
      this.addBlockButtonColor = 'red'
    },
    ...mapActions({
      ADD_ARTICLE: 'article/ADD_ARTICLE',
      FETCH_ARTICLES: 'article/FETCH_ARTICLES',
      FETCH_CEILING_CATALOG: 'catalog/FETCH_CEILING_CATALOG',
      FETCH_CEILINGS: 'catalogItems/FETCH_CEILINGS',

    }),
    async deleteArticle(id) {
      await this.$axios.$delete('/admin/Article/' + id)
      await this.FETCH_ARTICLES()
    }
  }
  ,
  components: {
    AddImageComponent,
    TiptapVuetify, clipperBasic, clipperPreview, vCatalogCheckBoxes
  }
  ,
  mounted() {
    this.FETCH_ARTICLES()
    this.FETCH_CEILING_CATALOG()
    this.FETCH_CEILINGS()
  }
}
</script>

<style scoped>
.input-field-file {
  display: none;
}

.preview-image {
  width: 60vw;
  padding: 15px;
  margin: 15px;
  border: 1px solid #999;
  border-radius: 5px;
  box-shadow: 5px 6px 16px rgba(0, 0, 0, 0.15);
}

.thumbs {
  max-width: 150px;
  margin: 15px;
}

.my-clipper {
  width: 100%;
  max-width: 300px;
}

.placeholder {
  text-align: center;
  padding: 20px;
  background-color: lightgray;
}
</style>
