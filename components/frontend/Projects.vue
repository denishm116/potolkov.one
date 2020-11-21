<template>
  <section class="projects">
    <div class='container'>
      <h2 class="projects__title  my-title">{{ ourObjects.length ? title : '' }}</h2>


      <v-project
        :ourObject="object"
        :width="width"
        v-for="(object, index) in objects"
        :key="index"
      ></v-project>


      <div class="pagging">
        <paginator
          v-model="page"
          :page-count="pageCount"
          :margin-pages="2"
          :page-range="3"
          :click-handler="paginatedObjects"

          :container-class="'pagging-list'"
          :page-class="'page-item'"
          :active-link-class="'active'"
          :page-link-class="'pagging__link'"
          :prev-class="'prev-next'"
          :prev-link-class="'prev-next-link'"
          :next-class="'prev-next'"
          :next-link-class="'prev-next-link'"
          :break-view-class="''"
          :break-view-link-class="''"
          :first-last-button="firstLastButton"
          :hide-prev-next="true"
        ></paginator>
      </div>


    </div>

  </section>
</template>

<script>
import vProject from '@/components/frontend/partials/vProject'
import Paginator from '@/components/frontend/partials/Paginator'

export default {
  props: ['ourObjects', 'width', 'title'],
  components: {
    vProject, Paginator
  },
  data() {
    return {
      page: 1,
      objects: [],
      objectsPerPage: 1
    }
  },
  computed: {
    firstLastButton() {
      return false
    },
    pageCount() {
      return Math.ceil(this.ourObjects.length / this.objectsPerPage)
    },
  },
  methods: {
    paginatedObjects(currentPage) {
      let from = (currentPage - 1) * this.objectsPerPage
      let to = from + this.objectsPerPage
      this.objects = this.ourObjects.slice(from, to)
    }
  },
  mounted() {
    this.paginatedObjects(this.page)
  }

}
</script>

<style scoped>
.pagging {
  display: flex;
  font-size: 0;
  align-items: center;
  padding: 10px 0px 40px 0px;
  margin: 25px 0 0 0;
}

.container {
  max-width: 1370px;
  margin: 0 auto;
  width: 100%;
}
a {
  color: white;
}
</style>
