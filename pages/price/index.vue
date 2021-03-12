<template>
  <section class="table sect-mt">
    <div class='container'>
      <nav class="breadcrumbs">
        <ul class="breadcrumbs__list">
          <li>
            <a href="/" class="breadcrumbs__link">Главная</a>
          </li>
          <li>
            <span>Цены на натяжные потолки и услуги</span>
          </li>
        </ul>
      </nav>
      <h1 class="table__title my-title">
        Цены на натяжные потолки и услуги
      </h1>

      <!--Прайс потолков-->
      <div class="table__block">
        <div class="table__head">
          <div class="table__head-name">Натяжные потолки (полотно)</div>
          <div class="table__head-unit">Ед. Изм.</div>
          <div class="table__head-price">Стоимость (руб.)</div>
        </div>
        <div class="table__row" v-for="ceiling in ceilings">
          <div class="table__row-name">
            <a v-if="ceiling.href" :href="ceiling.href">{{ ceiling.title }}</a>
            <span v-else>{{ ceiling.title }}</span>
          </div>
          <div class="table__row-unit">{{ ceiling.unit }}</div>
          <div class="table__row-price">{{ ceiling.price }}</div>
        </div>
      </div>
      <!--Прайс потолков-->

      <!--Прайс работ-->
      <div class="table__block">
        <div class="table__head">
          <div class="table__head-name">Работы</div>
          <div class="table__head-unit">Ед. Изм.</div>
          <div class="table__head-price">Стоимость (руб.)</div>
        </div>
        <div class="table__row" v-for="work in works">
          <div class="table__row-name">
            <a v-if="work.href" :href="work.href">{{ work.title }}</a>
            <span v-else>{{ work.title }}</span>
          </div>
          <div class="table__row-unit">{{ work.unit }}</div>
          <div class="table__row-price">{{ work.price }}</div>
        </div>
      </div>
      <!--Прайс работ-->

      <!--Прайс освещения-->
      <div class="table__block">
        <div class="table__head">
          <div class="table__head-name">Светильники</div>
          <div class="table__head-unit">Ед. Изм.</div>
          <div class="table__head-price">Стоимость (руб.)</div>
        </div>
        <div class="table__row" v-for="lightning in lightnings">
          <div class="table__row-name">
            <a v-if="lightning.href" :href="lightning.href">{{ lightning.title }}</a>
            <span v-else>{{ lightning.title }}</span>
          </div>
          <div class="table__row-unit">{{ lightning.unit }}</div>
          <div class="table__row-price">{{ lightning.price }}</div>
        </div>
      </div>
      <!--Прайс освещения-->

      <!--Прайс карнизы-->
      <div class="table__block">
        <div class="table__head">
          <div class="table__head-name">Карнизы</div>
          <div class="table__head-unit">Ед. Изм.</div>
          <div class="table__head-price">Стоимость (руб.)</div>
        </div>
        <div class="table__row" v-for="cornice in cornices">
          <div class="table__row-name">
            <a v-if="cornice.href" :href="cornice.href">{{ cornice.title }}</a>
            <span v-else>{{ cornice.title }}</span>
          </div>
          <div class="table__row-unit">{{ cornice.unit }}</div>
          <div class="table__row-price">{{ cornice.price }}</div>
        </div>
      </div>
      <!--Прайс карнизы-->

      <!--Прайс услуги-->
      <div class="table__block">
        <div class="table__head">
          <div class="table__head-name">Услуги</div>
          <div class="table__head-unit">Ед. Изм.</div>
          <div class="table__head-price">Стоимость (руб.)</div>
        </div>
        <div class="table__row" v-for="service in services">
          <div class="table__row-name">
            <a v-if="service.href" :href="service.href">{{ service.title }}</a>
            <span v-else>{{ service.title }}</span>
          </div>
          <div class="table__row-unit">{{ service.unit }}</div>
          <div class="table__row-price">{{ service.price }}</div>
        </div>
      </div>
      <!--Прайс услуги-->

    </div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: 'Цены на натяжные потолки в Краснодаре',
      meta: [
        {
          hid: 'yandex-verification',
          name: 'yandex-verification',
          content: '0e637a5f8bb61215'
        },
        {
          hid: 'description',
          name: 'description',
          content: 'Цены на натяжные потолки в Краснодаре! 10 лет гарантии. Бесплатный замер. Господин Потолков.'
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
  data() {
    return {

      ceilings: [
        {
          title: 'Белый (матовый, глянцевый) до 1,4 м. АКЦИЯ',
          unit: 'кв.м.',
          price: '189',
          href: 'ceilings_catalog/',
        },
        {
          title: 'Белый (матовый, глянцевый, сатиновый) до 2 м.',
          unit: 'кв.м.',
          price: '260',
          href: 'ceilings_catalog/',
        },
        {
          title: 'Белый (матовый, глянцевый, сатиновый) до 3,2 м.',
          unit: 'кв.м.',
          price: '280',
          href: '',
        },
        {
          title: 'Белый (матовый, глянцевый, сатиновый) до 3,6 м.',
          unit: 'кв.м.',
          price: '320',
          href: 'ceilings_catalog/',
        },
        {
          title: 'Белый (матовый, глянцевый, сатиновый) до 5.5 м.',
          unit: 'кв.м.',
          price: '350',
          href: 'ceilings_catalog/',
        },
        {
          title: 'Цветной (матовый, глянцевый) до 3,6 м.',
          unit: 'кв.м.',
          price: '380',
          href: 'ceilings_catalog/',
        },
        {
          title: 'Цветной (матовый, глянцевый) до 5 м.',
          unit: 'кв.м.',
          price: '450',
          href: 'ceilings_catalog/',
        },
        {
          title: 'Фактурные полотна (в асс)',
          unit: 'кв.м.',
          price: '800',
          href: 'ceilings_catalog/',
        },
        {
          title: 'Фотопечать до 3,2 м.',
          unit: 'кв.м.',
          price: '1600',
          href: 'ceilings_catalog/',
        },
        {
          title: 'Фотопечать до 5 м. + спец. полотно',
          unit: 'кв.м.',
          price: '2400',
          href: 'ceilings_catalog/',
        },
        {
          title: 'Флоуресцентные',
          unit: 'кв.м.',
          price: '450',
          href: 'ceilings_catalog/',
        },
      ],
      works: [
        {
          title: 'Закладная под точечный светильник',
          unit: 'шт.',
          price: '330',
          href: 'ceilings_catalog/',
        },
        {
          title: 'Закладная под люстру',
          unit: 'шт.',
          price: '300',
          href: 'ceilings_catalog/',
        },
        {
          title: 'Закладная под карниз и установка',
          unit: 'м.п.',
          price: '350',
          href: 'ceilings_catalog/',
        },
        {
          title: 'Вставка потолочная белая',
          unit: 'м.п.',
          price: '60',
          href: 'ceilings_catalog/',
        },
        {
          title: 'Вставка потолочная цветная',
          unit: 'п.м.',
          price: '70',
          href: 'ceilings_catalog/',
        },
        {
          title: 'Обвод одного угла (5й и более)',
          unit: 'шт.',
          price: '150',
          href: 'ceilings_catalog/',
        },
        {
          title: 'Обвод одной трубы',
          unit: 'шт.',
          price: '350',
          href: 'ceilings_catalog/',
        },
        {
          title: 'Потолок двухуровневый с перегибом - стандарт',
          unit: 'п.м.',
          price: '1500',
          href: 'ceilings_catalog/',
        },
        {
          title: 'Потолок двухуровневый с перегибом - сложный',
          unit: 'шт.',
          price: '300',
          href: 'ceilings_catalog/',
        },
        {
          title: 'Парящий профиль',
          unit: 'п.м.',
          price: '400',
          href: 'ceilings_catalog/',
        },
        {
          title: 'Прямолинейная спайка двух цветов',
          unit: 'м.п.',
          price: '25% к стоимости',
          href: 'ceilings_catalog/',
        },
        {
          title: 'Криволинейная спайка двух цветов',
          unit: 'шт.',
          price: 'Индивидуально',
          href: 'ceilings_catalog/',
        },
        {
          title: 'Криволинейность',
          unit: 'п.м.',
          price: '300',
          href: 'ceilings_catalog/',
        },
        {
          title: 'Соединительный профиль',
          unit: 'п.м.',
          price: '400',
          href: 'ceilings_catalog/',
        },
        {
          title: 'Монтаж LED ленты',
          unit: 'п.м.',
          price: '200',
          href: 'ceilings_catalog/',
        },
        {
          title: 'Монтаж бруса',
          unit: 'п.м.',
          price: '350',
          href: 'ceilings_catalog/',
        },
        {
          title: 'Монтаж провода для спотов',
          unit: 'п.м.',
          price: '100',
          href: 'ceilings_catalog/',
        },
      ],
      lightnings: [
        {
          title: 'Светильник Gx53(стандарт) асс.',
          unit: 'шт.',
          price: '260',
          href: 'ceilings_catalog/',
        },
        {
          title: 'Светильник Gx70(стандарт) асс.',
          unit: 'шт.',
          price: '800',
          href: 'ceilings_catalog/',
        },
        {
          title: 'Светильник Gx53(c декором) асс.',
          unit: 'шт.',
          price: 'от 650',
          href: 'ceilings_catalog/',
        },
      ],
      cornices: [
        {
          title: 'Карниз для штор 1 м.п.',
          unit: 'шт.',
          price: '150',
          href: 'ceilings_catalog/',
        },
        {
          title: 'Карниз для штор 1,5 м.п.',
          unit: 'шт.',
          price: '175',
          href: 'ceilings_catalog/',
        },
        {
          title: 'Карниз для штор 2 м.п.',
          unit: 'шт.',
          price: '300',
          href: 'ceilings_catalog/',
        },
        {
          title: 'Карниз для штор 2,5 м.п.',
          unit: 'шт.',
          price: '400',
          href: 'ceilings_catalog/',
        },
        {
          title: 'Карниз для штор 3 м.п.',
          unit: 'шт.',
          price: '450',
          href: 'ceilings_catalog/',
        },
        {
          title: 'Карниз для штор 3,5 м.п.',
          unit: 'шт.',
          price: '500',
          href: 'ceilings_catalog/',
        },
        {
          title: 'Карниз для штор 4 м.п.',
          unit: 'шт.',
          price: '600',
          href: 'ceilings_catalog/',
        },
      ],
      services: [
        {
          title: 'Подбивка старого потолка пленкой',
          unit: 'кв.м.',
          price: '300',
          href: '',
        },
        {
          title: 'Утепление потолка',
          unit: 'кв.м.',
          price: 'от 500',
          href: '',
        },
        {
          title: 'Выезд',
          unit: ' - ',
          price: 'от 300',
          href: '',
        },
        {
          title: 'Слив воды',
          unit: ' - ',
          price: 'от 500',
          href: '',
        },
        {
          title: 'Мелкий ремонт',
          unit: ' - ',
          price: 'от 500',
          href: '',
        },
      ]
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 1270px;
  margin: 0 auto;
  width: 100%;
}

.table {
  margin: 150px 0px 45px 0px;
  padding: 0px 0px 95px 0px;
}
.table__block {
  margin: 50px auto;
}
.table__title {
  margin: 0px 0px 30px 0px;
}

.table__head {
  display: flex;
  font-size: 0;
  justify-content: space-between;
  align-items: center;
  background: #666;
  padding: 20px 27px;
  border: 2px solid #666;
  border-width: 1px 2px;
  flex: 7em 0 0;
}

.table__head-name {
  font-size: 18px;
  color: #fff;
  font-family: "Geometria-Bold";
  flex: 0 0 70%;
}

.table__head-unit {
  font-size: 18px;
  color: #fff;
  flex: 0 0 15%;
}

.table__head-price {
  font-size: 18px;
  color: #fff;
  font-family: "Geometria-Bold";
  max-width: 70%;
  flex: 0 0 15%;
}

.table__row {
  display: flex;
  font-size: 0;
  justify-content: space-between;
  align-items: center;
  padding: 20px 27px;
  border: 2px solid #666;
  border-width: 1px 2px;
}

.table__row:nth-child(odd) {
  background: #ccc;
}

.table__row:last-child {
  border-width: 1px 2px 2px 2px;
}

.table__row-name {
  font-size: 18px;
  color: #333;
  flex: 0 0 70%;
}

.table__row-unit {
  font-size: 18px;
  color: #333;
  flex: 0 0 15%;
}

.table__row-price {
  font-size: 18px;
  color: #333;
  max-width: 70%;
  flex: 0 0 15%;
}

@media (max-width: 767.98px) {
  .table {
    padding: 0px 0px 65px 0px;
  }
}

@media (max-width: 479.98px) {
  .table__head, .table__row {
    padding: 18px 15px;
  }

  .table__head-name {
    font-size: 16px;
    flex: 0 0 40%;

  }

  .table__head-unit {
    font-size: 16px;
    flex: 0 0 30%;
  }

  .table__head-price {
    font-size: 16px;
    flex: 0 0 30%;
  }

  .table__row-name {
    font-size: 16px;
    flex: 0 0 40%;
  }

  .table__row-unit {
    font-size: 16px;
    flex: 0 0 30%;
  }

  .table__row-price {
    font-size: 16px;
    flex: 0 0 30%;
  }
}

</style>
