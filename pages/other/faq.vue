<template>
  <div>
    <section class="questions sect-mt">
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
        <div class="questions__title title">
          Часто задаваемые вопросы
        </div>
        <v-expansion-panels
          :popout="true"
          :multiple="true"
          :hover="true">
          <v-expansion-panel
            v-for="(question,i) in questions"
            :key="i"
          >
            <v-expansion-panel-header>{{question.title}}</v-expansion-panel-header>
            <v-expansion-panel-content>
              {{question.description}}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </section>

    <section class="add-testi">
      <div class='container'>
        <h2 class="add-testi__title title">
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

    <section class="blog">
      <div class='container'>
        <h2 class="blog__title read">
          Читайте так же
        </h2>
        <div class="blog__row row-read">
          <div class="blog__column">
            <div class="blog__item">
              <a href="" class="blog__item-photo ibg">
                <img :src="require('assets/img/blog/01.jpg')" alt="">
              </a>
              <div class="blog__item-date">
                04 Май 2020
              </div>
              <a href="" class="blog__item-title">
                Название статьи
              </a>
              <div class="blog__item-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo
                iduntlabore et dolore magna aliqua.
              </div>
            </div>
          </div>
          <div class="blog__column">
            <div class="blog__item">
              <a href="" class="blog__item-photo ibg">
                <img :src="require('assets/img/blog/02.jpg')" alt="">
              </a>
              <div class="blog__item-date">
                04 Май 2020
              </div>
              <a href="" class="blog__item-title">
                Название статьи
              </a>
              <div class="blog__item-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo
                iduntlabore et dolore magna aliqua.
              </div>
            </div>
          </div>
          <div class="blog__column">
            <div class="blog__item">
              <a href="" class="blog__item-photo ibg">
                <img :src="require('assets/img/blog/03.jpg')" alt="">
              </a>
              <div class="blog__item-date">
                04 Май 2020
              </div>
              <a href="" class="blog__item-title">
                Название статьи
              </a>
              <div class="blog__item-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo
                iduntlabore et dolore magna aliqua.
              </div>
            </div>
          </div>

          <div class="blog__column">
            <div class="blog__item">
              <a href="" class="blog__item-photo ibg">
                <img :src="require('assets/img/blog/04.jpg')" alt="">
              </a>
              <div class="blog__item-date">
                04 Май 2020
              </div>
              <a href="" class="blog__item-title">
                Название статьи
              </a>
              <div class="blog__item-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo
                iduntlabore et dolore magna aliqua.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


  </div>
</template>

<script>

  export default {

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
            title: 'Что сначала, делать потолки или клеить обои?',
            description: 'Сначала делают потолки, чтобы не запылить и не испачкать обои.'
          },
          {
            title: 'На сколько см опустится натяжной потолок?',
            description: 'В среднем новый потолк опустится на 4 см от самой нижней точки старого потолка. Но, учитывая что он будет идеально ровный, визуально потолок будет выше.'
          },
        ]
      }
    }

  }
</script>

<style scoped>
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
