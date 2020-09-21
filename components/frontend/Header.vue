<template>
  <header class="header" v-scroll="handleScroll">
    <div class="header__body">

      <div class="header__row_wrapper">
        <div class="header__row fade">
          <div class="header__info">
            Интеллигентный подход к вашему интерьеру
          </div>
          <ul class="header__social" data-da="header__wrap,first,576">
            <li>
              <a href="#" class="header__social-link">
                <img src="~/assets/img/icons/01.svg" alt=""/>
              </a>
            </li>
            <li>
              <a href="#" class="header__social-link">
                <img src="~/assets/img/icons/02.svg" alt=""/>
              </a>
            </li>
            <li>
              <a href="#" class="header__social-link">
                <img src="~/assets/img/icons/03.svg" alt=""/>
              </a>
            </li>
            <li>
              <a href="#" class="header__social-link">
                <img src="~/assets/img/icons/04.svg" alt=""/>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="header__row down">
        <a href="#" v-bind:class="classObject"><img src="~/assets/img/logo.png" alt="Натяжные потолки
в Краснодаре - potolkov.shop"/></a>
        <div class="header-menu__icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="header-menu js-menu">


          <ul class="header-menu__list">
            <li v-for="menuItem in menu" class="header-menu__item">
              <a href="#" class="header-menu__link li" :class="{active: menuItem.isActive}">
                {{menuItem.title}}
              </a>
              <span class="menu__arrow arrow"></span>

              <Submenu :catalog="menuItem.submenu" v-if="menuItem.submenu" class="submenu_display"></Submenu>


            </li>
          </ul>

        </div>

        <div class="header__wrap">
          <a href="tel:+798836767911" class="header__btn">
            <svg class="header__btn-icon" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 480.56 480.56"
                 xml:space="preserve">
						<g>
							<g>
								<path d="M365.354,317.9c-15.7-15.5-35.3-15.5-50.9,0c-11.9,11.8-23.8,23.6-35.5,35.6c-3.2,3.3-5.9,4-9.8,1.8
				c-7.7-4.2-15.9-7.6-23.3-12.2c-34.5-21.7-63.4-49.6-89-81c-12.7-15.6-24-32.3-31.9-51.1c-1.6-3.8-1.3-6.3,1.8-9.4
				c11.9-11.5,23.5-23.3,35.2-35.1c16.3-16.4,16.3-35.6-0.1-52.1c-9.3-9.4-18.6-18.6-27.9-28c-9.6-9.6-19.1-19.3-28.8-28.8
				c-15.7-15.3-35.3-15.3-50.9,0.1c-12,11.8-23.5,23.9-35.7,35.5c-11.3,10.7-17,23.8-18.2,39.1c-1.9,24.9,4.2,48.4,12.8,71.3
				c17.6,47.4,44.4,89.5,76.9,128.1c43.9,52.2,96.3,93.5,157.6,123.3c27.6,13.4,56.2,23.7,87.3,25.4c21.4,1.2,40-4.2,54.9-20.9
				c10.2-11.4,21.7-21.8,32.5-32.7c16-16.2,16.1-35.8,0.2-51.8C403.554,355.9,384.454,336.9,365.354,317.9z"/>
                <path d="M346.254,238.2l36.9-6.3c-5.8-33.9-21.8-64.6-46.1-89c-25.7-25.7-58.2-41.9-94-46.9l-5.2,37.1
				c27.7,3.9,52.9,16.4,72.8,36.3C329.454,188.2,341.754,212,346.254,238.2z"/>
                <path d="M403.954,77.8c-42.6-42.6-96.5-69.5-156-77.8l-5.2,37.1c51.4,7.2,98,30.5,134.8,67.2c34.9,34.9,57.8,79,66.1,127.5
				l36.9-6.3C470.854,169.3,444.354,118.3,403.954,77.8z"/>
							</g>
						</g>

					</svg>
            +7-988-367-67-91
          </a>
        </div>

      </div>

    </div>
  </header>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  import Submenu from "../frontend/Submenu"

  export default {
    components: {
      Submenu
    },
    data() {
      return {

        classObject: {
          'header__logo': true,
          'header__logo_scroll': false,
        }
      }

    },
    methods: {
      ...mapActions({
        fetchCatalog: 'frontend/catalog/fetchCatalog'
      }),
      handleScroll(event, el) {

        if (window.scrollY > 50) {
          el.setAttribute(
            'style',
            'transform: translateY(-37%)'
          )
          this.classObject.header__logo = false
          this.classObject.header__logo_scroll = true
        } else {
          el.setAttribute(
            'style',
            'transform: translateY(0px)'
          )
          this.classObject.header__logo = true
          this.classObject.header__logo_scroll = false
        }

      },
    },
    computed: {
      ...mapGetters({
        allCatalog: 'frontend/catalog/allCatalog'
      }),
      catalog() {
        return Array.from(this.allCatalog)
      },
      menu() {
        return [{
          title: 'Каталог потолков',
          isActive: false,
          submenu: this.catalog,
        },
          {
            title: 'Цены',
            isActive: true,
            submenu: '',
          },
          {
            title: 'Калькулятор',
            isActive: false,
            submenu: '',
          },
          {
            title: 'Фото',
            isActive: false,
            submenu: '',
          },
          {
            title: 'Освещение',
            isActive: false,
            submenu: '',
          },
          {
            title: 'Дополнительно',
            isActive: false,
            submenu: '',
          }]
      }
    },
    mounted() {
      this.fetchCatalog()

    }
  }
</script>

<style scoped>
  .header {
    transition: all 0.3s ease-out 0s;
  }

  .submenu_display {
    transition: all 0.2s ease-out 0s;
    opacity: 0;
    top: -9.7rem;

  }

  .header-menu__item:hover .submenu_display {
    opacity: 0.95;
    /*max-height: 100%;*/
    transform: translateY(13rem)
  }
</style>
