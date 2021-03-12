<template>
  <div>
    <section class="testi sect-mt">
      <div class='container'>
        <v-breadcrumbs class="mt"
                       :second="{name: 'Отзывы', to: false, active: false}"
        ></v-breadcrumbs>
        <h2 class="blog__title my-title">
          Отзывы о компании Господин Потолков
        </h2>
        <div class="testi__block">
          <div class="testi-card" v-for="review in reviews">
            <div class="testi-card__item">
              <div class="testi-card__photo ibg">
                <img :src="review.url" :alt="review.name"/>
              </div>
              <div class="testi-card__info">
                <div class="testi-card__wrap">
                  <h3 class="testi-card__title">{{ review.name }}</h3>
                  <span class="testi-card__date">26.08.2020</span>
                </div>
                <div class="testi-card__text">
                  {{review.description}}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    <section class="add-testi">
      <div class='container'>
        <h2 class="add-testi__titlemy-title">
          Оставить свой отзыв
        </h2>
        <form action="#" class="add-testi__form">
          <div class="add-testi__form-input">
            <input autocomplete="off" type="text" name="form[]" placeholder="Ваше имя" class="input"/>
          </div>
          <div class="add-testi__form-input">
            <input autocomplete="off" type="email" name="form[]" placeholder="E-mail" class="input"/>
          </div>
          <textarea name="textarea" placeholder="Текст отзыва" class="input"></textarea>
          <button class="add-testi__form-btn btn">Отправить</button>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import vBreadcrumbs from '@/components/frontend/partials/vBreadcrumbs'

export default {

  head() {
    return {
      title: `Отзывы о компании Господин Потолков`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Отзывы о компании Господин Потолков - Компания Господин Потолков предлагает натяжные потолки в Краснодаре от 189 р. с установкой!'
        },
        {
          'property': 'og:type',
          'content': 'website',
        },
        {
          'property': 'og:url',
          'content': `https://potolkov.shop${this.$route.path}`,
        },
        {
          'property': 'og:title',
          'content': 'Натяжные потолки в Краснодаре от 189 р. - Господин Потолков',
        },
        {
          'property': 'og:description',
          'content': 'Компания Господин Потолков предлагает натяжные потолки в Краснодаре от 189 р. с установкой! 10 лет гарантии. Бесплатный замер.',
        },
        {
          'property': 'og:site_name',
          'content': 'potolkov.shop',
        },
        {
          'property': 'og:locale',
          'content': 'ru_RU',
        },
        {
          'property': 'og:image',
          'content': 'https://potolkov.shop/site-screen.jpg'
        },
        {
          'property': 'og:image:alt',
          'content': 'Натяжные потолки в Краснодаре от 189 р. - Господин Потолков'
        },
        {
          'name': 'twitter:card',
          'content': 'summary_large_image'
        },
        {
          'name': 'twitter:title',
          'content': 'Натяжные потолки в Краснодаре от 189 р. - Господин Потолков'
        },
        {
          'name': 'twitter:description',
          'content': 'Компания Господин Потолков предлагает натяжные потолки в Краснодаре от 189 р. с установкой! 10 лет гарантии. Бесплатный замер.'
        },
        {
          'name': 'twitter:image:src',
          'content': 'https://potolkov.shop/site-screen.jpg'
        },
      ]
    }
  },

  components: {
    vBreadcrumbs
  },
  data() {
    return {
      reviews: [
        {
          id: 0,
          name: 'Александр Червяков',
          date: '2.06.2020',
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
}
</script>

<style scoped>
.container {
  max-width: 1370px;
  margin: 150px auto;
  width: 100%;

}

</style>
