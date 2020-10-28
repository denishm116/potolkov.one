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
                  Каталог родитель
                </th>


              </tr>
              </thead>
              <tbody>
              <tr
                v-for="item in items"

              >
                <td>


                  <a small href="" @click.prevent="itemDelete(item.id)">
                    <v-icon>mdi-delete</v-icon>
                  </a>
                </td>

                <td><a :href="item.id">{{ item.title }}</a></td>
                <td>{{ item.catalog.title }}</td>

              </tr>
              </tbody>
            </template>
          </v-simple-table>

        </v-card>

      </v-col>
    </v-row>

    <v-row no-gutters class="mt-3">
      <v-col>
        <v-subheader>Заполните необходимые поля (Заголовок, родительскую категорию, описание и изображения)
        </v-subheader>
        <v-card class="mx-auto pa-5">
          <v-row>
            <v-col>
              <v-text-field
                @input="textData"
                label="Название"
                outlined
                dense
                :error-messages="titleErrors"
                v-model="newItem.title"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-select
                :items="itemsCatalog"
                label="Выберите категорию"
                item-text="title"
                item-value="id"
                dense
                outlined
                :error-messages="parent_idErrors"
                v-model="newItem.catalog_id"
                @change="textData"
              ></v-select>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <ClientOnly>
                <!-- Use the component in the right place of the template -->
                <tiptap-vuetify v-model="newItem.description" :extensions="extensions" @input="textData"/>
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
      'items', 'slug', 'clrForm', 'catalog'
    ],
    components: {
      TiptapVuetify
    },
    data() {
      return {
        newItem: {
          title: '',
          catalog_id: '',
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
        this.$emit('textData', this.newItem)
      },
      fetchItems() {
        this.$emit('fetchItems')
      },
      async itemDelete(slug) {
        await this.$axios.$delete('/admin/' + this.slug + slug)
        this.fetchItems()
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
      itemsCatalog() {
        return Array.from(this.catalog).map(cat => {
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
          this.newItem = {
            title: '',
            catalog_id: '',
            description: '',
          }
        }

      }
    },

  }
</script>

<style scoped>
  li {
    list-style-type: none;
  }
</style>
