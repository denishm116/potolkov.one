<template>
  <div class="bg-grey">

    <v-row no-gutters
    >
      <v-col>
        <span class="grey--text text--darken-3 text-right text-uppercase text-lg-h5 font-weight-bold ">Редактирование каталога потолков</span>
      </v-col>

    </v-row>

    <v-row no-gutters class="pt-10">
      <v-col>
        <v-card
          class="mx-auto pa-5"

        >
          <v-subheader>Редактирование каталога потолков</v-subheader>

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
              <v-textarea
                outlined
                dense
                name="input-7-4"
                label="Описание"
                v-model="newCategory.description"
                :error-messages="descriptionErrors"
              ></v-textarea>
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
              <div v-for="file in formData" :key="file.key">
                <v-row>
                  <v-col>

                    <clipper-basic
                      class="my-clipper"
                      :src="file.uploadFileData"
                      :ref="'clipper' + file.key"
                      :preview="'my-preview' + file.key"
                    >

                    </clipper-basic>

                  </v-col>
                  <v-col>
                    <clipper-preview :name="'my-preview' + file.key" class="my-clipper">
                      <div class="placeholder" slot="placeholder">preview area</div>
                    </clipper-preview>
                  </v-col>
                </v-row>
              </div>
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
            v-for="thumb in resultURL" :key="1"
          >
            <div class="thumbs">
              <v-img :src="thumb"></v-img>
            </div>
          </v-card>
<br>
<br>
<br>
<br>
          <h1>Спивок категорий потолков</h1>
          <ul>
            <template v-for="cat in catalogList">

              <li>
                <a href="#" @click.prevent="itemUp(cat.slug)"><v-icon>mdi-arrow-up-bold-circle</v-icon></a>
                <a href="#" @click.prevent="itemDown(cat.slug)"><v-icon>mdi-arrow-down-bold-circle</v-icon></a>
                <a href="#" @click.prevent="itemDelete(cat.slug)"><v-icon>mdi-delete</v-icon></a>
               <a href="#" @click.prevent="goTo(cat.slug)"><template v-for="depth in cat.depth">
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

  export default {
    transition:  'test',

    layout: 'admin',
    components: {
      clipperBasic, clipperPreview
    },
    data() {
      return {
        // status: this.$auth.user.status,
        newCategory: {
          title: '',
          parent_id: '',
          description: ''
        },
        files: [],
        catalog: [],
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

      async getCatalog() {
        const catalog = await this.$axios.$get('admin/catalog')
        this.catalogList = catalog
        let tmp = []
        catalog.forEach((cat, index) => {
          if (cat.depth) {
            let def = ''
            for (let i = 0; i < cat.depth; i++) {
              def += "--"
            }
            let tempObj =
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
        this.catalog = tmp
        return tmp
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

            // let alias = 'clipper' + i
            // let canvas = this.$refs.alias.clip();
            // result.push(canvas.toDataURL("image/jpeg", 1))//canvas->image

          }

        }
        // console.log(this.$refs['clipper0'])
      },
      onButtonClick() {
        this.$refs.fupload.click();
      },

     async itemUp(slug) {
       const catalog = await this.$axios.$post('admin/catalog/' + slug + '/up')
       this.getCatalog()
      },

     async itemDown(slug) {
       const catalog = await this.$axios.$post('admin/catalog/' + slug + '/down')
       this.getCatalog()
      },

     async itemDelete(slug) {
       const catalog = await this.$axios.$post('admin/catalog/' + slug + '/destroy')
       this.getCatalog()
      },

      onButton2Click() {
        for (let prop in this.$refs) {
          let n = ''
          if (prop.substr(0, 7) === 'clipper') {
            const canvas = this.$refs[prop][0].clip()
            this.resultURL.push(canvas.toDataURL("image/jpeg", 1))
          }
        }
        this.newCategory.files = this.resultURL
        this.$axios.$post('admin/catalog', this.newCategory)
          .then(() => {
            return this.getCatalog()
          })


      },

      calcSize(size) {
        return Math.round(size / 1024);
      },
      activeButton() {
        this.activeButtonVar = false
      }
    },

    mounted() {
      this.getCatalog()

    },
    computed: {
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

    },
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
