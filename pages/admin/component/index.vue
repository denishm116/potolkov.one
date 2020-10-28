<template>
  <div class="bg-grey">

    <v-row no-gutters>
      <v-col>
        <span class="grey--text text--darken-3 text-right text-uppercase text-lg-h5 font-weight-bold ">Добавление пункта комплектующие</span>
      </v-col>
    </v-row>

    <AddCatalogItem :items="COMPONENTS" :catalog="COMPONENT_CATALOG" :slug="'components/'" :addingItem="'ADD_COMPONENT'" @fetchItems="fetchItems"></AddCatalogItem>

  </div>
</template>


<script>
  import AddCatalogItem from "@/components/partials/AddCatalogItem"
  import {mapGetters, mapActions} from 'vuex'

  export default {
    layout: 'admin',

    components: {
      AddCatalogItem
    },

    data() {
      return {
      }
    },
    methods: {
      ...mapActions({
        FETCH_COMPONENTS: 'catalogItems/FETCH_COMPONENTS',
        FETCH_COMPONENT_CATALOG: 'catalog/FETCH_COMPONENT_CATALOG',
      }),
      fetchItems() {
        this.FETCH_COMPONENTS()
      }

    },
    mounted() {
      this.FETCH_COMPONENTS()
      this.FETCH_COMPONENT_CATALOG()
    },
    computed: {
      ...mapGetters({
        COMPONENTS: 'catalogItems/COMPONENTS',
        COMPONENT_CATALOG: 'catalog/COMPONENT_CATALOG',
      }),
    },
  }
</script>

<style scoped>

  .bg-grey {
    margin: 0;
    padding: 35px 35px 35px 35px;
    background-color: rgb(238, 238, 238);
    min-height: 100vh;
  }

</style>
