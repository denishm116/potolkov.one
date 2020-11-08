<template>

  <div class="pagging mt-5" v-if="pages > 1">
    <span class="pagging__arrow active" @click="homePage">В начало</span>
    <ul class="pagging-list">
      <li><span @click="backPage" class="pagging__link prev"><<</span></li>

      <li v-if="pages <=2 || pages >= (pages - 1)" v-for="(page, index) in displayedPages">
        <span @click="pageClick(page)" class="pagging__link" :class="{'active': page === pageNumber}">
          {{ page }}
        </span>
      </li>

      <li><span @click="nextPage" class="pagging__link next">>></span></li>
    </ul>
    <span @click="lastPage" class="pagging__arrow">В конец</span>
  </div>

</template>

<script>
export default {
  props: ['objects', 'objectsPerPage'],
  data() {
    return {
      pageNumber: 1
    }
  },
  computed: {
    displayedPages() {
      let tmp = []
      if (this.pages < 7) {
        for (let i = 1; i <= this.pages; i++) {
          tmp.push(i)
        }
        return tmp
      } else {
        for (let i = this.pageNumber; i <= this.pages; i++) {

          tmp.push(i)
          tmp.push(i + 1)
          tmp.push(i + 2)
          tmp.push('...')
          tmp.push(this.pages - 2)
          tmp.push(this.pages - 1)
          tmp.push(this.pages)

          break
        }
        return tmp
      }

    },
    pages() {
      return Math.ceil(this.objects.length / +this.objectsPerPage)
    },
    paginatedObjects() {
      let from = (this.pageNumber - 1) * this.objectsPerPage
      let to = from + this.objectsPerPage
      return this.objects.slice(from, to)
    }

  },
  watch: {
    pageNumber: function () {
      if (this.pages > 6) {

      }
    }
  },
  methods: {
    sendObject() {
      this.$emit('paginatedObjects', this.paginatedObjects)
    },
    pageClick(page) {
      this.pageNumber = page
      this.sendObject()
    },
    homePage() {
      this.pageNumber = 1
      this.sendObject()
    },
    backPage() {
      this.pageNumber = (this.pageNumber === 1) ? 1 : (this.pageNumber - 1)
      this.sendObject()
    },
    nextPage() {
      this.pageNumber = (this.pageNumber < this.objects.length / +this.objectsPerPage) ? (this.pageNumber + 1) : Math.ceil(this.objects.length / +this.objectsPerPage)
      this.sendObject()
    },
    lastPage() {
      this.pageNumber = Math.ceil(this.objects.length / +this.objectsPerPage)
      this.sendObject()
    }
  },
  mounted() {
    this.sendObject()
  }
};
</script>

<style scoped>
@media (max-width: 479.98px) {
  .prev, .next {
    display: none;
  }
}
</style>
