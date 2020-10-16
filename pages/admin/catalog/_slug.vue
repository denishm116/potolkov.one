<template>

  <div class="bg-grey pa-5">

    <v-row no-gutters>
      <v-col>
        <span class="grey--text text--darken-3 text-right text-uppercase text-lg-h5 font-weight-bold ">Потолки:
        редактирование категории {{CEILING_CATALOG_ITEM.title}}</span>
      </v-col>
    </v-row>

    <CategoryEditor :categoryInit="CEILING_CATALOG_ITEM" :catalogInit="CEILING_CATALOG" @changeImage="changeImage" :slug="'catalog'"></CategoryEditor>

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
        mainImage: '',
        mainImageId: '',
      }
    },

    computed: {
      ...mapGetters({
        CEILING_CATALOG: 'catalog/CEILING_CATALOG',
        CEILING_CATALOG_ITEM: 'catalog/CEILING_CATALOG_ITEM'
      }),
      ceiling_catalog_item() {
        return this.CEILING_CATALOG_ITEM
      }
    },
    methods: {
      ...mapActions({
        FETCH_CEILING_CATALOG: 'catalog/FETCH_CEILING_CATALOG',
        FETCH_CEILING_CATALOG_ITEM: 'catalog/FETCH_CEILING_CATALOG_ITEM',
      }),
      changeImage() {
        this.FETCH_CEILING_CATALOG_ITEM(this.$route.params.slug)
      }

    },
    mounted() {
      this.FETCH_CEILING_CATALOG()
      this.FETCH_CEILING_CATALOG_ITEM(this.$route.params.slug)
    },
  }
</script>

<style scoped>

</style>
