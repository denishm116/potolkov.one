<template>
  <div class="bg-grey">

    <v-row no-gutters>
      <v-col>
        <span class="grey--text text--darken-3 text-right text-uppercase text-lg-h5 font-weight-bold ">Освещение:
        создание категории</span>
      </v-col>
    </v-row>

    <AddCatalog :allCatalog="LIGHTNING_CATALOG" :slug="'lightning_catalog/'" :addingCategory="'ADD_LIGHTNING_CATEGORY'"
                @fetchCatalog="fetchCatalog"></AddCatalog>

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
    return {}
  },
  methods: {
    ...mapActions({
      FETCH_LIGHTNING_CATALOG: 'catalog/FETCH_LIGHTNING_CATALOG',
    }),
    fetchCatalog() {
      this.FETCH_LIGHTNING_CATALOG()
    }
  },
  mounted() {
    this.FETCH_LIGHTNING_CATALOG()
  },
  computed: {
    ...mapGetters({
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
