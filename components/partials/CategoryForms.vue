<template>
  <div>
    <v-row>
      <v-col>
        <v-card class="pa-5">
          <ul>
            <h2>Список категорий</h2>
            <li v-for="cat in catalog">
              <a :href="cat.slug" @click.prevent="itemUp(cat.slug)">
                <v-icon>mdi-arrow-up-bold-circle</v-icon>
              </a>
              <a :href="cat.slug" @click.prevent="itemDown(cat.slug)">
                <v-icon>mdi-arrow-down-bold-circle</v-icon>
              </a>
              <a :href="cat.slug" @click.prevent="itemDelete(cat.slug)">
                <v-icon>mdi-delete</v-icon>
              </a>
              <a :href="cat.slug" @click.prevent="goTo(cat.slug)">
                {{ cat.title}}
              </a>
            </li>
          </ul>
        </v-card>
      </v-col>
    </v-row>

    <v-row no-gutters class="mt-3">
      <v-col>
        <v-subheader>Заполните необходимые поля (Название категории, родительскую категорию, описание и изображения)
        </v-subheader>
        <v-card class="mx-auto pa-5">
          <v-row>
            <v-col>
              <v-text-field
                @input="textData"
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
                @change="textData"
              ></v-select>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <ClientOnly>
                <!-- Use the component in the right place of the template -->
                <tiptap-vuetify v-model="newCategory.description" :extensions="extensions" @input="textData"/>
                <template #placeholder>
                  Подождите капельку...
                </template>
              </ClientOnly>
            </v-col>
          </v-row>
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

  export default {
    props: [
      'allCatalog', 'slug', 'clrForm'
    ],
    components: {
      TiptapVuetify
    },
    data() {
      return {
        newCategory: {
          title: '',
          parent_id: '',
          description: '',
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
    methods: {
      textData() {
        this.$emit('textData', this.newCategory)
      },
      fetchCatalog() {
        this.$emit('fetchCatalog')
      },
      async itemUp(slug) {
        await this.$axios.$post('/admin/' + this.slug + slug + '/up')
        this.fetchCatalog()
      },
      async itemDown(slug) {
        await this.$axios.$post('/admin/' + this.slug + slug + '/down')
        this.fetchCatalog()
      },
      async itemDelete(slug) {
        await this.$axios.$delete('/admin/' + this.slug + slug)
        this.fetchCatalog()
      },
      goTo(slug) {
        this.$router.push('/admin/' + this.slug + slug)
      },
    },
    computed: {
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
        return Array.from(this.allCatalog).map(cat => {
          return {
            'title': cat.depth ? '--' + cat.title : '' + cat.title,
            'id': cat.id,
            'slug': cat.slug,
          }
        })
      },
    },
    watch: {
      clrForm: {
        immediate: true,
        deep: true,
        handler() {
          this.newCategory = {
            title: '',
            parent_id: '',
            description: '',
          }
        }

      }
    }
  }
</script>

<style scoped>
  li {
    list-style-type: none;
  }
</style>
