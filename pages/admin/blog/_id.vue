<template>
  <div class="bg-grey">
    <v-row no-gutters>
      <v-col>
        <span class="grey--text text--darken-3 text-right text-uppercase text-lg-h5 font-weight-bold ">Редактирование статьи: {{
            ARTICLE.title
          }}</span>
      </v-col>
      <v-col class="d-flex justify-end">
        <v-btn :color="buttonColor" :disabled="disabled" @click="saveChanges">Сохранить изменения</v-btn>
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
                <v-card-title>
                  <v-row>
                    <v-col>
                      <v-btn
                        class="del"
                        color="error"
                        fab
                        x-small
                        @click="deleteImage(image.id)"
                      >
                        <v-icon>mdi-delete</v-icon>
                      </v-btn>
                    </v-col>
                    <v-col>
                      <v-spacer></v-spacer>
                      <v-btn
                        :color="image.main ? 'warning' : 'primary'"
                        dark
                        @click="changeMainImage(image.id)"
                      >
                        {{ image.main ? 'основное фото' : 'сделать основным' }}
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-card-title>
                <v-card-actions>
                  <v-btn
                    color="orange lighten-2"
                    text
                    @click="showForm = !showForm"
                  >
                    Описание
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn
                    icon
                    @click="showForm = !showForm"
                  >
                    <v-icon>{{ showForm ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                  </v-btn>
                </v-card-actions>
                <v-expand-transition>
                  <div v-show="showForm">
                    <v-divider></v-divider>
                    <v-card-text>


                      <v-col>
                        <div><span class="font-weight-medium">Заголовок:</span> {{ image.title }}</div>
                        <div><span class="font-weight-medium">Описание:</span> {{ image.description }}</div>

                      </v-col>


                    </v-card-text>
                  </div>
                </v-expand-transition>
              </v-card>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-btn @click="onButtonClick">
                <v-icon>mdi-paperclip</v-icon>
                Прикрепить изображения
              </v-btn>
              <input multiple class="input-field-file" type="file" ref="fupload" @change="onFileChange">
            </v-col>
          </v-row>
          <v-row justify="space-between">
            <v-col cols="auto" v-if="readyToUpload">
              <v-card class="pa-5 my-5" v-for="(file, index) in formData"
                      :key="index">
                <v-row>
                  <v-col>
                    <clipper-basic
                      class="my-clipper"
                      :src="file.uploadFileData"
                      :ref="'clipper' + index"
                      :preview="'my-preview' + index"
                      :corner="true"
                      :init-width="100"
                      :init-height="100"
                      :ratio="265/180"
                    >
                    </clipper-basic>
                    {{ file.displayFileName }}
                  </v-col>
                  <v-col>
                    <clipper-preview :name="'my-preview' + index" class="my-clipper">
                      <div class="placeholder" slot="placeholder">preview area</div>
                    </clipper-preview>

                  </v-col>

                  <v-col>
                    <v-text-field
                      :ref="'title' + index"
                      label="Заголовок к картинке"
                      outlined
                      dense

                      v-model="file.title"
                    ></v-text-field>
                    <v-textarea
                      :ref="'description' + index"
                      outlined
                      name="input-7-4"
                      label="Описание к картинке"
                      v-model="file.description"
                    ></v-textarea>
                  </v-col>
                </v-row>

              </v-card>
              <v-card-actions>
                <v-btn
                  color="orange"
                  @click="saveImageData"
                >Сохранить
                </v-btn>
              </v-card-actions>


            </v-col>
          </v-row>

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

export default {
  layout: 'admin',
  data() {
    return {
      showForm: false,
      buttonColor: 'grey',
      ceilingsCheckBox: [],
      catalogCheckBox: [],
      disabled: true,
      show: true,
      imgData: [],
      imageData: [],
      formData: [],
      imageTitle: '',
      imageDescription: '',
      mainImageRadio: 0,
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
    article() {
      return {
        title: this.ARTICLE.title,
        description: this.ARTICLE.description,
        meta_description: this.ARTICLE.meta_description,
        images: this.ARTICLE.images,
        catalogs: this.catalogCheckBox,
        ceilings: this.ceilingsCheckBox,
      }

    },
    ...mapGetters({
      ARTICLE: 'article/ARTICLE',
      ARTICLES: 'article/ARTICLES',
      CEILINGS: 'catalogItems/CEILINGS',
      CEILING_CATALOG: 'catalog/CEILING_CATALOG',
    }),
    readyToUpload() {
      if (this.show)
        return this.formData.length
    },
    path() {
      return process.env.baseURL + 'storage/'
    },
  },

  methods: {
    checkBoxData(data) {
      this.catalogCheckBox = data.catalogs
      this.ceilingsCheckBox = data.ceilings
      this.textChange()
    },
    saveChanges() {
      this.UPDATE_ARTICLE({url: 'admin/Article/' + this.$route.params.id, params: this.article})
      this.FETCH_ARTICLE(this.$route.params.id)
      this.ceilingsCheckBox = this.article.ceilings
      this.catalogCheckBox = this.article.catalogs
      this.disabled = true
    },

    textChange() {
      this.disabled = false
    },

    async saveImageData() {
      let titles = []
      let descriptions = []
      let i = 0
      for (let title in this.$refs) {
        if (title.substr(0, 5) === 'title') {
          titles.push(this.$refs[title][0].value)
        }
      }
      for (let description in this.$refs) {
        if (description.substr(0, 11) === 'description') {
          descriptions.push(this.$refs[description][0].value)
        }
      }
      for (let img in this.$refs) {
        if (img.substr(0, 7) === 'clipper') {
          const canvas = this.$refs[img][0].clip()
          let main = 0;
          this.imageData.push({
            image: canvas.toDataURL("image/jpeg", 1),
            main: main,
            title: titles[i],
            description: descriptions[i],
          })
          i++
        }
      }
      await this.$axios.$post('admin/Article/addImages', {entity: this.ARTICLE.id, images: this.imageData})
      window.location.reload(false);
    },

    onFileChange(event) {
      if (event.target.files && event.target.files.length) {
        let files = event.target.files
        for (let i = 0; i < files.length; i++) {
          let temp = {
            displayFileName: event.target.files[i].name +
              " (" +
              this.calcSize(files[i].size) +
              "Kb)",
            uploadFileData: '',
            file: files[i],
            key: i,
          }
          let reader = new FileReader();
          reader.onload = e => {
            temp.uploadFileData = e.target.result;
          };
          reader.readAsDataURL(files[i]);
          this.formData.push(temp)
        }
      }
      // setTimeout(this.sendImageData, 500);
    },
    onButtonClick() {
      this.$refs.fupload.click();
    },
    calcSize(size) {
      return Math.round(size / 1024);
    },
    ...mapActions({
      FETCH_ARTICLE: 'article/FETCH_ARTICLE',
      ADD_ARTICLE: 'article/ADD_ARTICLE',
      UPDATE_ARTICLE: 'article/UPDATE_ARTICLE',
      FETCH_ARTICLES: 'article/FETCH_ARTICLES',
      FETCH_CEILING_CATALOG: 'catalog/FETCH_CEILING_CATALOG',
      FETCH_CEILINGS: 'catalogItems/FETCH_CEILINGS',

    }),
    async deleteImage(id) {
      await this.$axios.$get('admin/Article/deleteImage/' + id)
      await this.FETCH_ARTICLE(this.$route.params.id)
    },

    async changeMainImage(id) {
      await this.$axios.$get('admin/Article/changeMainImage/' + id)
      await this.FETCH_ARTICLE(this.$route.params.id)
    },
    checkboxes() {
      let article = this.ARTICLE
      this.imageTitle = article.images.map(item => {
        return item.title
      })
      this.imageDescription = article.images.map(item => {
        return item.description
      })
      this.ceilingsCheckBox = article.ceilings.map(item => {
        return item.pivot.articable_id
      })
      this.catalogCheckBox = article.catalogs.map(item => {
        return item.pivot.articable_id
      })

    },
  },


  components: {
    TiptapVuetify, clipperBasic, clipperPreview
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
