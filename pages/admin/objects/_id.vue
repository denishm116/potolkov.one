<template>

  <div class="bg-grey pa-5">

    <v-row no-gutters>
      <v-col>
        <span
          class="grey--text text--darken-3 text-right text-uppercase text-lg-h5 font-weight-bold ">Редактировоать {{
            OUR_OBJECT.title
          }}</span>
      </v-col>
      <v-col class="d-flex justify-end">
        <v-btn :color="buttonColor" :disabled="disabled" @click="saveChanges">Сохранить изменения</v-btn>
      </v-col>
    </v-row>
    <v-card class="mt-5 pa-5">
      <v-subheader>Заполните необходимые поля (Название категории, родительскую категорию, описание и изображения)
      </v-subheader>
      <v-row class="pa-3">
        <v-col>

          <v-row>
            <v-col>
              <v-text-field
                label="Название"
                outlined
                dense
                v-model="formData.title"
                @input="textChange"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-text-field
                label="Адрес"
                outlined
                dense
                v-model="formData.address"
                @input="textChange"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-text-field
                label="Площадь"
                outlined
                dense
                v-model="formData.square"
                @input="textChange"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                label="Стоимость"
                outlined
                dense
                v-model="formData.price"
                @input="textChange"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-subheader>Описание
              </v-subheader>
              <ClientOnly>

                <!-- Use the component in the right place of the template -->
                <tiptap-vuetify
                  :extensions="extensions"
                  v-model="formData.description"
                  @input="textChange"
                />
                <template #placeholder>
                  Подождите капельку...
                </template>
              </ClientOnly>

            </v-col>
          </v-row>

          <v-row class="mt-3" align-content="space-between">

            <v-col v-for="(image, index) in this.OUR_OBJECT.images" align-self="center" :key="index">
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

          <v-row>
            <v-col>
              <v-btn @click="onButtonClick">
                <v-icon>mdi-paperclip</v-icon>
                Добавить изображения
              </v-btn>
              <input multiple class="input-field-file" type="file" ref="fupload" @change="onFileChange">
            </v-col>
          </v-row>

          <v-row justify="space-between">
            <v-col cols="auto" v-if="readyToUpload">
              <v-row v-for="(file, index) in imgData" :key="index">
                <v-col>

                  <clipper-basic
                    class="my-clipper"
                    :src="file.uploadFileData"
                    :ref="'clipper' + file.key"
                    :preview="'my-preview' + file.key"
                    :corner="true"
                    :init-width="100"
                    :init-height="100"
                    :ratio="265/180"
                  >
                  </clipper-basic>
                  {{ file.displayFileName }}
                </v-col>
                <v-col>
                  <clipper-preview :name="'my-preview' + file.key" class="my-clipper">
                    <div class="placeholder" slot="placeholder">preview area</div>
                  </clipper-preview>

                </v-col>
              </v-row>

              <v-card-actions>
                <v-btn
                  color="orange"
                  @click="addImages"
                >Сохранить
                </v-btn>
              </v-card-actions>

            </v-col>
          </v-row>

        </v-col>
      </v-row>

      <v-catalog-check-boxes
        :checkedCatalog="catalogCheckBox"
        :checkedCeilings="ceilingsCheckBox"
        :ceilingCatalog="CEILING_CATALOG"
        @checkBoxData="checkBoxData"
      ></v-catalog-check-boxes>

    </v-card>
  </div>
</template>
<script>
import {clipperBasic, clipperPreview} from 'vuejs-clipper'
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
import {mapGetters, mapActions} from 'vuex'
import vCatalogCheckBoxes from "@/components/partials/vCatalogCheckBoxes";

export default {

  components: {
    TiptapVuetify, clipperBasic, clipperPreview, vCatalogCheckBoxes
  },

  layout: 'admin',

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
      disabled: true,
      buttonColor: 'grey',
      imageData: [],
      imgData: [],
      ceilingsCheckBox: [],
      catalogCheckBox: [],
    }
  },

  methods: {
    checkBoxData(data) {
      this.catalogCheckBox = data.catalogs
      this.ceilingsCheckBox = data.ceilings
      this.textChange()
    },

    saveChanges() {
      this.UPDATE_OUR_OBJECT({url: 'admin/ourObject/' + this.$route.params.id, params: this.formData})
      this.FETCH_OUR_OBJECT(this.$route.params.id)
      this.disabled = true
    },
    textChange() {
      this.disabled = false
    },

    async deleteImage(id) {
      await this.$axios.$get('admin/ourObject/deleteImage/' + id)
      await this.FETCH_OUR_OBJECT(this.$route.params.id)
    },

    async changeMainImage(id) {
      await this.$axios.$get('admin/ourObject/changeMainImage/' + id)
      await this.FETCH_OUR_OBJECT(this.$route.params.id)
    },

    async addImages() {
      for (let prop in this.$refs) {
        if (prop.substr(0, 7) === 'clipper') {
          const canvas = this.$refs[prop][0].clip()
          let main = 0;
          this.imageData.push(
            {
              image: canvas.toDataURL("image/jpeg", 1),
              main: main
            }
          )
        }
      }
      await this.$axios.$post('admin/ourObject/addImages', {entity: this.OUR_OBJECT.id, images: this.imageData})
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
          this.imgData.push(temp)
        }
      }
    },
    onButtonClick() {
      this.$refs.fupload.click();
    },
    calcSize(size) {
      return Math.round(size / 1024);
    },
    ...mapActions({
      ADD_OUR_OBJECT: 'our_objects/ADD_OUR_OBJECT',
      UPDATE_OUR_OBJECT: 'our_objects/UPDATE_OUR_OBJECT',
      FETCH_OUR_OBJECT: 'our_objects/FETCH_OUR_OBJECT',
      FETCH_CEILING_CATALOG: 'catalog/FETCH_CEILING_CATALOG',
      FETCH_CEILINGS: 'catalogItems/FETCH_CEILINGS',
    }),
    checkboxes() {
      let p = this.OUR_OBJECT
      this.ceilingsCheckBox = p.ceilings.map(item => {
        return item.pivot.presenter_id
      })
      this.catalogCheckBox = p.catalogs.map(item => {
        return item.pivot.presenter_id
      })
    }
  },
  computed: {

    path() {
      return process.env.baseURL + 'storage/'
    },
    readyToUpload() {
      if (this.imgData.length)
        return this.imgData.length
    },
    formData() {
      return {
        title: this.OUR_OBJECT.title,
        address: this.OUR_OBJECT.address,
        square: this.OUR_OBJECT.square,
        description: this.OUR_OBJECT.description,
        price: this.OUR_OBJECT.price,
        images: this.OUR_OBJECT.images,
        catalogs: this.catalogCheckBox,
        ceilings: this.ceilingsCheckBox,
      }
    },
    ...mapGetters({
      CEILINGS: 'catalogItems/CEILINGS',
      CEILING_CATALOG: 'catalog/CEILING_CATALOG',
      OUR_OBJECT: 'our_objects/OUR_OBJECT'
    })
  },
  async mounted() {
    await this.FETCH_CEILING_CATALOG()
    await this.FETCH_CEILINGS()
    await this.FETCH_OUR_OBJECT(this.$route.params.id)
    this.checkboxes()
  }

}
</script>

<style scoped>
.imgWrapper {
  display: flex;
  flex-direction: column;
}

.imgWrapperRow {
  display: flex;
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
