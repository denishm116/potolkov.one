<template>

  <ul class="sub-header-menu__list">
    <li v-for="(catalogItem, index) in catalog" class="sub-header-menu__item">
      <div class="" v-if="catalogItem.children.length">
        <a href="#" class="sub-header-menu__link">
          {{catalogItem.title}}
       </a>
        <span class="menu__arrow sub-arrow"></span>
        <Submenu :catalog="catalogItem.children" class="children_wrapper" v-if="catalogItem.depth === 0"></Submenu>
      </div>


      <div class=""  v-else>
        <a href="#" class="sub-header-menu__link">
          {{catalogItem.title}}
        </a>
      </div>
    </li>
  </ul>

</template>

<script>

  export default {
    name: 'Submenu',
    props: ['catalog'],
    // props: {
    //   catalog: Object
    // },
    computed: {
      allCatalog() {
        // return Array.from(this.catalog)
        return this.catalog
      }
    },

  }

</script>

<style scoped>

</style>
