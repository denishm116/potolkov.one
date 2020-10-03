<template>
  <div class="margin">
    <section class="cattegory">
      <div class='container'>
        <nav class="breadcrumbs">
          <ul class="breadcrumbs__list">
            <li>
              <a href="" class="breadcrumbs__link">Главная</a>
            </li>
            <li>
              <span>Хлебные крошки</span>
            </li>
          </ul>
        </nav>
        <h2 class="cattegory__title title">{{ceiling.title}}</h2>
        <div class="cattegory__row">
          <div class="cattegory__column">
            <div class="cattegory__gallery fotorama" data-nav="thumbs">
              <img width=450 src="https://s.fotorama.io/1.jpg" alt="">

            </div>
          </div>
          <div class="cattegory__column">
            <p class="cattegory__text">{{ceiling.description}}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="projects">
      <div class='container'>
        <h2 class="projects__title title">Наши реализованные проекты</h2>


      </div>
    </section>
  </div>
</template>

<script>

  export default {
    data: () => {
      return {
        ceiling: '',
        title: '',
        description: ''

      }

    },
    computed: {

      path() {
        return process.env.baseURL + 'storage/'
      }
    },
    methods: {
      async fetchCeiling() {

        const ceiling = await this.$axios.$get('frontend/getCeilings/' + this.$route.params.slug)
        this.ceiling = ceiling
        console.log(this.ceiling)
      },

    },
    mounted() {
      this.fetchCeiling()


    },

  }
</script>

<style scoped>
  .margin {
    margin: 150px 0 0 0;
  }
  .container {
    max-width: 1370px;
    margin: 0 auto;
    width: 100%;
  }
</style>
