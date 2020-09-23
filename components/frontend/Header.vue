<template>
  <header class="header" v-scroll="handleScroll" :style="header_collapse">

    <div class="header__body">
      <div class="header__row fade">
        <div class="header__info">
          Интеллигентный подход к вашему интерьеру
        </div>
        <div>
          <ul class="header__social">
            <li>
              <a href="#"><img src="~/assets/img/icons/01.svg" alt=""/></a>
            </li>
            <li>
              <a href="#"><img src="~/assets/img/icons/02.svg" alt=""/></a>
            </li>
            <li>
              <a href="#"><img src="~/assets/img/icons/03.svg" alt=""/></a>
            </li>
            <li>
              <a href="#"><img src="~/assets/img/icons/04.svg" alt=""/></a>
            </li>
          </ul>
        </div>
      </div>

      <div class="header__row down">

        <div class="menu-icon-wrapper" @click="showMenu">
          <div class="menu-icon" :class="{'menu-icon-active': menu_icon_active}"></div>
        </div>
        <div class="logo__wrapper">
          <transition name="fade">
            <a href="#" v-bind:class="logoScroll"><img src="~/assets/img/logo.png" alt="Натяжные потолки
в Краснодаре - potolkov.shop"/></a>
          </transition>
        </div>


        <div :class="menuBar" :style="menuToggler">


            <ul class="header-menu__list">

              <li v-for="menuItem in menu" class="header-menu__item">

                <a href="#" class="header-menu__link" :class="{active: menuItem.isActive}">
                  {{menuItem.title}}
                </a>

                <span class="menu__arrow arrow"></span>

                  <Submenu :catalog="menuItem.submenu" class="submenu_display"></Submenu>

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
        submenu_display: {},
        submenu: false,
        menu_icon_active: false,
        menuBar: {
          'header-menu': true,
          'mobile-menu': false,
          'mobile-menu-show': false,
        },
        menuToggler: {
          margin: '-100vh 0 0 0',
        },
        header_collapse: {
          transform: 'translateY(0px)'
        },

        logoScroll: {
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
          this.header_collapse.transform = 'translateY(-40%)'
          this.logoScroll['header__logo_scroll'] = true;
        } else {
          this.header_collapse.transform = 'translateY(0)'
          this.logoScroll['header__logo_scroll'] = false;
        }
      },
      showMenu() {
        if (this.menuToggler.margin === '-100vh 0 0 0')
          this.menuToggler.margin = '0 0 0 0'
        else
          this.menuToggler.margin = '-100vh 0 0 0'

        this.menu_icon_active = !this.menu_icon_active
      },
      showSubMenu() {

      },
      mobileStyleToggle() {
        if (window.innerWidth < 1100) {
          this.menuBar["header-menu"] = false
          this.menuBar["mobile-menu"] = true
          this.menuToggler.margin = '-100vh 0 0 0'
        } else {
          this.menuToggler.margin = '0 0 0 0'
          this.menuBar["header-menu"] = true
          this.menuBar["mobile-menu"] = false
        }

      }
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
            submenu: this.catalog,
          },
          {
            title: 'Дополнительно',
            isActive: false,
            submenu: this.catalog,
          }]
      }
    },
    mounted() {
      this.fetchCatalog()
      window.addEventListener('resize', this.mobileStyleToggle);
      this.mobileStyleToggle()
    },


  }
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */
  {
    opacity: 0;
  }

  .header {
    transition: all 0.3s ease-out 0s;
    background: rgba(0, 0, 0, 0.7);
    padding: 15px 15px 5px 15px;
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 9;
  }

  .header__body {
    display: flex;
    flex-direction: column;
  }

  .header__row.fade {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin: 0 0 15px auto;
  }

  .header__info {
    font-size: 14px;
    font-family: "Geometria-Bold";
    color: #fff;
    margin: 0px 10% 0px 0px;
  }

  .header__social {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    font-size: 0;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    z-index: 10;
  }

  .header__social li a {
    display: block;
    width: 15px;
    min-height: 12px;
    margin: 0 0 0 20px;
  }

  .header__social li a img {
    display: block;
    max-height: 20px;
  }

  .header__row.down {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    display: flex;
    font-size: 0;
    align-items: center;
    position: relative;
    justify-content: space-between;
    transition: 0.3s;
  }

  .mobile-menu {
    position: fixed;
    left: 0;
    top: 0;
    background: #000;
    height: 100vh;
    width: 100%;
    overflow: auto;
    -webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
    margin: -200vh 0px 0px 0px;
    transition: all 0.3s;
    padding-top: 140px;
  }

  .header__logo {
    display: block;
    transition: 0.3s;
    margin: -50px 0 10px 0px;
  }

  .header__logo_scroll {
    display: block;
    margin: 0px 0 5px 0px;
    transition: 0.3s;
  }

  .header__logo img {
    display: block;
    max-width: 100%;
  }

  .header-menu__list {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    /*position: relative;*/

  }

  .header-menu__list > li {
    margin: 0px 20px 0px 0px;
  }

  .header-menu__list > li:last-child {
    margin: 0px 0px 0px 0px;
  }

  .header-menu__list a:hover {
    color: #ff0000;
  }

  .header-menu__link {
    font-size: 18px;
    color: #fff;
    min-height: 100%;
    padding: 5px 10px 30px 10px;
    -webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
    display: block;
  }

  .active {
    position: relative;

    box-sizing: border-box;
  }

  .active:before {
    content: "";
    width: 100%;
    height: 6px;
    background: #ff0000;
    position: absolute;
    bottom: 0;
    left: 0;
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }

  .menu-icon-wrapper {
    width: 30px;
    height: 30px;
    display: none;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 10;

  }

  .header-menu.active {
    margin: 0;
  }


  .header__btn {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    font-size: 0;
    font-size: 24px;
    font-family: "Geometria-Medium";
    color: #fff;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 280px;
    height: 50px;
    border: 1px solid #fff;
    border-radius: 50px;
    -webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
  }

  .header__btn .header__btn-icon {
    width: 25px;
    display: block;
    margin-right: 10px;
    fill: #fff;
  }

  @media (max-width: 1895px) {
    .header__logo {
      margin-right: 50px;
    }
  }

  @media (max-width: 1450px) {
    .header__logo {
      max-width: 160px;
    }

    .header-menu__link {
      font-size: 14px;
    }
  }

  @media (max-width: 1282px) {
    .header__btn {
      font-size: 14px;
      width: 180px;
      height: 40px;
    }

    .header-menu__link {
      padding-bottom: 35px;
    }

  }

  @media (max-width: 1100px) {
    .header__logo {
      display: block;
      transition: 0.3s;
      margin: 0px 0 10px 0px;
    }

    .header__row.fade {
      justify-content: space-between;
      margin: 0 0 15px 0;
    }

    .header__info {
      max-width: 270px;
    }

    .header-menu {
      position: fixed;
      left: 0;
      top: 0;
      background: #000;
      height: 100vh;
      width: 100%;
      overflow: auto;
      /*margin: -100vh 0px 0px 0px;*/
      -webkit-transition: all 0.3s;
      -o-transition: all 0.3s;
      transition: all 0.3s;
      padding-top: 140px;
    }

    .header__logo {
      z-index: 10;
    }

    .header__btn {
      z-index: 10;
      position: relative;
      padding: 0px 10px;
      font-size: 20px;
      width: 250px;
      height: 50px;
    }

    .header__btn:hover {
      background: #ff0000;
    }

    .header-menu__list {
      display: block;
      padding: 20px 20px;
      max-width: 700px;
    }

    .header-menu__list li a {
      font-size: 26px;
      padding: 10px 5px;
      display: block;
    }

    .header-menu__list li a.active {
      color: #ff0000;
    }

    .header-menu__list li a:before {
      display: none;
    }

    .header-menu__list .sub-header-menu__list li a {
      font-size: 21px;
    }

    .header-menu__list .sub-header-menu__list .sub-sub-header-menu__list li a {
      font-size: 19px;
    }

    .header-menu__list li.active .sub-header-menu__list {
      display: block;
    }

    .header-menu li {
      position: relative;
      margin-right: 0;
      padding-right: 60px;
    }

    .header-menu .arrow {
      position: absolute;
      right: 10px;
      top: 0px;
      -webkit-transition: 0.3s all;
      -o-transition: 0.3s all;
      transition: 0.3s all;
      cursor: pointer;
      width: 50px;
      height: 50px;
      display: -webkit-box;
      display: -moz-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      font-size: 0;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }

    .header-menu .arrow:before {
      content: '';
      border-top: 8px solid transparent;
      border-left: 10px solid red;
      border-bottom: 8px solid transparent;
    }

    .header-menu .arrow.active {
      -webkit-transform: rotate(90deg);
      -ms-transform: rotate(90deg);
      transform: rotate(90deg);
    }

    .menu-icon-wrapper {
      display: flex;
    }
  }

  @media (max-width: 576px) {
    .header .fade {
      max-width: 576px;
    }


    .header__info {
      text-align: left;
      margin-top: -15px;
    }

    .header__btn {
      font-size: 0;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: -webkit-box;
      display: -moz-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      font-size: 0;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      border: 1px solid #ff0000;
      padding: 5px;
      margin: 0px 0px 0px 30px;
    }

    .header .header__btn-icon {
      margin: 0;
      fill: #ff0000;
    }

    .header__wrap {
      display: -webkit-box;
      display: -moz-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      font-size: 0;
      max-width: 100%;
      justify-content: space-around;
    }

    .header-menu .sub-header-menu__list li a {
      font-size: 18px;
    }

    .header-menu .sub-header-menu__list .sub-sub-header-menu__list li a {
      font-size: 16px;
    }


    .header__logo {
      display: block;
      margin: 0 0 0 30%;
      transition: 0.3s;
    }

    .header__logo_scroll {
      display: block;
      margin: 0 0 0 25%;
      transition: 0.3s;
    }

    .header__logo img {
      display: block;
      max-width: 100px;
      transition: 0.3s;
    }

    .header__logo_scroll img {
      transition: 0.3s;
      max-width: 120px;
    }

    .header__info {
      text-align: left;
      line-height: 16px;
    }


  }

  @media (max-width: 479.98px) {
    .header {
      padding-left: 15px;
    }

    .header .fade {
      max-width: 100%;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
    }

    .header__logo {
      margin: 0;
    }


  }

  @media (max-width: 380px) {
    .header__info {
      font-size: 12px;
      text-align: left;
      margin-top: -20px;
      padding-top: 10px;
    }
  }

  @media (max-width: 321px) {
    .header__info {
      font-size: 10px;
      text-align: left;
    }
    .header__row.down {
      margin-bottom: 15px;
    }
  }

  .submenu_display {
    transition: all 0.2s ease-out 0s;
    opacity: 0;
    height: 0px;
  }


  .header-menu__item:hover .submenu_display {
    transition: all 0.2s ease-in 0s;
    opacity: 1;
    display: block;
    height: auto;

  }

  .mobile-menu-open {
    margin: 0px 0px 0px 0px;
  }

  .mobile-menu-hidden {
    margin: -100vh 0px 0px 0px;
  }

  .logo__wrapper {
    transition: .3s
  }

  /*Анимация бургера*//*Анимация бургера*//*Анимация бургера*//*Анимация бургера*//*Анимация бургера*//*Анимация бургера*/
  /*Анимация бургера*//*Анимация бургера*//*Анимация бургера*//*Анимация бургера*//*Анимация бургера*//*Анимация бургера*/

  .menu__wrapper {
    transition: 0.3s;
    margin: 0px 50px 0px auto;

  }

  .menu-icon {
    position: relative;
    width: 30px;
    height: 5px;
    background-color: #ff0000;
    transition: background-color 0.2s ease-in 0.2s;
  }

  .menu-icon::before {
    position: absolute;
    left: 0;
    top: -10px;
    content: '';
    width: 30px;
    height: 5px;
    background-color: #ff0000;
    transition: transform 0.2s ease-in, top 0.2s linear 0.2s;

  }

  .menu-icon::after {
    position: absolute;
    left: 0;
    top: 10px;
    content: '';
    width: 30px;
    height: 5px;
    background-color: #ff0000;
    transition: transform 0.2s ease-in, top 0.2s linear 0.2s;

  }

  .menu-icon.menu-icon-active {
    background-color: transparent;
    transition: background-color 0.2s ease-in 0.2s;
  }

  .menu-icon.menu-icon-active::before {
    transform: rotate(45deg);
    top: 0;
    transition: top 0.2s linear, transform 0.2s ease-in 0.2s;
  }

  .menu-icon.menu-icon-active::after {
    transform: rotate(-45deg);
    top: 0;
    transition: top 0.2s linear, transform 0.2s ease-in 0.2s;
  }

</style>
