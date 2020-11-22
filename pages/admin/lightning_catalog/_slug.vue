<template>

  <div class="bg-grey pa-5">

    <v-row no-gutters>
      <v-col>
        <span class="grey--text text--darken-3 text-right text-uppercase text-lg-h5 font-weight-bold ">Освещение:
        редактирование категории {{LIGHTNING_CATALOG_ITEM.title}}</span>
      </v-col>
      <v-col class="d-flex justify-end">
        <v-btn :color="buttonColor" :disabled="disabled" @click="saveChanges">Сохранить изменения</v-btn>
      </v-col>
    </v-row>

    <CategoryEditor
      :categoryInit="LIGHTNING_CATALOG_ITEM"
      :catalogInit="LIGHTNING_CATALOG"
      @changeImage="changeImage"
      :slug="'lightning_catalog'"
      :parentId="LIGHTNING_CATALOG_ITEM.parent_id"
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
        LIGHTNING_CATALOG: 'catalog/LIGHTNING_CATALOG',
        LIGHTNING_CATALOG_ITEM: 'catalog/LIGHTNING_CATALOG_ITEM'
      }),

    },
    methods: {
      ...mapActions({
        FETCH_LIGHTNING_CATALOG: 'catalog/FETCH_LIGHTNING_CATALOG',
        FETCH_LIGHTNING_CATALOG_ITEM: 'catalog/FETCH_LIGHTNING_CATALOG_ITEM',
      }),
      changeImage() {
        this.FETCH_LIGHTNING_CATALOG_ITEM(this.$route.params.slug)
      },
      textChange(textData) {
        this.editedEntity = textData
        this.disabled = false
        this.buttonColor = 'error'
      },
      async saveChanges() {
        try {
          await this.$axios.$patch('admin/lightning_catalog/' + this.LIGHTNING_CATALOG_ITEM.id, this.editedEntity)
          this.disabled = true
        } catch (e) {
          return e
        }
      }

    },
    async mounted() {
      await this.FETCH_LIGHTNING_CATALOG()
      await this.FETCH_LIGHTNING_CATALOG_ITEM(this.$route.params.slug)
console.log(this.LIGHTNING_CATALOG_ITEM)
    },
  }
</script>

<style scoped>

</style>
