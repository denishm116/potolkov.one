<template>
  <div class="bg-grey">

    <v-row no-gutters
    >
      <v-col>
        <span class="grey--text text--darken-3 text-right text-uppercase text-lg-h5 font-weight-bold ">Создание новой категории</span>
      </v-col>

    </v-row>

    <v-row no-gutters class="pt-10">
      <v-col>
        <v-card
          class="mx-auto pa-5"

        >
          <v-subheader>Заполните необходимы поля (Название категории, родительскую категорию, описание и изображения)
          </v-subheader>

          <v-row>

            <v-col>

              <v-text-field
                @input="activeButton()"
                label="Название категории"
                outlined
                dense
                :error-messages="titleErrors"
                v-model="newCategory.title"
              ></v-text-field>

            </v-col>

            <v-col>

              <v-select
                :items="catalog"
                label="Выберите родительскую категорию"
                item-text="title"
                item-value="id"
                dense
                outlined
                :error-messages="parent_idErrors"
                v-model="newCategory.parent_id"
              ></v-select>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <ClientOnly>
                <!-- Use the component in the right place of the template -->
                <tiptap-vuetify v-model="newCategory.description" :extensions="extensions"/>

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

              <v-radio-group v-model="newCategory.mainImage" column>
                <v-row v-for="(file, index) in formData" :key="index">
                  <v-col>
                    <clipper-basic
                      class="my-clipper"
                      :src="file.uploadFileData"
                      :ref="'clipper' + file.key"
                      :preview="'my-preview' + file.key"
                      :corner="true"
                      init-width="100"
                      init-height="100"
                      :ratio="265/180"
                    >
                    </clipper-basic>
                  </v-col>
                  <v-col>
                    <clipper-preview :name="'my-preview' + file.key" class="my-clipper">
                      <div class="placeholder" slot="placeholder">preview area</div>
                    </clipper-preview>
                  </v-col>

                  <v-radio label="Сделать основной" :value="file.key"></v-radio>

                </v-row>
              </v-radio-group>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-btn
                color="access accent-4 "
                @click="onButton2Click"
              >
                Сохранить
              </v-btn>
            </v-col>
          </v-row>
          <v-card
            class="d-inline-flex pa-2"
            outlined
            tile
            v-for="(thumb, index) in resultURL" :key="index"
          >
            <div class="thumbs">
              <v-img :src="thumb"></v-img>
            </div>
          </v-card>
          <br>
          <br>
          <br>
          <br>
          <h1>Список категорий потолков</h1>
          <ul>
            <template v-for="cat in allCatalog">

              <li>
                <a href="#" @click.prevent="itemUp(cat.slug)">
                  <v-icon>mdi-arrow-up-bold-circle</v-icon>
                </a>
                <a href="#" @click.prevent="itemDown(cat.slug)">
                  <v-icon>mdi-arrow-down-bold-circle</v-icon>
                </a>
                <a href="#" @click.prevent="itemDelete(cat.slug)">
                  <v-icon>mdi-delete</v-icon>
                </a>
                <a href="#" @click.prevent="goTo(cat.slug)">
                  <template v-for="depth in cat.depth">
                    --
                  </template>
                  {{cat.title }}
                </a>
              </li>

            </template>
          </ul>
        </v-card>
      </v-col>
    </v-row>

  </div>
</template>


<script>

  import {clipperBasic, clipperPreview} from 'vuejs-clipper'
  import {mapGetters, mapActions} from 'vuex'
  import Editor from '@/components/partials/Editor'
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
  export default {
    transition: 'test',

    layout: 'admin',
    components: {
      clipperBasic, clipperPreview, TiptapVuetify
    },
    data() {
      return {
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
        newCategory: {
          title: '',
          parent_id: '',
          description: '',
          mainImage: ''
        },
        files: [],

        catalogList: '',
        activeButtonVar: true,
        filesOrder: [],
        formData: [],

        resultURL: []
      }
    },

    methods: {
      goTo(slug) {
        this.$router.push('/admin/catalog/' + slug)
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
      },
      onButtonClick() {
        this.$refs.fupload.click();
      },

      async itemUp(slug) {
        await this.$axios.$post('admin/catalog/' + slug + '/up')
        return this.fetchCatalog()
      },

      async itemDown(slug) {
        await this.$axios.$post('admin/catalog/' + slug + '/down')
        this.fetchCatalog()
      },

      async itemDelete(slug) {
        await this.$axios.$post('admin/catalog/' + slug + '/destroy')
        this.fetchCatalog()
      },

      onButton2Click() {
        let main = 0;
        for (let prop in this.$refs) {
          if (prop.substr(0, 7) === 'clipper') {
            const canvas = this.$refs[prop][0].clip()

            if (+prop.substr(7, 1) === this.newCategory.mainImage)
              main = 1
            this.resultURL.push(
              {
                image: canvas.toDataURL("image/jpeg", 1),
                main: main
              }
              )
          }
        }
        this.newCategory.files = this.resultURL

        this.$axios.$post('admin/catalog', this.newCategory)
          .then(() => {
            return this.fetchCatalog()
          })
      },

      calcSize(size) {
        return Math.round(size / 1024);
      },
      activeButton() {
        this.activeButtonVar = false
      },
      ...mapActions({
        fetchCatalog: 'catalog/fetchCatalog'
      })
    },

    mounted() {
      this.fetchCatalog()
    },
    computed: {
      ...mapGetters({
        allCatalog: 'catalog/allCatalog'
      }),
      readyToUpload() {
        return this.formData.length
      },
      titleErrors() {
        if (this.errors) return this.errors.title
      },
      parent_idErrors() {
        if (this.errors) return this.errors.parent_id
      },
      descriptionErrors() {
        if (this.errors) return this.errors.description
      },
      catalog() {
        const tmp777 = Array.from(this.allCatalog)
        let tmp = []
        tmp777.forEach((cat, index) => {
          if (cat.depth) {
            let def = ''
            for (let i = 0; i < cat.depth; i++) {
              def += "--"
            }
            tmp.push({
              'title': def + cat.title,
              'id': cat.id
            });
          } else {
            tmp.push({
              'title': cat.title,
              'id': cat.id
            })
          }
        })
        return tmp
      }
    },
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // Iconfonts for Vuetify. You need to leave only which one you use
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/4.4.95/css/materialdesignicons.min.css' }
    ]
  }
</script>

<style scoped>

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

  li {
    list-style-type: none;
  }

  .bg-grey {
    margin: 0;
    padding: 35px 35px 35px 35px;
    background-color: rgb(238, 238, 238);
    min-height: 100vh;
  }

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
</style>
