<template>
  <div class="bg-grey">

    <v-row no-gutters>
      <v-col>
        <span class="grey--text text--darken-3 text-right text-uppercase text-lg-h5 font-weight-bold ">Добавление ПОТОЛКА</span>
      </v-col>
    </v-row>

    <AddCatalogItem :items="CEILINGS" :catalog="CEILING_CATALOG" :slug="'ceilings/'" :addingItem="'ADD_CEILING'" @fetchItems="fetchItems"></AddCatalogItem>

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
        FETCH_CEILINGS: 'catalogItems/FETCH_CEILINGS',
        FETCH_CEILING_CATALOG: 'catalog/FETCH_CEILING_CATALOG',
      }),
      fetchItems() {
        this.FETCH_CEILINGS()
      }

    },
    mounted() {
      this.FETCH_CEILINGS()
      this.FETCH_CEILING_CATALOG()
    },
    computed: {
      ...mapGetters({
        CEILINGS: 'catalogItems/CEILINGS',
        CEILING_CATALOG: 'catalog/CEILING_CATALOG',
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
