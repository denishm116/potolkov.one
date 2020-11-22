<template>
  <div>
    <CategoryForms :allCatalog="allCatalog" :slug="slug" @textData="textData" :clrForm="clrForm"
                   @fetchCatalog="fetchCatalog"></CategoryForms>

    <AddImageComponent @imageData="imageData" :show="clearImageField"></AddImageComponent>

    <v-row>
      <v-col>
        <v-btn color="access accent-4" @click="saveCategory">Сохранить</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import AddImageComponent from "@/components/partials/AddImageComponent"
  import CategoryForms from "@/components/partials/CategoryForms"

  export default {

    props: [
      'allCatalog', 'slug', 'addingCategory'
    ],
    components: {
      AddImageComponent, CategoryForms
    },
    data() {
      return {
        newCategory: {
          title: '',
          parent_id: '',
          description: '',
          files: ''
        },
        activeButtonVar: true,
        clearImageField: true,
        clrForm: true,
      }
    },
    methods: {
      fetchCatalog() {
        this.$emit('fetchCatalog')
      },
      async saveCategory() {
        try {
          await this.$store.dispatch('catalog/' + this.addingCategory,  this.newCategory)
          this.fetchCatalog()
          // window.location.reload(false);
        } catch (e) {
          return e
        }
      },
      imageData(imageData) {
        this.newCategory.files = imageData
      },
      textData(newCategory) {
        this.newCategory = newCategory
      },
      activeButton() {
        this.activeButtonVar = false
      },
    }
  }
</script>

<style scoped>

</style>
