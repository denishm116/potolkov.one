<template>

  <div class="bg-grey pa-5">

    <v-row no-gutters>
      <v-col>
        <span class="grey--text text--darken-3 text-right text-uppercase text-lg-h5 font-weight-bold ">Комплектующие:
        редактирование категории {{COMPONENT_CATALOG_ITEM.title}}</span>
      </v-col>
      <v-col class="d-flex justify-end">
        <v-btn :color="buttonColor" :disabled="disabled" @click="saveChanges">Сохранить изменения</v-btn>
      </v-col>
    </v-row>

    <CategoryEditor
      :categoryInit="COMPONENT_CATALOG_ITEM"
      :catalogInit="COMPONENT_CATALOG"
      @changeImage="changeImage"
      :slug="'component_catalog'"
      :parentId="COMPONENT_CATALOG_ITEM.parent_id"
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
        COMPONENT_CATALOG: 'catalog/COMPONENT_CATALOG',
        COMPONENT_CATALOG_ITEM: 'catalog/COMPONENT_CATALOG_ITEM'
      }),

    },
    methods: {
      ...mapActions({
        FETCH_COMPONENT_CATALOG: 'catalog/FETCH_COMPONENT_CATALOG',
        FETCH_COMPONENT_CATALOG_ITEM: 'catalog/FETCH_COMPONENT_CATALOG_ITEM',
      }),
      changeImage() {
        this.FETCH_COMPONENT_CATALOG_ITEM(this.$route.params.slug)
      },
      textChange(textData) {
        this.editedEntity = textData
        this.disabled = false
        this.buttonColor = 'error'
      },
      async saveChanges() {
        try {
          await this.$axios.$patch('admin/component_catalog/' + this.COMPONENT_CATALOG_ITEM.id, this.editedEntity)
          this.disabled = true
        } catch (e) {
          return e
        }
      }

    },
    mounted() {
      this.FETCH_COMPONENT_CATALOG()
      this.FETCH_COMPONENT_CATALOG_ITEM(this.$route.params.slug)
      console.log(this.COMPONENT_CATALOG)
      console.log(this.COMPONENT_CATALOG_ITEM)
    },
  }
</script>

<style scoped>

</style>
