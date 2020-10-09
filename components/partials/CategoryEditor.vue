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

              :value="category.title"
              @input="ch"
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
              :value="category.id"
              @change="ch"
            ></v-select>
          </v-col>
        </v-row>

        <h3>Псевдоним: {{category.slug}}</h3>
        <ClientOnly>
          <!-- Use the component in the right place of the template -->
          <tiptap-vuetify :value="category.description" :extensions="extensions" @input="textData"/>
          <template #placeholder>
            Подождите капельку...
          </template>
        </ClientOnly>

<v-row class="mt-3">
  <v-col v-for="(image, index) in category.images" :key="index">
    <v-radio-group  column >
    <div >
      <img :src="path + image.path">
    </div>
    </v-radio-group>
  </v-col>
</v-row>

      </v-card>



    </v-col>
  </v-row>

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
  export default {
    components: {
      TiptapVuetify
    },
    props: [
      'categoryInit', 'catalogInit'
    ],
    data() {
      return {
        v: '',
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
      path() {
        return process.env.baseURL + 'storage/'
      },

      titleErrors() {
        if (this.errors) return this.errors.title
      },
      catalog() {
        return Array.from(this.catalogInit).map(cat => {
          return {
            'title': cat.depth ? '--' + cat.title : '' + cat.title,
            'id': cat.id,
            'slug': cat.slug,
          }
        })
      },
      category() {
        return this.categoryInit
      }

    },
    methods: {
      ch(event) {
        console.log(event)
      },
      textData(event) {
        console.log(event)
      }

    },
    mounted() {

    }

  }
</script>

<style scoped>

</style>
