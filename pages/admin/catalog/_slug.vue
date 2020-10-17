<template>

  <div class="bg-grey pa-10">

    <v-row no-gutters justify="space-between">
      <v-col>
        <span class="grey--text text--darken-3 text-right text-uppercase text-lg-h5 font-weight-bold ">Потолки:
        редактирование категории "{{CEILING_CATALOG_ITEM.title}}"</span>
      </v-col>
      <v-col class="d-flex justify-end">
        <v-btn :color="buttonColor" :disabled="disabled" @click="saveChanges">Сохранить изменения</v-btn>
      </v-col>
    </v-row>

    <CategoryEditor
      :categoryInit="CEILING_CATALOG_ITEM"
      :catalogInit="CEILING_CATALOG"
      @changeImage="changeImage"
      :slug="'catalog'"
      :parentId="CEILING_CATALOG_ITEM.parent_id"
      @textChange="textChange"
    ></CategoryEditor>

  </div>

</template>

<script>
  import CategoryEditor from "@/components/partials/CategoryEditor"
  import {mapGetters, mapActions} from 'vuex'

  export default {
    layout: 'admin',
    components: {
      CategoryEditor
    },
    data() {
      return {
        editedEntity: {
          title: '',
          parent_id: '',
          description: '',
        },
        disabled: true,
        buttonColor: 'grey',
        mainImage: '',
        mainImageId: '',
      }
    },

    computed: {
      ...mapGetters({
        CEILING_CATALOG: 'catalog/CEILING_CATALOG',
        CEILING_CATALOG_ITEM: 'catalog/CEILING_CATALOG_ITEM'
      }),

    },
    methods: {
      ...mapActions({
        FETCH_CEILING_CATALOG: 'catalog/FETCH_CEILING_CATALOG',
        FETCH_CEILING_CATALOG_ITEM: 'catalog/FETCH_CEILING_CATALOG_ITEM',
      }),
      changeImage() {
        this.FETCH_CEILING_CATALOG_ITEM(this.$route.params.slug)
      },
      textChange(textData) {
        this.editedEntity = textData
        this.disabled = false
        this.buttonColor = 'error'
      },
      async saveChanges() {
        try {
          await this.$axios.$patch('admin/catalog/' + this.CEILING_CATALOG_ITEM.id, this.editedEntity)
          this.disabled = true
        } catch (e) {
          return e
        }
      }

    },
    mounted() {
      this.FETCH_CEILING_CATALOG()
      this.FETCH_CEILING_CATALOG_ITEM(this.$route.params.slug)
    },
  }
</script>

<style scoped>
  .buttonMargin {
    background: #526488;
  }
</style>
