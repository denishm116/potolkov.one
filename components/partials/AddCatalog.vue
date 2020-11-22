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

      activeButtonVar: true,
      clearImageField: true,
      clrForm: true,
    }
  },
  computed: {
    newCategory() {
      return {
        title: '',
        parent_id: '',
        description: '',
        files: ''
      }
    },
  },
  methods: {
    fetchCatalog() {
      this.$emit('fetchCatalog')
    },
   async saveCategory() {
      try {
        await this.$store.dispatch('catalog/' + this.addingCategory,  this.newCategory)
        await this.fetchCatalog()
        window.location.reload(false);
      } catch (e) {
        return e
      }
    },
    textData(newCategory) {
      this.newCategory.title = newCategory.title
      this.newCategory.parent_id = newCategory.parent_id
      this.newCategory.description = newCategory.description
    },
    imageData(imageData) {
      this.newCategory.files = imageData
    },
    activeButton() {
      this.activeButtonVar = false
    },
  }
}
</script>

<style scoped>

</style>
