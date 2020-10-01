<template>
  <v-app>

    <div class="slider__block"  :style="{'margin-left': '-' + (73 * currentReview) + '%'}">


      <div class="testi-card">
        <div class="testi-card__item">
          <div class="testi-card__photo ibg">
            <img :src="reviews[0].url" alt=""/>
          </div>
          <div class="testi-card__info">
            <div class="testi-card__wrap">
              <h3 class="testi-card__title">{{reviews[0].name}}</h3>
              <span class="testi-card__date">26.08.2020</span>
            </div>
            <div class="testi-card__text">
              {{reviews[0].description}}
            </div>
          </div>
        </div>
      </div>

      <div class="testi-card active"
           v-for="(review, index) in reviews" :key="index"
           >


        <div class="testi-card__item">
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

      <div class="testi-card">
        <div class="testi-card__item">
          <div class="testi-card__photo ibg">
            <img :src="reviews[0].url" alt=""/>
          </div>
          <div class="testi-card__info">
            <div class="testi-card__wrap">
              <h3 class="testi-card__title">{{reviews[0].name}}</h3>
              <span class="testi-card__date">26.08.2020</span>
            </div>
            <div class="testi-card__text">
              {{reviews[0].description}}
            </div>
          </div>
        </div>
      </div>


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
        if (this.currentReview >= this.reviews.length) {
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
  .testi-card {
    transition: 0.3s;

  }

  .btn_left {
    position: absolute;
    top: 45%;
    left: 15%;
  }

  .btn_right {
    position: absolute;
    top: 45%;
    left: 85%;

  }

  .about-slider__item,
  .testi-card__item {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    font-size: 0;
    -webkit-box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.1);
    box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.1);
    padding: 40px;
    width: 100%;

    overflow: hidden
  }


  .slider__block {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    font-size: 0;
    margin: 50px 0px 50px 0px;
    position: relative;
    transition: 0.3s;
    width: 100%;
    min-height: 20rem;
    max-height: 20rem;


  }

  .slider .testi-card {
    margin: 0px 60px 0px 0px;

    flex: 0 0 70%;
    opacity: .3;
  }

  .slider .testi-card.active {
    opacity: 1;
  }

  .slider .testi-card:nth-child(1) {
    margin: 0px 60px 0px -57%;
  }
  .slider .testi-card:nth-child(2) {
    margin: 0px 60px 0px 0%;
  }
</style>
