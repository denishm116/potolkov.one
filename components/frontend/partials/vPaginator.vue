<template>

    <div class="pagging mt-5">
      <span class="pagging__arrow" @click="homePage">В начало</span>
      <ul class="pagging-list">
        <li ><span  @click="backPage" class="pagging__link "><<</span></li>

        <li
          v-for="page in pages"
        >
          <span @click="pageClick(page)" class="pagging__link" :class="{'active': page === pageNumber}">{{ page }}</span>
        </li>

        <li> <span @click="nextPage"  class="pagging__link">>></span></li>
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
    pages() {
      return Math.ceil(this.objects.length / 1)
    },
    paginatedObjects() {
      let from = (this.pageNumber - 1) * this.objectsPerPage
      let to = from + this.objectsPerPage
      return this.objects.slice(from, to)
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
      this.pageNumber = (this.pageNumber < this.objects.length) ? (this.pageNumber + 1) : this.objects.length
      this.sendObject()
    },
    lastPage() {
      this.pageNumber = this.objects.length
      this.sendObject()
    }
  },
  mounted() {
    this.sendObject()
  }
};
</script>
