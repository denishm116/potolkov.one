<template>
  <v-app>
    <v-carousel
      cycle
      height="450"
      fullwidth
      hide-delimiter-background
      :show-arrows-on-hover="true"
    >
      <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i"
      >
        <v-row
          class="fill-height social__slider-slide"
          align="center"
          justify="center"
        >
          <div class='container'>
            <h2 class="social__title">
              {{slide.header}}
            </h2>
            <ul class="social__icons">
              <li>
                <a href="" class="social__link">
                  <img src="~/assets/img/social/icons/01.png" alt="vk"/>
                </a>
              </li>
              <li>
                <a href="" class="social__link">
                  <img src="~/assets/img/social/icons/02.png" alt="Однокласники"/>
                </a>
              </li>
              <li>
                <a href="" class="social__link">
                  <img src="~/assets/img/social/icons/03.png" alt="Инстаграмм"/>
                </a>
              </li>
              <li>
                <a href="" class="social__link">
                  <img src="~/assets/img/social/icons/04.png" alt="Фейсбук"/>
                </a>
              </li>
            </ul>
          </div>
        </v-row>

      </v-carousel-item>
    </v-carousel>
  </v-app>

</template>

<script>
  export default {
    data() {
      return {
        slides: [
          {
            header: 'Подписывайся!'
          },
          {
            header: 'Оставляй отзывы!'
          },
          {
            header: 'Получай скидку 5%'
          },

        ],
      }
    },
    methods: {
      testMethod() {

        // console.log(this.$el.getElementsByClassName('v-application--wrap')[0].classList.remove('v-application--wrap'))
      }
    },
    mounted() {
      this.testMethod()
    }

  }
</script>

<style scoped>
  .v-application--wrap {

  }

  .container {
    max-width: 1270px;
    margin: 0 auto;
    width: 100%;
  }
</style>
