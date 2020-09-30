<template>

  <ul class="sub-header-menu__list" :style="showStyle">
    <li v-for="(catalogItem, index) in catalog" class="sub-header-menu__item">
      <div v-if="catalogItem.children.length">
        <nuxt-link :to="parentLink + '/' + catalogItem.slug" class="sub-header-menu__link">
          {{catalogItem.title}}
        </nuxt-link>
        <span class="menu__arrow sub-arrow" @click="collapseMenu($event)"></span>
        <Submenu :catalog="catalogItem.children" class="children_wrapper" v-if="catalogItem.depth === 0"
                 :parentLink="parentLink"></Submenu>
      </div>


      <div class="" v-else>
        <nuxt-link :to="parentLink + '/' + catalogItem.slug + '/' + (catalogItem.ceiling ? catalogItem.ceiling.slug : '')"
           class="sub-header-menu__link">
          {{catalogItem.title}}
        </nuxt-link>
      </div>
    </li>

  </ul>

</template>

<script>

  export default {
    name: 'Submenu',
    props: ['catalog', 'parentLink'],
    data() {
      return {


        displayNone: {
          display: 'none',
          transition: 'all 0.3s'
        },
        showStyle: {
          display: '',
        }
      }
    },
    computed: {
      allCatalog() {
        return Array.from(this.catalog)

      },
    },
    methods: {
      collapseMenu(event) {

        if (window.innerWidth < 1100) {
          event.target.style.transform = 'rotate(0deg)'
          if (event.target.nextElementSibling.style.display === 'block') {
            event.target.nextElementSibling.style.display = 'none'
          } else {
            event.target.style.transform = 'rotate(90deg)'
            event.target.nextElementSibling.style.display = 'block'
          }
        }
      }
    },
    mounted() {
      // this.collapseMenu()
    }

  }

</script>

<style scoped>

  .sub-header-menu__list {
    transition: all 0.2s ease-out 0s;
    min-width: 300px;
    /*overflow: hidden;*/
    position: absolute;


  }

  .sub-header-menu__item {
    transition: all 0.2s ease-out 0s;
    z-index: 10;
    max-width: 290px;
    /*display: block;*/

    position: absolute;

  }

  .children_wrapper {
    transition: all 0.2s;
    opacity: 0;
    /*height: 0px;*/

    display: none;
  }

  .sub-header-menu__item:hover .children_wrapper {
    transition: all 0.2s ease-out 0s;
    display: block;
    opacity: 1;
    height: 100%;
    left: 100%;
    margin-right: 15px;
    top: 0;
    position: absolute;
  }

  .sub-header-menu__list a {
    color: #fff;
    font-size: 18px;
    -webkit-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
  }


  .sub-header-menu__list li {
    background: #333;
    position: relative;
    padding: 3px;
  }

  .sub-header-menu__list li .sub-arrow {
    width: 50px;
    height: 50px;
    position: absolute;
    right: 25px;
    top: 10px;
    margin: -8px 0px 0px 0px;
    -webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
    cursor: pointer;
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

  .sub-header-menu__list li .sub-arrow:before {
    content: '';
    border-top: 8px solid transparent;
    border-left: 10px solid #ff0000;
    border-bottom: 8px solid transparent;
    transition: all 0.3s;
  }

  .sub-header-menu__list li:hover .sub-arrow {

    -webkit-transform: translateX(15px);
    -ms-transform: translateX(15px);
    transform: translateX(15px);
    transition: all 0.3s;
  }

  .sub-header-menu__list li:hover .sub-arrow:before {
    content: '';
    width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-left: 10px solid #ff0000;
    border-bottom: 8px solid transparent;
    -webkit-transform: translateX(5px);
    -ms-transform: translateX(5px);
    transform: translateX(5px);
  }


  .sub-header-menu__list li .sub-arrow.active {
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
  }

  .sub-header-menu__link {
    display: block;
    padding: 15px 10px;
    -webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
  }

  .sub-sub-header-menu__list {
    display: none;
    z-index: 10;
    position: absolute;
    top: 0;
    left: 100%;
    min-width: 300px;
    padding: 0px 0px 0px 5px;
  }

  .sub-sub-header-menu__list li {

    position: relative;
  }

  .sub-sub-header-menu__list li .sub-arrow {
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-left: 10px solid #ff0000;
    border-bottom: 5px solid transparent;
    cursor: pointer;
  }

  .sub-sub-header-menu__list a {
    font-size: 18px;
    color: #fff;
    display: block;
    padding: 15px 10px;
  }

  .arrow.active {
    -webkit-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    transform: rotate(-90deg);
  }

  @media (max-width: 1400px) {
    .sub-sub-header-menu__list li.last {
      left: -100%;
    }
  }


  @media (max-width: 1100px) {


    .sub-header-menu__list {
      /*position: static;*/
      opacity: 1;
      display: none;
      -webkit-transition: all 0s;
      -o-transition: all 0s;
      transition: all 0s;
      position: relative;
      overflow: hidden;

    }

    .sub-header-menu__list a {
      font-size: 18px;
    }

    .sub-header-menu__list li {
      padding-right: 50px;
    }

    .sub-header-menu li a {
      font-size: 18px;
    }

    .sub-header-menu__item {
      background: #5f5f5f;
    }

    .sub-header-menu__item:hover .children_wrapper {
      position: relative;
      left: 0;
    }

    .sub-header-menu__list li {
      background-color: black;

    }
  }

  @media (min-width: 1100px) {

    .sub-header-menu__list a {
      padding: 10px 10px;
    }

    .sub-header-menu__list a:hover {
      color: #ff0000;
    }

    .sub-header-menu__list li {
      padding: 10px 0px;
    }


  }
</style>
