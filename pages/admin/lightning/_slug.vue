<template>

  <div class="bg-grey pa-5">

    <v-row no-gutters>
      <v-col>
        <span class="grey--text text--darken-3 text-right text-uppercase text-lg-h5 font-weight-bold ">Редактирование - светильники: {{LIGHTNING.title}}</span>
      </v-col>
      <v-col class="d-flex justify-end">
        <v-btn :color="buttonColor" :disabled="disabled" @click="saveChanges">Сохранить изменения</v-btn>
      </v-col>
    </v-row>

    <CategoryEditor
      :categoryInit="LIGHTNING"
      :catalogInit="LIGHTNING_CATALOG"
      @changeImage="changeImage"
      :slug="'lightnings'"
      :parentId="LIGHTNING.lightning_catalog_id"
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
        LIGHTNING: 'catalogItems/LIGHTNING'
      }),

    },
    methods: {
      ...mapActions({
        FETCH_LIGHTNING_CATALOG: 'catalog/FETCH_LIGHTNING_CATALOG',
        FETCH_LIGHTNING: 'catalogItems/FETCH_LIGHTNING',
      }),
      changeImage() {
        this.FETCH_LIGHTNING(this.$route.params.slug)
      },
      textChange(textData) {
        this.editedEntity = textData
        this.disabled = false
        this.buttonColor = 'error'
      },
      async saveChanges() {
        try {
          await this.$axios.$patch('admin/lightnings/' + this.LIGHTNING.id, this.editedEntity)
          this.disabled = true
        } catch (e) {
          return e
        }
      }

    },
    mounted() {
      this.FETCH_LIGHTNING_CATALOG()
      this.FETCH_LIGHTNING(this.$route.params.slug)

    },
  }
</script>

<style scoped>

</style>
