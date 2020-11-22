<template>
  <div>
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
                  Вверх
                </th>
                <th class="text-left">
                  Вниз
                </th>


              </tr>
              </thead>
              <tbody>
              <tr
                v-for="item in catalog"

              >
                <td>


                  <a small href="" @click.prevent="itemDelete(item.slug ? item.slug : item.id)">
                    <v-icon>mdi-delete</v-icon>
                  </a>
                </td>

                <td><a :href="item.id">{{ item.title }}</a></td>

                <td> <a :href="item.slug" @click.prevent="itemUp(item.slug)">
                  <v-icon>mdi-arrow-up-bold-circle</v-icon>
                </a>

                </td>

                <td>  <a :href="item.slug" @click.prevent="itemDown(item.slug)">
                  <v-icon>mdi-arrow-down-bold-circle</v-icon>
                </a>

                </td>

              </tr>
              </tbody>
            </template>
          </v-simple-table>

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
        console.log('/admin/' + this.slug + slug)
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
