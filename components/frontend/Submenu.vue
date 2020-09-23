<template>

  <ul class="sub-header-menu__list" :style="showStyle">
    <li v-for="(catalogItem, index) in catalog" class="sub-header-menu__item">
      <div class="" v-if="catalogItem.children.length">
        <a href="#" class="sub-header-menu__link">
          {{catalogItem.title}}
        </a>
        <span class="menu__arrow sub-arrow" :style="arrowRotate"  @click="collapseMenu"></span>
        <Submenu :catalog="catalogItem.children" class="children_wrapper" v-if="catalogItem.depth === 0" :style="displayNone"></Submenu>
      </div>


      <div class="" v-else>
        <a href="#" class="sub-header-menu__link">
          {{catalogItem.title}}
        </a>
      </div>
    </li>
  </ul>

</template>

<script>

  export default {
    name: 'Submenu',
    props: ['catalog'],
    data() {
      return {
        arrowRotate: {
          transform: 'rotate(0deg)'
        },
        displayNone: {
          display: ''
        },
        showStyle: {
          display: '',
        }
      }

    },
    computed: {
      allCatalog() {
        // return Array.from(this.catalog)
        return this.catalog
      }
      ,

    }
    ,
    methods: {
      collapseMenu() {
        if (window.innerWidth < 1100) {
          if (this.displayNone.display === 'block') {
            this.displayNone.display = 'none'
            this.arrowRotate.transform = 'rotate(0deg)'
          } else {
            this.displayNone.display = 'block';
            this.arrowRotate.transform = 'rotate(90deg)'
          }
          this.arrow_rotate = !this.arrow_rotate
          console.log(this.arrow_rotate)
        }
      }
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
    transition: all 0.2s ease-out 1s;
    opacity: 0.5;
    height: 0px;

    /*display: none;*/
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
  }

  .sub-header-menu__list li:hover .sub-arrow {
    /*-webkit-transform: rotate(360deg);*/
    /*-ms-transform: rotate(360deg);*/
    /*transform: rotate(360deg);*/
    -webkit-transform: translateX(20px);
    -ms-transform: translateX(20px);
    transform: translateX(20px);
    transition: 0.3s;
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
    .sub-header-menu__list li:hover .sub-arrow {
      -webkit-transform: rotate(90deg);
      -ms-transform: rotate(90deg);
      transform: rotate(90deg);
    }

    .sub-header-menu__list {
      position: relative;
      overflow: hidden;

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

    .sub-header-menu__list li:hover > .sub-arrow {
      -webkit-transform: rotate(90deg);
      -ms-transform: rotate(90deg);
      transform: rotate(90deg);
    }

    .sub-header-menu__list li {

      padding: 10px 0px;
    }


  }
</style>
