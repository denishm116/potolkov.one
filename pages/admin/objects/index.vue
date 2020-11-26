<template>

  <div class="bg-grey pa-5">
    <v-row no-gutters>
      <v-col>
        <span
          class="grey--text text--darken-3 text-right text-uppercase text-lg-h5 font-weight-bold ">Добавить объект</span>
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

          <v-row>
            <v-col>
              <add-image-component :show="show" @imageData="imageData"></add-image-component>
            </v-col>
          </v-row>

         <v-catalog-check-boxes
           :ceilingCatalog="CEILING_CATALOG"
           :checkedCatalog="formData.catalogs"
           :checkedCeilings="formData.ceilings"
           @checkBoxData="checkBoxData"
         ></v-catalog-check-boxes>

        </v-col>
      </v-row>
    </v-card>
    <v-row>
      <v-col>
        <v-col class="d-flex justify-start">
          <v-btn :color="buttonColor" :disabled="disabled" @click="saveChanges">Сохранить</v-btn>
        </v-col>
      </v-col>
    </v-row>


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
          </tr>
          </thead>
          <tbody>
          <tr
            v-for="item in OUR_OBJECTS"

          >
            <td>
              <a small href="" @click.prevent="itemDelete(item.id)">
                <v-icon>mdi-delete</v-icon>
              </a>
            </td>
            <td><a :href="item.id">{{ item.title }}</a></td>

            <td>
              <span v-for="cats in item.catalogs">{{ cats.title }}, </span>
            </td>

            <td>
              <span v-for="cats in item.ceilings ">{{ cats.title }}, </span>
            </td>

          </tr>
          </tbody>
        </template>
      </v-simple-table>

    </v-card>


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
import AddImageComponent from "../../../components/partials/AddImageComponent"
import vCatalogCheckBoxes from "@/components/partials/vCatalogCheckBoxes";
import {mapGetters, mapActions} from 'vuex'

export default {

  components: {
    AddImageComponent,
    TiptapVuetify,
    vCatalogCheckBoxes
  },

  layout: 'admin',

  data() {
    return {
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
      disabled: true,
      buttonColor: 'orange',
      formData: {
        title: '',
        address: '',
        square: '',
        description: '',
        price: '',
        images: [],
        catalogs: [],
        ceilings: [],
      }
    }
  },

  methods: {

    checkBoxData(data) {
      this.formData.catalogs = data.catalogs
      this.formData.ceilings = data.ceilings
   },

    async itemDelete(id) {
      await this.$axios.$delete('/admin/ourObject/' + id)
      await this.FETCH_OUR_OBJECTS()
    },
    async saveChanges() {
      await this.ADD_OUR_OBJECT(this.formData)
      window.location.reload(false);
      // this.formData = {
      //   title: '',
      //   address: '',
      //   square: '',
      //   description: '',
      //   price: '',
      //   images: [],
      //   catalogs: [],
      //   ceilings: [],
      // }
      // this.show = false
      // this.disabled = true
      // await this.FETCH_OUR_OBJECTS()

    },
    textChange() {
      this.disabled = false
    },
    imageData(data) {
      this.formData.images = data
    },
    ...mapActions({
      ADD_OUR_OBJECT: 'our_objects/ADD_OUR_OBJECT',
      FETCH_OUR_OBJECTS: 'our_objects/FETCH_OUR_OBJECTS',
      FETCH_CEILING_CATALOG: 'catalog/FETCH_CEILING_CATALOG',
      FETCH_CEILINGS: 'catalogItems/FETCH_CEILINGS',
    }),
  },
  computed: {
    ...mapGetters({
      CEILINGS: 'catalogItems/CEILINGS',
      CEILING_CATALOG: 'catalog/CEILING_CATALOG',
      OUR_OBJECTS: 'our_objects/OUR_OBJECTS'
    })
  },
  async mounted() {
    await this.FETCH_CEILING_CATALOG()
    await this.FETCH_CEILINGS()
    await this.FETCH_OUR_OBJECTS()
  }
}
</script>

<style scoped>

</style>
