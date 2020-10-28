<template>

  <div class="bg-grey pa-5">

    <v-row no-gutters>
      <v-col>
        <span class="grey--text text--darken-3 text-right text-uppercase text-lg-h5 font-weight-bold ">Редактирование потолка: {{CEILING.title}}</span>
      </v-col>
      <v-col class="d-flex justify-end">
        <v-btn :color="buttonColor" :disabled="disabled" @click="saveChanges">Сохранить изменения</v-btn>
      </v-col>
    </v-row>

    <CategoryEditor
      :categoryInit="CEILING"
      :catalogInit="CEILING_CATALOG"
      @changeImage="changeImage"
      :slug="'ceilings'"
      :parentId="CEILING.catalog_id"
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
        CEILING: 'catalogItems/CEILING'
      }),

    },
    methods: {

      ...mapActions({
        FETCH_CEILING_CATALOG: 'catalog/FETCH_CEILING_CATALOG',
        FETCH_CEILING: 'catalogItems/FETCH_CEILING',
      }),
      changeImage() {
        this.FETCH_CEILING(this.$route.params.slug)
      },
      textChange(textData) {
        this.editedEntity = textData
        this.disabled = false
        this.buttonColor = 'error'
      },
      async saveChanges() {
        try {
          await this.$axios.$patch('admin/ceilings/' + this.CEILING.id, this.editedEntity)
          this.disabled = true
        } catch (e) {
          return e
        }
      }

    },
    async mounted() {
      await this.FETCH_CEILING_CATALOG()
      await this.FETCH_CEILING(this.$route.params.slug)
    },
  }
</script>

<style scoped>

</style>
