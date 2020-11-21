<template>
  <div class="flex">
  <section class="article sect-mt">
    <div class='container'>
      <nav class="breadcrumbs">
        <ul class="breadcrumbs__list">
          <li>
            <a href="/" class="breadcrumbs__link">Главная</a>
          </li>
          <li>
            <span>Слив воды</span>
          </li>
        </ul>
      </nav>
      <h2 class="article__title my-title">
        Название статьи
      </h2>
      <div class="article__info">
        <div class="article__photo">
          <img :src="require('assets/img/Article/photo.jpg')" alt="">
        </div>
        <div class="article__info-text">
          <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus asperiores ipsam et incidunt
            reiciendis minima harum tenetur ipsum amet, repellendus at molestiae soluta, illo, saepe
            perferendis
            dignissimos totam eos eligendi!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus asperiores ipsam et incidunt
            reiciendis minima harum tenetur ipsum amet, repellendus at molestiae soluta, illo, saepe
            perferendis
            dignissimos totam eos eligendi!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus asperiores ipsam et incidunt
            reiciendis minima harum tenetur ipsum amet, repellendus at molestiae soluta, illo, saepe
            perferendis
            dignissimos totam eos eligendi!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus asperiores ipsam et incidunt
            reiciendis minima harum tenetur ipsum amet, repellendus at molestiae soluta, illo, saepe
            perferendis
          </p>


        </div>

      </div>
    </div>
  </section>
    <section class='container'>

      <horizontal-list :items="items" :options="options">
        <template v-slot:default="{item}">
          <div>
            <div class="aspect r-10-12 border-3 overflow-hidden">
              <div class="relative wh-100 lh-0">
                <img :src="item.image"/>


                <div class="bg-overlay absolute-0 wh-100 p-24 flex-end">
                  <h4 class="m-0 text-ellipsis-2l text-center white">{{item.title}}</h4>
                </div>
              </div>
            </div>

            <div class="mt-8 tiny-bold">SUBTITLE • FOCUS</div>

            <p class="mt-4 text-ellipsis-2l">{{item.content}}</p>
          </div>
        </template>
      </horizontal-list>
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
  // import VueHorizontalList from "vue-horizontal-list"
  import HorizontalList from "@/components/partials/HorizontalList"
    export default {
    components: {
      HorizontalList
    },
      data() {
        return {
          options: {
            responsive: [
              {end: 576, size: 1},
              {start: 576, end: 768, size: 2},
              {start: 768, end: 992, size: 3},
              {size: 4}
            ],
            list: {
              // 1200 because @media (min-width: 1200px) and therefore I want to switch to windowed mode
              windowed: 1200,

              // Because: #app {padding: 80px 24px;}
              padding: 24
            },
            navigation: {
              // when to show navigation
              start: 992,
              color: '#ffffff'
            }
          },
          items: [
            {
              title: 'Sed non ante non cras amet',
              content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non sagittis leo. Vestibulum sit amet metus nec neque dignissim dapibus.',
              image: 'https://picsum.photos/900/600/?image=12'
            },
            {
              title: 'Curabitur sit amet nunc',
              content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id mollis erat. Aliquam erat volutpat. Nunc erat lacus, rhoncus nec.',
              image: 'https://picsum.photos/id/1019/600/600'
            },
            {
              title: 'Proin pharetra, ante metus',
              content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac diam ac ex efficitur posuere. Pellentesque cursus pellentesque risus, non.',
              image: 'https://picsum.photos/id/1039/600/600'
            },
            {
              title: 'Cras pharetra non enim a',
              content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi malesuada varius nibh, a malesuada nisi feugiat eget. Aenean convallis semper.',
              image: 'https://picsum.photos/id/1042/600/600'
            },
            {
              title: 'Proin vulputate, augue eu accumsan',
              content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringilla tempor libero sit amet mollis. Praesent quis leo erat. Integer.',
              image: 'https://picsum.photos/id/1044/600/600'
            },
            {
              title: 'Maecenas feugiat magna sapien in',
              content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet fringilla ante. Quisque at ipsum non lacus consequat dictum.',
              image: 'https://picsum.photos/id/1057/600/600'
            },
            {
              title: 'Donec commodo sed enim at',
              content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu condimentum risus. Praesent dignissim, neque nec pharetra vestibulum, libero odio.',
              image: 'https://picsum.photos/id/1063/600/600'
            },
            {
              title: 'In bibendum urna et turpis',
              content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae ante volutpat leo vulputate volutpat et sed ex. Vivamus eu.',
              image: 'https://picsum.photos/id/1076/600/600'
            },
            {
              title: 'Phasellus iaculis dignissim erat at',
              content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis quam scelerisque, eleifend purus gravida, scelerisque orci. Ut et turpis.',
              image: 'https://picsum.photos/id/1083/600/600'
            },
          ]
        }
      }

    }
</script>

<style scoped>
  .flex {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .vhl-btn-left, .vhl-btn-right {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 24px;
    background: red;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    z-index: 2;
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
