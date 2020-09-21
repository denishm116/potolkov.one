<template>
  <section class="projects">
    <div class='container'>
      <h2 class="projects__title title">Наши реализованные проекты</h2>
      <div class="projects__slider">

        <div class="projects__row">
          <div class="projects__column">
                        <PhotoGallery :width="width" :items="items" :addons="{ enableLargeView: true }" ></PhotoGallery>

          </div>
          <div class="projects__column">
            <div class="projects__info">
              <div class="projects__info-block projects-info-block">
                <div class="projects-info-block__icon">

                  <img :src="require('assets/img/projects/icons/01.png')" alt=""/>
                </div>
                <div class="projects-info-block__text">
                  <span>Срок</span> 8 недель
                </div>
              </div>
              <div class="projects__info-block projects-info-block">
                <div class="projects-info-block__icon">
                  <img :src="require('assets/img/projects/icons/02.png')" alt=""/>
                </div>
                <div class="projects-info-block__text">
                  <span>Площадь</span> 50 м2
                </div>
              </div>
              <div class="projects__info-block projects-info-block">
                <div class="projects-info-block__icon">
                  <img :src="require('assets/img/projects/icons/03.png')" alt=""/>
                </div>
                <div class="projects-info-block__text">
                  <span>Подарок клиенту</span> Светильник
                </div>
              </div>
            </div>
            <div class="projects__info-item projects-info-item">
              <div class="projects-info-item__title">
                Что было сделано
              </div>
              <div class="projects-info-item__row">
                <div class="projects-info-item__row-name">Название услуги</div>
                <div class="projects-info-item__row-price">2 000 Р</div>
              </div>
              <div class="projects-info-item__row">
                <div class="projects-info-item__row-name">Название услуги</div>
                <div class="projects-info-item__row-price">2 000 Р</div>
              </div>
              <div class="projects-info-item__row">
                <div class="projects-info-item__row-name">Название услуги</div>
                <div class="projects-info-item__row-price">2 000 Р</div>
              </div>
              <div class="projects-info-item__row">
                <div class="projects-info-item__row-name">Название услуги</div>
                <div class="projects-info-item__row-price">2 000 Р</div>
              </div>
              <div class="projects-info-item__sum">
                Всего: 10 000Р
              </div>
              <div class="projects-info-item__nav">
                <a href="" class="projects-info-item__nav-link">Назад</a>
                <a href="" class="projects-info-item__nav-link">Следующий проект</a>
              </div>
            </div>
            <div class="projects__buttons">
              <a href="" class="projects__btn btn">Заказть замер</a>
              <a href="" class="projects__btn btn tr">Каталог</a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>

  import PhotoGallery from "../partials/PhotoGallery"

  export default {

    components: {
      PhotoGallery
    },
    data() {
      return {
        width: 1920,

        items: [{
          src: 'https://picsum.photos/900/600/?image=0',
          thumbnail: 'https://picsum.photos/64/64/?image=0',
          caption: 'Some Caption',
          id: 'someid1'
        },
          {
            src: 'https://picsum.photos/900/600/?image=11',
            thumbnail: 'https://picsum.photos/64/64/?image=11'
          },
          {
            src: 'https://picsum.photos/900/600/?image=12',
            thumbnail: 'https://picsum.photos/64/64/?image=12'
          },
          {
            src: 'https://picsum.photos/900/600/?image=13',
            thumbnail: 'https://picsum.photos/64/64/?image=13'
          },
          {
            src: 'https://picsum.photos/900/600/?image=14',
            thumbnail: 'https://picsum.photos/64/64/?image=14'
          },
          {
            src: 'https://picsum.photos/900/600/?image=15',
            thumbnail: 'https://picsum.photos/64/64/?image=15'
          },
          {
            src: 'https://picsum.photos/900/600/?image=16',
            thumbnail: 'https://picsum.photos/64/64/?image=16'
          },
          {
            src: 'https://picsum.photos/900/600/?image=11',
            thumbnail: 'https://picsum.photos/64/64/?image=11'
          },
          {
            src: 'https://picsum.photos/900/600/?image=12',
            thumbnail: 'https://picsum.photos/64/64/?image=12'
          },
          {
            src: 'https://picsum.photos/900/600/?image=13',
            thumbnail: 'https://picsum.photos/64/64/?image=13'
          },
          {
            src: 'https://picsum.photos/900/600/?image=14',
            thumbnail: 'https://picsum.photos/64/64/?image=14'
          },
          {
            src: 'https://picsum.photos/900/600/?image=15',
            thumbnail: 'https://picsum.photos/64/64/?image=15'
          },
          {
            src: 'https://picsum.photos/900/600/?image=16',
            thumbnail: 'https://picsum.photos/64/64/?image=16'
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
</style>
