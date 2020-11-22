<template>
  <div class="bg-grey">

    <v-row no-gutters>
      <v-col>
        <span class="grey--text text--darken-3 text-right text-uppercase text-lg-h5 font-weight-bold ">Потолки:
        создание категории</span>
      </v-col>
    </v-row>

    <AddCatalog :allCatalog="CEILING_CATALOG" :slug="'catalog/'" :addingCategory="'ADD_CEILING_CATEGORY'" @fetchCatalog="fetchCatalog"></AddCatalog>

  </div>
</template>


<script>
  import AddCatalog from "@/components/partials/AddCatalog"
  import {mapGetters, mapActions} from 'vuex'

  export default {
    layout: 'admin',
    components: {
    AddCatalog
    },
    data() {
      return {
      }
    },
    methods: {
      ...mapActions({
        FETCH_CEILING_CATALOG: 'catalog/FETCH_CEILING_CATALOG',
      }),
      async fetchCatalog() {
        await this.FETCH_CEILING_CATALOG()
      }
    },
    async mounted() {
     await this.FETCH_CEILING_CATALOG()
    },
    computed: {
      ...mapGetters({
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
