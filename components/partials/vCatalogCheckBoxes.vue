<template>
  <div>
    <v-row>
      <v-col>
        Категории
        <v-row v-for="(catalog, index) in ceilingCatalog" :key="index" md="3">

          <v-col>
            <v-sheet
              color="white"
              elevation="5"
              class="pa-2"
              v-if="catalog.parent_id === null"
            >

              <v-checkbox
                :label="catalog.title"
                :value="catalog.id"
                :key="index"
                v-model="checkBoxData.catalogs"
                @change="textChange"
              ></v-checkbox>

              <v-subheader v-if="catalog.parent_id === null">Подкатегории
              </v-subheader>
              <v-row v-if="catalog.parent_id === null">

                <v-col v-for="(child, index) in catalog.children" :key="index">
                    <v-checkbox
                    :label="child.title"
                    :value="child.id"

                    :key="index"
                    v-model="checkBoxData.catalogs"
                    @change="textChange"
                  ></v-checkbox>
                </v-col>

              </v-row>


              <v-subheader v-if="catalog.ceilings.length">Потолки в категории {{ catalog.title }}
              </v-subheader>
              <v-row v-if="catalog.ceilings.length">

                <v-col v-for="(ceiling, index) in catalog.ceilings" :key="index">
                  <v-checkbox
                    :label="ceiling.title"
                    :value="ceiling.id"

                    :key="index"
                    v-model="checkBoxData.ceilings"
                    @change="textChange"
                  ></v-checkbox>
                </v-col>

              </v-row>
            </v-sheet>
          </v-col>

        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {

  props: {
    ceilingCatalog: {
      type: [Array, Object],
      default() {
        return [{}]
      }
    },
    checkedCatalog: {
      type: Array,
      // default() {
      //   return []
      // }
    },
    checkedCeilings: {
      type: Array,
      // default() {
      //   return []
      // }
    },
  },

  data() {
    return {

    }
  },

  computed: {
    checkBoxData() {
      return {
        catalogs: this.checkedCatalog,
        ceilings: this.checkedCeilings,
      }
    }
  },

  methods: {
    textChange() {
      this.$emit('checkBoxData', this.checkBoxData)
    }
  }
}
</script>

<style scoped>

</style>
