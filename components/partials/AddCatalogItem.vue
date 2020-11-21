<template>
  <div>
    <CategoryItemForms :items="items" :catalog="catalog" :slug="slug" @textData="textData" :clrForm="clrForm"
                   @fetchItems="fetchItems"></CategoryItemForms>

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
  import CategoryItemForms from "@/components/partials/CategoryItemForms"

  export default {

    props: [
      'items', 'slug', 'addingItem', 'catalog'
    ],

    components: {
      AddImageComponent, CategoryItemForms
    },

    data() {
      return {
        newItem: {
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
      savedObj() {
        this.$emit('savedObject')
      },
      fetchItems() {
        this.$emit('fetchItems')
      },
      saveCategory() {
        try {
          this.$store.dispatch('catalogItems/' + this.addingItem,  this.newItem)
          this.fetchItems()
          this.clearForm()
          this.clearImageField = false
          this.clrForm = false
          this.savedObj()
        } catch (e) {
          return e
        }
      },
      imageData(imageData) {
        this.newItem.files = imageData
      },
      textData(newItem) {
        this.newItem = newItem
      },
      clearForm() {
        this.clrForm = false;
      },
      activeButton() {
        this.activeButtonVar = false
      },
    }
  }
</script>

<style scoped>

</style>
