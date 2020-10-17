<template>

  <div class="bg-grey pa-5">

    <v-row no-gutters>
      <v-col>
        <span class="grey--text text--darken-3 text-right text-uppercase text-lg-h5 font-weight-bold ">Редактирование - комплектующие: {{COMPONENT.title}}</span>
      </v-col>
      <v-col class="d-flex justify-end">
        <v-btn :color="buttonColor" :disabled="disabled" @click="saveChanges">Сохранить изменения</v-btn>
      </v-col>
    </v-row>

    <CategoryEditor
      :categoryInit="COMPONENT"
      :catalogInit="COMPONENT_CATALOG"
      @changeImage="changeImage"
      :slug="'components'"
      :parentId="COMPONENT.component_catalog_id"
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
        COMPONENT: 'catalogItems/COMPONENT'
      }),

    },
    methods: {
      ...mapActions({
        FETCH_COMPONENT_CATALOG: 'catalog/FETCH_COMPONENT_CATALOG',
        FETCH_COMPONENT: 'catalogItems/FETCH_COMPONENT',
      }),
      changeImage() {
        this.FETCH_COMPONENT(this.$route.params.slug)
      },
      textChange(textData) {
        this.editedEntity = textData
        this.disabled = false
        this.buttonColor = 'error'
      },
      async saveChanges() {
        try {
          await this.$axios.$patch('admin/components/' + this.COMPONENT.id, this.editedEntity)
          this.disabled = true
        } catch (e) {
          return e
        }
      }

    },
    mounted() {
      this.FETCH_COMPONENT_CATALOG()
      this.FETCH_COMPONENT(this.$route.params.slug)

    },
  }
</script>

<style scoped>

</style>
