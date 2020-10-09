<template>

    <div class="bg-grey pa-5">

      <v-row no-gutters>
        <v-col>
        <span class="grey--text text--darken-3 text-right text-uppercase text-lg-h5 font-weight-bold ">Потолки:
        редактирование категории</span>
        </v-col>
      </v-row>

      <CategoryEditor :categoryInit="category"></CategoryEditor>



    </div>

</template>

<script>
  import CategoryEditor from "@/components/partials/CategoryEditor"
  export default {
    layout: 'admin',
    components: {
      CategoryEditor
    },
    data() {
      return {
        category: ''
      }
    },
    validate() {
      return true;
    },
    methods: {
      async getData() {
        const category = await this.$axios.$get('admin/catalog/' + this.$route.params.slug)
        this.category = category[0]

      }
    },
    mounted() {
      this.getData()

    },


  }
</script>

<style scoped>

</style>
