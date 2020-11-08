<template>
  <div class="wrapper">
    <div class='container'>
      <h2 class="about__title title">Что о нас говорят?</h2>

      <section class="slider">
        <MySlider
          :reviews="reviews"
        ></MySlider>
      </section>
    </div>
  </div>
</template>

<script>
import MySlider from "@/components/partials/MySlider"

export default {
  components: {
    MySlider
  },
  data() {
    return {
      reviews: [
        {
          id: 0,
          name: 'Александр Червяков',
          date: '2.06.2020',
          // url: "/assets/img/reviews/review01.jpg",
          url: require('~/assets/img/reviews/review01.jpg'),
          isActive: false,
          description: 'В нашей семье с появлением дочери, вопрос безопасности (предметов быта и отделочных материалов в том числе) встал  на первое место! Поэтому, когда делали ремонт в детской, сделали выбор в пользу потолка качества «Премиум», к нашему счастью долго искать не пришлось, в компании «Господин потолков» полотна для потолка только «Премиум» качества, ещё и фотопечать высокого качества, которая не тускнеет со временем! Оперативно и качественно - рекомендуем!'
        },
        {
          id: 1,
          name: 'Андрей Максименко',
          date: '19.07.2020',
          url: require('~/assets/img/reviews/review02.jpg'),
          isActive: false,
          description: 'Недавно купил себе в квартиру в Краснодаре, и, когда делал ремонт - встал вопрос потолков. Долго искал фирму, которая смогла бы оправдать критерий «цена-качество». К сожалению, был печальный опыт. Переживал, что опять попаду на «шабашников». Но мои опасения не оправдались и это порадовало. У ребят низкие цены, все качественно и в короткие сроки! Теперь за потолками только к ним!'
        },
        {
          id: 2,
          name: 'Юлия Завадская',
          date: '16.09.2020',
          url: require('~/assets/img/reviews/review03.jpg'),
          isActive: false,
          description: 'Не хотелось классический потолок, а хотелось что-то не стандартное, что подошло бы к моему интерьеру! Обратилась в компанию, после консультации решили делать «перфорированный потолок». Просто бомба! Такой красоты у меня еще не было! А подсветка создаёт эффект невесомости потолка. Я очень довольна проделанной работой компании «Господин потолков». Всё отлично от консультации менеджера до результата. Ещё и светильник в подарок! Следующие потолки только здесь буду заказывать!'
        },

      ]
    }
  },
   mounted() {
    console.log(this.$route.query)
   }

}
</script>

<style scoped>
.container {
  max-width: 1370px;
  margin: 100px auto;
  width: 100%;

}

.slider {
  margin: 0px 0px 0px 0px;
}

.about__title {
  margin: 0px 0px 0px 0px;
}

@media (max-width: 767.98px) {

  .about__title {
    margin: 0px 0px 40px 0px;
  }
}

</style>
