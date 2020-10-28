<template>
  <v-app>

    <div class="slider__block">


<!--      <div class="testi-card">-->
<!--        <div class="testi-card__item">-->
<!--          <div class="testi-card__photo ibg">-->
<!--            <img :src="reviews[0].url" alt=""/>-->
<!--          </div>-->
<!--          <div class="testi-card__info">-->
<!--            <div class="testi-card__wrap">-->
<!--              <h3 class="testi-card__title">{{reviews[0].name}}</h3>-->
<!--              <span class="testi-card__date">26.08.2020</span>-->
<!--            </div>-->
<!--            <div class="testi-card__text">-->
<!--              {{reviews[0].description}}-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->

      <div class="testi-card"
           v-for="(review, index) in reviews" :key="index"
           >
        <div class="testi-card__item"  :style="{'margin-left': '-' + (100 * currentReview) + '%'}">
          <div class="testi-card__photo ibg">
            <img :src="review.url" alt=""/>
          </div>
          <div class="testi-card__info">
            <div class="testi-card__wrap">
              <h3 class="testi-card__title">{{review.name}}</h3>
              <span class="testi-card__date">26.08.2020</span>
            </div>
            <div class="testi-card__text">
              {{review.description}}

            </div>
          </div>
        </div>
      </div>

<!--      <div class="testi-card">-->
<!--        <div class="testi-card__item">-->
<!--          <div class="testi-card__photo ibg">-->
<!--            <img :src="reviews[0].url" alt=""/>-->
<!--          </div>-->
<!--          <div class="testi-card__info">-->
<!--            <div class="testi-card__wrap">-->
<!--              <h3 class="testi-card__title">{{reviews[0].name}}</h3>-->
<!--              <span class="testi-card__date">26.08.2020</span>-->
<!--            </div>-->
<!--            <div class="testi-card__text">-->
<!--              {{reviews[0].description}}-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->


    </div>
    <div class="btn_left">
      <v-btn class="mx-2 red" fab dark small @click="prevReview">
        <v-icon dark>mdi-chevron-left</v-icon>
      </v-btn>
    </div>
    <div class="btn_right">
      <v-btn class="mx-2 red" fab dark small @click="nextReview">
        <v-icon dark>mdi-chevron-right</v-icon>
      </v-btn>
    </div>
  </v-app>
</template>

<script>
  export default {
    props: {
      reviews: {
        type: Array,
        default: () => [{}]
      }
    },
    data() {
      return {
        currentReview: 0,
      }
    },
    methods: {
      nextReview() {
        if (this.currentReview >= this.reviews.length-1) {
          this.currentReview = 0
        } else {
          this.currentReview++
        }

      },
      prevReview() {
        if (this.currentReview > 0) {
          this.currentReview--
        }

      },
    }

  }
</script>

<style scoped>






</style>
