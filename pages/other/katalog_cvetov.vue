<template>
  <div>

    <section class="catalog catalog-color">
      <div class='container'>

        <v-breadcrumbs
          :second="{name: 'Каталог цветов и фактур', to: false, active: false}"
        ></v-breadcrumbs>

        <h1 class="catalog__title my-title">Каталог цветов и фактур</h1>


        <div class="colors__row">
          <div class="colors__photo">
            <img :src="require('assets/img/colors/photo.jpg')" alt=""/>
          </div>
          <div class="colors__text">
            <p>
              Выбор цвета натяжного потолка достаточно сложный процесс. Правильно подобранные цвета придадут ощущение
              гармонии и уюта, а неправильно выбранная цветовая гамма потолка способна серьезно испортить дизайн
              помещения.</p>

            <p class="b">
              Дадим несколько универсальных рекомендаций по использованию популярных расцветок:</p>

            <p><span class="b">Белый</span> – универсальный цвет, который идеально подходит для всех типов потолков.</p>
            <p><span class="b">Черный</span> — лучше использовать в сочетании с белыми тонами, либо с потолком в стиле «звездное небо» с точечными
              светодиодными лампами, расположенными в нужном порядке.</p>
            <p><span class="b">Черно-белый</span> идеально подходит для разделения помещения на зоны, визуально расширяет помещение.</p>
            <p><span class="b">Красный</span> может оказывать влияние на психику человека. Символизируют огонь, страсть, радость. Лучше использовать
              для спальни и прихожей с северной стороны. Глянцевый потолок красного цвета используйте для визуального
              увеличения высоты комнаты.</p>
            <p><span class="b">Синий и голубой</span> – спокойный, вызывающий чувство умиротворенности. Подходит для офиса, детской комнаты или
              спальни. Также будет уместен в душе, ванной, бассейне.</p>
            <p><span class="b">Золотой</span> – самый броский из цветовой палитры. Хорошо использовать в парикмахерских, салонах красоты, ресторанах
              либо других подобных помещениях. Из жилых рекомендуем использовать разве что в зале или гостиной.</p>
            <p><span class="b">Желтый</span> – активность и беззаботность, создает эффект солнечного пространства. Идеально подходит для детской
              комнаты.</p>
            <p><span class="b">Сиреневый</span>– романтика и загадочность. Идеально подходит для фотопечать. Не рекомендуется использовать в
              офисах.</p>
            <p><span class="b">Зеленый</span> — второй универсальный цвет после белого. Подходит практически для любого помещения.</p>
            <p><span class="b">Цвет слоновой кости</span> смотрится живее и мягче, чем белый. Ассоциируется с роскошью и благородством. Подходит для
              любых типов помещений.</p>
            <p><span class="b">Бежевый</span> – классический цвет, создает в помещении уют и теплоту. Подходит для любого помещения, идеален для
              фотопечати.</p>
            <p><span class="b">Коричневый</span> – не рекомендуется использовать в спальнях и комнатах малого размера</p>
            <p><span class="b">Розовый</span> – яркий и легкий цвет, не рекомендуется использовать в подростковых комнатах. Преимущественно
              используются в кухне, зале либо спальне.</p>
            <p><span class="b">Натяжной потолок с блестками "Галактика"</span> – используется для придания помещению ощущения роскоши и богатства.</p>

          </div>
        </div>

        <h2 class="catalog__title my-title">Фактуры натяжных потолков</h2>
        <div class="catalog__row row-colors">

          <div class="catalog__column" v-for="factura in facturi">
            <div class="catalog__item">
              <div class="catalog__item-photo ibg">
                <img :src="factura.src" alt=""/>
              </div>
              <div class="catalog__item-title">{{ factura.title }}<br>
              <span class="subtitle">{{factura.subtitle}}</span></div>
            </div>
          </div>

        </div>
      </div>
    </section>

  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import vBreadcrumbs from '@/components/frontend/partials/vBreadcrumbs'

export default {

  components: {
    vBreadcrumbs
  },

  head() {
    return {
      title: `Каталог цветов и фактур - Господин Потолков`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Каталог цветов и фактур - Компания Господин Потолков предлагает натяжные потолки в Краснодаре от 189 р. с установкой!'
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

  computed: {
    ...mapGetters({
      facturi: 'frontend/facturi',
    }),
  }
}
</script>

<style scoped>

.container {
  max-width: 1370px;
  margin: 0 auto;
  width: 100%;
}
.subtitle {
  font-size: 12px;
}
.b {
  font-weight: bold;
}
.catalog {
  padding: 150px 0px 100px 0px;
}

.catalog-color {
  padding: 150px 0px 0px 0px;
}

.catalog__title {
  margin: 0px 0px 20px 0px;
}

.catalog__text {
  font-size: 18px;
  line-height: 30px;
  margin: 0px 0px 35px 0px;
}

.catalog__row {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  font-size: 0;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin: 0px -10px;
}

.catalog__column {
  padding: 0px 10px;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 20%;
  flex: 0 0 20%;
  margin: 0px 0px 25px 0px;
}

.catalog__item {
  width: 100%;
}

.catalog__item-photo {
  margin: 0px 0px 18px 0px;
  padding: 0px 0px 180px 0px;
  display: block;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}

@media (min-width: 992px) {
  .catalog__item-photo:hover {
    -moz-transform: scale(1.05);
    -ms-transform: scale(1.05);
    -webkit-transform: scale(1.05);
    -o-transform: scale(1.05);
    transform: scale(1.05);
  }
}

.catalog__item-title {
  font-size: 18px;
  font-family: "Geometria-Bold";
  font-style: italic;
  text-transform: uppercase;
  display: block;
  color: #333;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}

@media (min-width: 992px) {
  .catalog__item-title:hover {
    color: #ff0000;
  }
}

@media (max-width: 1382px) {
  .catalog__column {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
  }
}

@media (max-width: 991.98px) {
  .catalog-color {
    padding: 150px 0px 0px 0px;
  }

  .catalog__column {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 33.33333%;
    flex: 0 0 33.33333%;
  }
}

@media (max-width: 767.98px) {
  .catalog-color {
    padding: 150px 0px 0px 0px;
  }

  .catalog__item-title {
    font-size: 16px;
  }
}

@media (max-width: 576px) {
  .catalog__column {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
  }
}

@media (max-width: 440px) {
  .catalog__column {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
  }
}

.catalog .row-colors .catalog__column {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 25%;
  flex: 0 0 25%;
}

.catalog .row-colors .catalog__item-photo {
  padding: 0px 0px 70% 0px;
}

@media (max-width: 991.98px) {
  .catalog .row-colors .catalog__column {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 33.3333%;
    flex: 0 0 33.3333%;
  }
}

@media (max-width: 576px) {
  .catalog .row-colors .catalog__column {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
  }
}

@media (max-width: 400px) {
  .catalog .row-colors .catalog__column {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
  }
}


.colors {
  padding: 44px 0px 86px;
}

.colors__photo {
  float: left;
  max-width: 900px;
  margin: 0px 40px 20px 0px;
  float: left;
  -ms-flex-item-align: start;
  align-self: flex-start;
}

.colors__photo img {
  display: block;
  max-width: 100%;
}

.colors__text {
  -webkit-box-flex: 0;
  -ms-flex: 0 1 435px;
  flex: 0 1 435px;
}

.colors__text p {
  font-size: 18px;
  line-height: 30px;
  margin: 0px 0px 35px 0px;
}

@media (max-width: 1382px) {
  .colors__photo {
    max-width: 700px;
  }
}

@media (max-width: 991.98px) {
  .colors {
    padding: 40px 0px 50px;
  }

  .colors__photo {
    float: none;
    margin: 0px 0px 30px 0px;
  }

  .colors__text p {
    margin: 0px 0px 20px 0px;
  }
}

@media (max-width: 479.98px) {
  .colors {
    padding: 20px 0px 30px;
  }

  .colors__photo {
    float: none;
    margin: 0px 0px 20px 0px;
  }

  .colors__text p {
    font-size: 16px;
    line-height: 25px;
    margin: 0px 0px 20px 0px;
  }
}
</style>
