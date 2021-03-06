<template>
  <v-row>
    <v-col>
      <v-card class="mx-auto pa-5">
        <v-row>
          <v-col>
            <v-text-field
              label="Название"
              outlined
              dense
              :error-messages="titleErrors"
              v-model="editedEntity.title"

              @change="textChange"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-select
              :items="catalog"
              label="Выберите категорию"
              item-text="title"
              item-value="id"
              dense
              outlined
              v-model="editedEntity.parent_id"

              @change="textChange"
            ></v-select>
          </v-col>
        </v-row>

        <ClientOnly>
          <!-- Use the component in the right place of the template -->
          <tiptap-vuetify v-model="editedEntity.description" :extensions="extensions" @input="textChange"/>
          <template #placeholder>
            Подождите капельку...
          </template>
        </ClientOnly>


        <v-row class="mt-3" align-content="space-between">
          <v-col v-for="(image, index) in this.category.images" align-self="center" :key="index">
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
            <v-row v-for="(file, index) in formData" :key="index">
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
      </v-card>
    </v-col>
  </v-row>
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

export default {
  props: [
    'categoryInit', 'catalogInit', 'slug', 'parentId'
  ],
  data() {
    return {

      imageData: [],
      formData: [],
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
    readyToUpload() {
      if (this.formData.length)
        return this.formData.length
    },
    path() {
      return process.env.baseURL + 'storage/'
    },
    titleErrors() {
      if (this.errors) return this.errors.title
    },
    catalog() {
      let arr = Array.from(this.catalogInit).map(cat => {
        return {
          'title': cat.depth ? '--' + cat.title : '' + cat.title,
          'id': cat.id,
          'slug': cat.slug,
        }
      })
      arr.push({
        'title': 'Без категории',
        'id': 0,
        'slug': 0,
      })
      return arr
    },
    category() {
      return this.categoryInit
    },
    editedEntity() {
      return {
        title: this.category.title,
        parent_id: this.parentId,
        description: this.category.description,
      }
    },
  },

  methods: {
    textChange() {
      this.$emit('textChange', this.editedEntity)
    },

    async deleteImage(id) {
      await this.$axios.$get('admin/' + this.slug + '/deleteImage/' + id)
      this.$emit('changeImage')

    },

    async changeMainImage(id) {
      await this.$axios.$get('admin/' + this.slug + '/changeMainImage/' + id)
      this.$emit('changeImage')
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
      await this.$axios.$post('admin/' + this.slug + '/addImages', {entity: this.category.id, images: this.imageData})
      window.location.reload(false);
    },

    onFileChange(event) {
      if (event.target.files && event.target.files.length) {
        let files = event.target.files
        for (let i = 0; i < files.length; i++) {
          let temp = {
            displayFileName: "(" + this.calcSize(files[i].size) + "Kb)",
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
    calcSize(size) {
      return Math.round(size / 1024);
    },

  },

  components: {
    TiptapVuetify, clipperBasic, clipperPreview
  },

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
