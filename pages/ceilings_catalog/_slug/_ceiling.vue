<template>
  <div>
    <section class="cattegory">
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
        <h2 class="cattegory__title title">{{ceiling.title}}</h2>
        <div class="cattegory__row">
          <div class="cattegory__column">
            <PhotoGallery :width="width" :items="items" :addons="{ enableLargeView: true }" ></PhotoGallery>
          </div>
          <div class="cattegory__column">

            <p class="cattegory__text" v-html="rawHtml">{{ceiling.description}}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="projects">
      <div class='container'>
        <h2 class="projects__title title">Наши реализованные проекты</h2>
        <div class="projects__slider">
          <div class="projects__row">
            <div class="projects__column">
              <div class="projects__photo fotorama" data-width="100%" data-nav="thumbs" data-loop="false">
                <img src="" alt="">

              </div>
            </div>
            <div class="projects__column">
              <div class="projects__info">
                <div class="projects__info-block projects-info-block">
                  <div class="projects-info-block__icon">
                    <img src="img/projects/icons/01.png" alt=""/>
                  </div>
                  <div class="projects-info-block__text">
                    <span>Срок</span> 8 недель
                  </div>
                </div>
                <div class="projects__info-block projects-info-block">
                  <div class="projects-info-block__icon">
                    <img src="img/projects/icons/02.png" alt=""/>
                  </div>
                  <div class="projects-info-block__text">
                    <span>Площадь</span> 50 м2
                  </div>
                </div>
                <div class="projects__info-block projects-info-block">
                  <div class="projects-info-block__icon">
                    <img src="img/projects/icons/03.png" alt=""/>
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
  </div>
</template>

<script>
  export default {
    data: () => {
      return {

        ceiling: {},
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
        ],
      }
    },
    methods: {
      async fetchCeiling() {
        const response = await this.$axios.$get('frontend/getCeiling/' + this.$route.params.ceiling)

        this.ceiling = response[0]
      },
    },
    mounted() {
      this.fetchCeiling()
    },
    computed: {
      path() {
        return process.env.baseURL + 'storage/'
      },
      rawHtml() {
        return this.ceiling.description;
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
  .cattegory {
    padding: 150px 0px 30px 0px;
  }

  .cattegory__title {
    margin: 0px 0px 25px 0px;
  }

  .cattegory__row {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    font-size: 0;
    margin: 0px -22px;
  }

  .cattegory__column {
    padding: 0px 22px;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
  }

  .cattegory__gallery .fotorama__nav {
    text-align: left;
  }

  .cattegory__gallery .fotorama__nav__frame {
    margin-right: 5px;
  }

  .cattegory__gallery .fotorama__nav__frame:last-child {
    margin: 0px 0px 0px 0px;
  }

  .cattegory__gallery .fotorama__nav-wrap {
    margin: 5px 0px 0px 0px;
  }

  .cattegory__text {
    font-size: 18px;
    line-height: 30px;
    margin: 0px 0px 40px 0px;
  }

  .cattegory__text:last-child {
    margin: 0px 0px 0px 0px;
  }

  @media (max-width: 991.98px) {
    .cattegory__row {
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
    }

    .cattegory__column {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
      margin: 0px 0px 40px 0px;
      max-width: 100%;
    }

    .cattegory__column:last-child {
      margin: 0px 0px 0px 0px;
    }

    .cattegory__text {
      margin: 0px 0px 30px 0px;
    }
  }

  @media (max-width: 767.98px) {
    .cattegory {
      padding: 150px 0px 20px 0px;
    }
  }

  @media (max-width: 576px) {
    .cattegory__text {
      line-height: 27px;
      margin: 0px 0px 20px 0px;
      font-size: 16px;
    }
  }
</style>
