<template>
  <div>
    <nav class="breadcrumbs">
      <ul class="breadcrumbs__list">
        <li>
          <a href="/" class="breadcrumbs__link">Главная</a>
        </li>

        <li v-if="second.active">
          <a :href="second.to" class="breadcrumbs__link"> <span> {{ second.name }}</span> </a>
        </li>
        <li v-else>
          <span> {{ second.name }}</span>
        </li>


        <li v-if="third.active">
          <a :href="third.to" class="breadcrumbs__link"> <span> {{ third.name }}</span> </a>
        </li>
        <li v-else>
          <span> {{ third.name }}</span>
        </li>

        <li v-if="forth.active">
          <a :href="forth.to" class="breadcrumbs__link"> <span> {{ forth.name }}</span> </a>
        </li>
        <li v-else>
          <span> {{ forth.name }}</span>
        </li>

        <li v-if="fifth.active">
          <a :href="fifth.to" class="breadcrumbs__link"> <span> {{ fifth.name }}</span> </a>
        </li>
        <li v-else>
          <span> {{ fifth.name }}</span>
        </li>


      </ul>
    </nav>
  </div>

</template>

<script>

export default {
  props: {
    first: {
      type: Object,
      default: () => ({
        from: false,
        to: false,
        active: false,
      })
    },

    second: {
      type: Object,
      default: () => ({
        from: false,
        to: false,
        active: false,
      })
    },

    third: {
      type: Object,
      default: () => ({
        from: false,
        to: false,
        active: false,
      })
    },

    forth: {
      type: Object,
      default: () => ({
        from: false,
        to: false,
        active: false,
      })
    },

    fifth: {
      type: Object,
      default: () => ({
        from: false,
        to: false,
        active: false,
      })
    },
  },
}
</script>

<style scoped>
.v-application ul, .v-application ol {
  padding-left: 0px;
}
</style>
