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
                </th> <th>Мета-описание</th>
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
                  <span v-for="cats in item.catalogs ">{{cats.title}}, </span>
                </td>

                <td>
                  <span v-for="cats in item.ceilings ">{{cats.title}}, </span>
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

              <v-radio-group v-model="mainImageRadio" column @change="saveImageData" v-for="(file, index) in formData"
                             :key="index">

                <v-card class="pa-5 mx-5">
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
                      <v-radio label="Сделать основной" :value="index"></v-radio>
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

              </v-radio-group>

            </v-col>
          </v-row>

          <v-row>
            <v-col>
              Категория
              <v-row>
                <v-col v-for="(catalog, index) in CEILING_CATALOG" :key="index">
                  <v-checkbox
                    :label="catalog.title"
                    :value="catalog.id"

                    :key="index"
                    v-model="newArticle.catalogs"

                  ></v-checkbox>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              Потолок
              <v-row>
                <v-col v-for="(ceiling, index) in CEILINGS" :key="index">
                  <v-checkbox
                    :label="ceiling.title"
                    :value="ceiling.id"

                    :key="index"
                    v-model="newArticle.ceilings"
                    @change="textChange"
                  ></v-checkbox>
                </v-col>
              </v-row>
            </v-col>
          </v-row>

        </v-card>

      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-col class="d-flex justify-end">
          <v-btn @click="saveArticle">Сохранить</v-btn>
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

export default {
  layout: 'admin',
  data() {
    return {

      disabled: true,
      show: true,
      imageData: [],
      formData: [],
      mainImageRadio: 0,
      newArticle: {
        title: '',
        description: '',
        metaDescription: '',
        images: [],
        catalogs: [],
        ceilings: [],
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
    readyToUpload() {
      if (this.show)
        return this.formData.length
    },
  },
  methods: {
    saveArticle() {
      this.saveImageData()
      this.newArticle.images = this.imageData
      this.ADD_ARTICLE(this.newArticle)
      console.log(this.newArticle) //Отправляем на бэк
      this.newArticle = {
        title: '',
        description: '',
        metaDescription: '',
        images: [],
        catalogs: [],
        ceilings: [],
      }
      this.imageData = []
      this.formData = []

    },
    textChange() {
      this.disabled = false
    },

    saveImageData() {
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
          if (+img.substr(7, 1) === this.mainImageRadio)
            main = 1
          this.imageData.push({
            image: canvas.toDataURL("image/jpeg", 1),
            main: main,
            title: titles[i],
            description: descriptions[i],
          })
          i++
        }
      }
      return this.imageData
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
      ADD_ARTICLE: 'article/ADD_ARTICLE',
      FETCH_ARTICLES: 'article/FETCH_ARTICLES',
      FETCH_CEILING_CATALOG: 'catalog/FETCH_CEILING_CATALOG',
      FETCH_CEILINGS: 'catalogItems/FETCH_CEILINGS',

    }),
    async deleteArticle(id) {
      await this.$axios.$delete('/admin/Article/' + id)
      await this.FETCH_ARTICLES()
    }
  },
  components: {
    TiptapVuetify, clipperBasic, clipperPreview
  },
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
