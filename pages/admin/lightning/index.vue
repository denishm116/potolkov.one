<template>
  <div class="bg-grey">

    <v-row no-gutters>
      <v-col>
        <span class="grey--text text--darken-3 text-right text-uppercase text-lg-h5 font-weight-bold ">Добавление пункта в освещение</span>
      </v-col>
    </v-row>

    <AddCatalogItem :items="LIGHTNINGS" :catalog="LIGHTNING_CATALOG" :slug="'lightning/'" :addingItem="'ADD_LIGHTNING'" @fetchItems="fetchItems"></AddCatalogItem>

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
        FETCH_LIGHTNINGS: 'catalogItems/FETCH_LIGHTNINGS',
        FETCH_LIGHTNING_CATALOG: 'catalog/FETCH_LIGHTNING_CATALOG',
      }),
      fetchItems() {
        this.FETCH_LIGHTNINGS()
      }

    },
    mounted() {
      this.FETCH_LIGHTNINGS()
      this.FETCH_LIGHTNING_CATALOG()
    },
    computed: {
      ...mapGetters({
        LIGHTNINGS: 'catalogItems/LIGHTNINGS',
        LIGHTNING_CATALOG: 'catalog/LIGHTNING_CATALOG',
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
