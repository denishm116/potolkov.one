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
          class="mx-auto"

        >
          <v-subheader>Редактирование каталога потолков</v-subheader>

          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item>


                <v-row>

                  <v-col>

                    <v-text-field
                      @input="activeButton()"
                      label="Название категории"
                      outlined
                      dense
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
                      v-model="newCategory.parent_id"
                    ></v-select>


                  </v-col>

                  <v-col cols="2"
                         class="flex-grow-0 flex-shrink-0">
                    <v-btn
                      color="access accent-4"
                      @click="saveCatalogItem()"
                      :disabled="activeButtonVar"
                    >
                      Сохранить
                    </v-btn>


                  </v-col>

                </v-row>

              </v-list-item>

<!--              <v-file-input-->
<!--                small-chips-->
<!--                multiple-->
<!--                outlined-->
<!--                dense-->
<!--                name="image"-->
<!--                label="Нажмите здесь, чтобы выбрать изображения"-->
<!--                v-model="files"-->
<!--                @change="onFileChange"-->
<!--              ></v-file-input>-->
              <v-btn @click="onButtonClick">
                <v-icon>mdi-paperclip</v-icon>
                Select File
              </v-btn>

              <v-text-field
                v-model="formData.displayFileName"
                readonly
              ></v-text-field>
                            <input multiple class="input-field-file" type="file" ref="fupload" @change="onFileChange">

              <!--              <div v-for="file in files">Whitehaven-->


              <v-card class="d-inline-block mx-auto">
                <v-container>
                  <v-row justify="space-between">
                    <v-col cols="auto" v-if="readyToUpload">

                      <img class="preview-image"

                        :src="formData.uploadFileData"
                      >
                    </v-col>


                  </v-row>
                </v-container>
              </v-card>






              <v-btn
                color="access accent-4"
                @click="picture()"

              >
                Картинка
              </v-btn>

              <ul>
                <template v-for="cat in catalogList">

                  <li>
                    <template v-for="depth in cat.depth">
                      --
                    </template>
                    {{cat.title }}

                  </li>

                </template>
              </ul>


            </v-list-item-content>


          </v-list-item>


        </v-card>
      </v-col>

    </v-row>


  </div>
</template>


<script>


  export default {
    layout: 'admin',

    data() {
      return {
        // status: this.$auth.user.status,
        newCategory: {
          title: '',
          parent_id: ''
        },
        files: [],
        catalog: [],
        catalogList: '',
        activeButtonVar: true,
        filesOrder: [],
        filen: {
          data: ''
        },
        formData: {
          displayFileName: null,
          uploadFileData: null,
          file: null
        }
      }
    },

    methods: {
      picture() {
        console.log(this.files)
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

      async saveCatalogItem() {
        await this.$axios.$post('admin/catalog', this.newCategory)
        await this.getCatalog()
      },

      onFileChange(event) {
        if (event.target.files && event.target.files.length) {
          let file = event.target.files[0];
          this.formData.file = file;
          this.formData.displayFileName =
            event.target.files[0].name +
            " (" +
            this.calcSize(file.size) +
            "Kb)";
          let reader = new FileReader();
          reader.onload = e => {
            this.formData.uploadFileData = e.target.result;
          };
          reader.readAsDataURL(file);
        }
      },
      onButtonClick() {
        this.$refs.fupload.click();
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
        return (this.formData.uploadFileData);
      },

    },
  }
</script>

<style scoped>

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
    width: 250px;
    padding: 15px;
    border: 1px solid #999;
    border-radius: 5px;
  }
</style>
