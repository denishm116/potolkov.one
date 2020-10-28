<template>
  <section class="projects">
    <div class='container'>
      <h2 class="projects__title title">{{ ourObjects.length ? title : ''}}</h2>


        <v-project
          :ourObject="object"
          :width="width"
          v-for="(object, index) in objects"
          :key="index"
        ></v-project>

      <v-paginator :objects="ourObjects" :objectsPerPage="1" @paginatedObjects="paginatedObjects"></v-paginator>

    </div>

  </section>
</template>

<script>

import vProject from '@/components/frontend/partials/vProject'
import vPaginator from '@/components/frontend/partials/vPaginator'

export default {
  props: ['ourObjects', 'width', 'title'],
  components: {
    vProject, vPaginator
  },
  data() {
    return {

      objects: []
    }
  },

  methods: {
    paginatedObjects(data) {
      this.objects = data
    }
  },

}
</script>

<style scoped>


.container {
  max-width: 1370px;
  margin: 0 auto;
  width: 100%;
}
</style>
