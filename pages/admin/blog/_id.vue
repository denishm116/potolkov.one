<template>
  <div class="bg-grey">
    <v-row no-gutters>
      <v-col>
        <span class="grey--text text--darken-3 text-right text-uppercase text-lg-h5 font-weight-bold ">Редактирование статьи: {{
            article.title
          }}</span>
      </v-col>
      <v-col class="d-flex justify-end">
        <v-btn :color="buttonColor" class="white--text" :disabled="disabled" @click="saveChanges" :class="{save_changes}">Сохранить изменения</v-btn>
      </v-col>
    </v-row>


    <v-row no-gutters class="mt-3">
      <v-col>

        <v-card class="mx-auto pa-5">
          <v-subheader>Отредактируйте необходимые поля
          </v-subheader>
          <v-row>
            <v-col>
              <v-text-field

                label="Заголовок статьи h1"
                outlined
                dense
                @change="textChange"
                v-model="article.title"
              ></v-text-field>
            </v-col>
            <v-col>

            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-text-field
                @change="textChange"
                label="Meta Descrption"
                outlined
                dense
                v-model="article.meta_description"
              ></v-text-field>
            </v-col>
            <v-col>

            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <ClientOnly>
                <!-- Use the component in the right place of the template -->
                <tiptap-vuetify v-model="article.description" :extensions="extensions" @input="textChange"/>
                <template #placeholder>
                  Подождите капельку...
                </template>
              </ClientOnly>
            </v-col>
          </v-row>
          <v-row class="mt-3" align-content="space-between">
            <v-col v-for="(image, index) in this.ARTICLE.images" align-self="center" :key="index">
              <v-card
                class="mx-auto"
                max-width="400"
              >
                <v-img :src="path + image.path" class="align-end"></v-img>
                <v-card-actions>
                  <v-btn
                    class="del"
                    color="error"
                    fab
                    x-small
                    @click="deleteImage(image.id)"
                  >
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>

                  <v-spacer></v-spacer>
                  <v-btn
                    :color="image.main ? 'warning' : 'primary'"
                    dark
                    @click="changeMainImage(image.id)"
                  >
                    {{ image.main ? 'основное фото' : 'сделать основным' }}
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
          <AddImageComponent @imageData="imageData" :show="show"></AddImageComponent>

          <v-row v-for="(subArticle, index) in subArticles" :key="index">
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
              <v-row class="mt-3" align-content="space-between">
                <v-col v-for="(image, imgIndex) in subArticle.images" align-self="center" :key="imgIndex">
                  <v-card
                    class="mx-auto"
                    max-width="400"
                  >
                    <v-img :src="path + image.path" class="align-end"></v-img>

                    <v-card-actions>
                      <v-btn
                        class="del"
                        color="error"
                        fab
                        x-small
                        @click="deleteSubArticleImage(image.id)"
                      >
                        <v-icon>mdi-delete</v-icon>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
              <add-image-component
                @imageData="subArticleImageData($event, subArticle.id)"
                :show="true"></add-image-component>
            </v-col>
          </v-row>

          <v-row v-for="(subArticle, index) in addNewSubArticles" :key="index">
            <v-col>
              <v-row>
                <v-col>
                  <ClientOnly>
                    <!-- Use the component in the right place of the template -->
                    <tiptap-vuetify v-model="subArticle.description" :extensions="extensions"  @input="textChange"/>
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




          <v-row v-if="addNewSubArticleShow">
            <v-col>
              <v-row>
                <v-col>
                  <ClientOnly>
                    <!-- Use the component in the right place of the template -->
                    <tiptap-vuetify v-model="addNewSubArticle.description" :extensions="extensions"/>
                    <template #placeholder>
                      Подождите капельку...
                    </template>
                  </ClientOnly>
                </v-col>
              </v-row>
              <add-image-component @imageData="addNewSubArticleImageData" :show="true"></add-image-component>
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
            :checkedCatalog="catalogCheckBox"
            :checkedCeilings="ceilingsCheckBox"
            :ceilingCatalog="CEILING_CATALOG"
            @checkBoxData="checkBoxData"
          ></v-catalog-check-boxes>
        </v-card>
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

  components: {
    TiptapVuetify, clipperBasic, clipperPreview, vCatalogCheckBoxes, AddImageComponent
  },

  layout: 'admin',

  data() {
    return {
      addBlockButtonColor: 'blue',
      buttonText: 'Добавить блок',
      addNewSubArticleShow: false,
      addNewSubArticle: {
        description: '',
        images: ''
      },
      addNewSubArticles: [],
      showForm: false,
      buttonColor: 'red',
      ceilingsCheckBox: [],
      catalogCheckBox: [],
      subArticles: [],
      newSubArticle: {
        description: '',
        images: ''
      },
      disabled: true,
      save_changes: false,
      show: true,
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
      ARTICLE: 'article/ARTICLE',
      ARTICLES: 'article/ARTICLES',
      CEILINGS: 'catalogItems/CEILINGS',
      CEILING_CATALOG: 'catalog/CEILING_CATALOG',
    }),
    article() {
      return {
        title: this.ARTICLE.title,
        description: this.ARTICLE.description,
        meta_description: this.ARTICLE.meta_description,
        images: this.ARTICLE.images,
        catalogs: this.catalogCheckBox,
        ceilings: this.ceilingsCheckBox,
        subArticles: this.subArticles
      }
    },
    readyToUpload() {
      if (this.show)
        return this.formData.length
    },
    path() {
      return process.env.baseURL + 'storage/'
    },
  },

  methods: {
    ...mapActions({
      FETCH_ARTICLE: 'article/FETCH_ARTICLE',
      ADD_ARTICLE: 'article/ADD_ARTICLE',
      UPDATE_ARTICLE: 'article/UPDATE_ARTICLE',
      FETCH_ARTICLES: 'article/FETCH_ARTICLES',
      FETCH_CEILING_CATALOG: 'catalog/FETCH_CEILING_CATALOG',
      FETCH_CEILINGS: 'catalogItems/FETCH_CEILINGS',

    }),
    checkBoxData(data) {
      this.catalogCheckBox = data.catalogs
      this.ceilingsCheckBox = data.ceilings
      this.textChange()
    },
    async saveChanges() {
      this.article.subArticles = this.article.subArticles.concat(this.addNewSubArticles)
      await this.UPDATE_ARTICLE({url: 'admin/Article/' + this.$route.params.id, params: this.article})
      await this.FETCH_ARTICLE(this.$route.params.id)
      this.ceilingsCheckBox = this.article.ceilings
      this.catalogCheckBox = this.article.catalogs
      this.disabled = true
    },
    async addSubArticle() {
      if (!this.addNewSubArticleShow) {
        this.addNewSubArticleShow = true
        this.buttonText = 'Сохранить блок'
      } else {
        await this.addNewSubArticles.push(this.addNewSubArticle)
        this.addNewSubArticleShow = false
        this.buttonText = 'Добавить еще блок'
        this.addNewSubArticle = {
          description: '',
          images: '',
        }
      }
    },
    textChange() {
      this.disabled = false
      this.save_changes = true
    },
    async imageData(imageData) {
      await this.$axios.$post('admin/images/addImages', {
        entity: this.ARTICLE.id,
        images: imageData,
        entityName: 'Article'
      })
      await this.FETCH_ARTICLE(this.$route.params.id)
      this.show = false
    },
    async subArticleImageData(imageData, id) {
      this.newSubArticle.images = await imageData
      await this.$axios.$post('admin/images/addImages', {
        entity: id,
        images: imageData,
        entityName: 'SubArticle'
      })
      window.location.reload(false);
    },
    async addNewSubArticleImageData(imageData, id) {
      this.addNewSubArticle.images = await imageData
    },
    onButtonClick() {
      this.$refs.fupload.click();
    },
    calcSize(size) {
      return Math.round(size / 1024);
    },
    async deleteImage(id) {
      await this.$axios.$get('admin/images/deleteImage/' + id)
      await this.FETCH_ARTICLE(this.$route.params.id)
    },
    async deleteSubArticleImage(id) {
      await this.$axios.$get('admin/images/deleteImage/' + id)
      window.location.reload(false);
    },
    async changeMainImage(id) {
      await this.$axios.$get('admin/images/changeMainImage/' + id)
      await this.FETCH_ARTICLE(this.$route.params.id)
    },
    checkboxes() {
      let article = this.ARTICLE
      this.ceilingsCheckBox = article.ceilings.map(item => {
        return item.pivot.articable_id
      })
      this.catalogCheckBox = article.catalogs.map(item => {
        return item.pivot.articable_id
      })
      this.subArticles = article.sub_articles.map(item => {
        return {
          article_id: item.article_id,
          description: item.description,
          id: item.id,
          images: item.images,
        }
      })
    },
  },

  async mounted() {
    await this.FETCH_ARTICLES()
    await this.FETCH_ARTICLE(this.$route.params.id)
    await this.FETCH_CEILING_CATALOG()
    await this.FETCH_CEILINGS()
    this.checkboxes()
  }
}
</script>

<style scoped>

.save_changes {
  position: fixed;
  bottom: 15px;
  left: 15%;
  z-index: 4;
  transition: .5s;
}

.del {
  margin-left: auto
}

.input-field-file {
  display: none;
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
