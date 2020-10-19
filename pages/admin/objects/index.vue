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

          <v-row>
            <v-col>
              Категория
              <v-checkbox
                :label="catalog.title"
                :value="catalog.id"
                v-for="(catalog, index) in CEILING_CATALOG"
                :key="index"
                v-model="formData.catalogs"
                @change="textChange"
              ></v-checkbox>

            </v-col>
            <v-col>
              Потолок
              <v-checkbox
                :label="ceiling.title"
                :value="ceiling.id"
                v-for="(ceiling, index) in CEILINGS"
                :key="index"
                v-model="formData.ceilings"
                @change="textChange"
              ></v-checkbox>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
    <v-row>
      <v-col>
        <v-col class="d-flex justify-end">
          <v-btn :color="buttonColor" :disabled="disabled" @click="saveChanges">Сохранить</v-btn>
        </v-col>
      </v-col>
    </v-row>
    <v-card  class="mt-5 pa-5">
      <v-row>
        <v-col>
          <div v-for="ourObject in OUR_OBJECTS">
            <a :href="ourObject.slug" @click.prevent="itemDelete(ourObject.id)">
              <v-icon>mdi-delete</v-icon>
            </a>
            <a :href="ourObject.id">{{ourObject.title}}</a>
          </div>
          Список объектов
        </v-col>
      </v-row>
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
  import {mapGetters, mapActions} from 'vuex'

  export default {
    components: {
      AddImageComponent,
      TiptapVuetify
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
        buttonColor: 'grey',
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
      async itemDelete(id) {
        await this.$axios.$delete('/admin/ourObject/' + id)
      },
      saveChanges() {
        this.ADD_OUR_OBJECT(this.formData)
        this.formData = {
          title: '',
          address: '',
          square: '',
          description: '',
          price: '',
          images: [],
          catalogs: [],
          ceilings: [],
        }
        this.show = false
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
    mounted() {
      this.FETCH_CEILING_CATALOG()
      this.FETCH_CEILINGS()
      this.FETCH_OUR_OBJECTS()

    }

  }
</script>

<style scoped>

</style>
