<template>
  <div class="wrapper">
    <div class='container'>
      <h2 class="about__title title">Что о нас говорят?</h2>
    </div>
    <section class="slider">

      <MySlider
        :reviews="reviews"

      ></MySlider>
    </section>
  </div>
</template>

<script>
  import MySlider from "@/components/partials/MySlider"

  export default {
    components: {
      MySlider
    },
    data() {
      return {
        reviews: [
          {
            id: 0,
            name: 'Иван Петров',
            date: '',
            url: 'https://picsum.photos/900/600/?image=0',
            isActive: false,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi'
          },
          {
            id: 1,
            name: 'Дима Гнол',
            date: '',
            url: 'https://picsum.photos/900/600/?image=1',
            isActive: false,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi'
          },
          {
            id: 2,
            name: 'Жора Интуицин',
            date: '',
            url: 'https://picsum.photos/900/600/?image=2',
            isActive: false,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi'
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

  .slider {
    margin: 100px 0px 100px 0px;
  }

  .about {
    padding: 0px 0px 170px 0px;
  }

  .about__title {
    margin: 0px 0px 50px 0px;
  }

  @media (max-width: 767.98px) {
    .about {
      padding: 0px 0px 70px 0px;
    }

    .about__title {
      margin: 0px 0px 40px 0px;
    }
  }

</style>
