<template>
  <div>
    <section class="questions sect-mt">
      <div class='container'>
        <v-breadcrumbs class="mt"
                       :second="{name: 'Вопросы и ответы', to: false, active: false}"
        ></v-breadcrumbs>
        <h1 class="questions__title my-title">
          Вопросы и ответы
        </h1>
        <v-expansion-panels
          :popout="true"
          :multiple="true"
          :hover="true">
          <v-expansion-panel
            v-for="(question,i) in questions"
            :key="i"
          >
            <v-expansion-panel-header>{{ question.title }}</v-expansion-panel-header>
            <v-expansion-panel-content>
              {{ question.description }}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </section>

    <section class="add-testi">
      <div class='container'>
        <h2 class="add-testi__titlemy-title">
          Задать вопрос: </h2>
        <form action="#" class="add-testi__form">
          <div class="add-testi__form-input">
            <input autocomplete="off" type="text" name="form[]" placeholder="Ваше имя" class="input"/>
          </div>
          <div class="add-testi__form-input">
            <input autocomplete="off" type="email" name="form[]" placeholder="E-mail" class="input"/>
          </div>
          <textarea name="textarea" placeholder="Текст вопроса" class="input"></textarea>
          <button class="add-testi__form-btn btn">Отправить</button>
        </form>
      </div>
    </section>

  </div>
</template>

<script>
import vBreadcrumbs from '@/components/frontend/partials/vBreadcrumbs'

export default {
  components: {
    vBreadcrumbs
  },
  head() {
    return {
      title: `Вопросы о натяжных потолках - Господин Потолков`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Вопросы о натяжных потолках - Компания Господин Потолков предлагает натяжные потолки в Краснодаре от 260 р. с установкой!'
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
          'content': 'Натяжные потолки в Краснодаре от 260 р. - Господин Потолков',
        },
        {
          'property': 'og:description',
          'content': 'Компания Господин Потолков предлагает натяжные потолки в Краснодаре от 260 р. с установкой! 10 лет гарантии. Бесплатный замер.',
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
          'content': 'Натяжные потолки в Краснодаре от 260 р. - Господин Потолков'
        },
        {
          'name': 'twitter:card',
          'content': 'summary_large_image'
        },
        {
          'name': 'twitter:title',
          'content': 'Натяжные потолки в Краснодаре от 260 р. - Господин Потолков'
        },
        {
          'name': 'twitter:description',
          'content': 'Компания Господин Потолков предлагает натяжные потолки в Краснодаре от 260 р. с установкой! 10 лет гарантии. Бесплатный замер.'
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
      questions: [
        {
          title: 'Что сначала, делать потолки или клеить обои?',
          description: 'Сначала делают потолки, чтобы не запылить и не испачкать обои.'
        },
        {
          title: 'Имеют ли натяжные потолки запах?',
          description: 'Сами потолки запаха не имеют, но после монтажа может остаться запах газолина от тепловой пушки, который полностью исчезает после проветривания.'
        },
        {
          title: 'Какие у вас гарантии?',
          description: 'ы даем 10 лет гарантии на полотна и 2 года на светильники, комплектующие и все виды работ!'
        },
        {
          title: 'На сколько см опустится натяжной потолок?',
          description: 'В среднем новый потолк опустится на 4 см от самой нижней точки старого потолка. Но, учитывая что он будет идеально ровный, визуально потолок будет выше.'
        },
        {
          title: 'Какой срок службы натяжных потолков?',
          description: 'Срок годности у натяжных потолков не ограничен. При должном уходе и бережном отношении, натяжной потолок порадует Вас на очень долгое время.'
        },
        {
          title: 'Сколько по времени длится установка натяжного потолка?',
          description: 'Время установки натяжного потолка зависит от некоторых факторов, а именно: площади, наличия дополнительных углов, количества  точек света, шторных багетов. В среднем, длительность монтажа натяжного  потолока, площадью в 15кв.м и с установкой одной люстры займёт 2 часа.'
        },
        {
          title: 'У вас бесшовные натяжные потолки?',
          description: 'Шовность потолков может быть в следующих случаях: если ширина помещения больше 6 метров, либо это декоративный шов - спайка, которая позволяет интересно обыграть дизайн потолка, избегая более сложных конструкций доя нескольких уровней на натяжном потолке.'
        },
        {
          title: 'Как ухаживать за натяжными потолками?',
          description: 'Натяжные потолки неприхотливы в уходе, если используются не абразивные средства. Подойдёт и жидкость для мытья посуды и мягкая губка. Но лучше, если будут использоваться специализированные средства для ухода за натяжным потолком. '
        },
      ]
    }
  }

}
</script>

<style scoped>
.container {
  max-width: 1370px;
  margin: 0 auto;
  width: 100%;
}

.questions__title {
  margin: 50px 0 50px 0;
}

.questions {
  padding: 0px 0px 20px 0px;
}

@media (max-width: 768px) {
  .questions {
    padding: 0px 0px 80px 0px;
  }
}

section.sect-mt {
  margin-top: 150px;
}

section > div {
  margin-top: 24px;
  margin-bottom: 24px;
}

.Banner {
  background-image: url("https://picsum.photos/id/1011/2000/500");
}

.background-image {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.ImageBoxed {
  flex: 0 0 25%;
  max-width: 25%;
}
</style>
