<template>
  <div class="wrapper">
    <Main></Main>
    <Flat></Flat>
    <Calculator></Calculator>
    <Stocks></Stocks>
    <Order></Order>
    <Why></Why>
    <Projects></Projects>
    <Questions></Questions>
    <Moments></Moments>
    <Reviews></Reviews>
    <Map></Map>
    <Communicate></Communicate>
  </div>
</template>

<script>
  import Main from "@/components/frontend/Main"
  import Flat from "@/components/frontend/Flat"
  import Calculator from "@/components/frontend/Calculator"
  import Stocks from "@/components/frontend/Stocks"
  import Order from "@/components/frontend/Order"
  import Why from "@/components/frontend/Why"
  import Questions from "@/components/frontend/Questions"
  import Moments from "@/components/frontend/Moments"
  import Reviews from "@/components/frontend/Reviews"
  import Map from "@/components/frontend/Map"
  import Communicate from "@/components/frontend/Communicate"

  export default {
    components: {
      Main, Flat, Stocks, Order, Calculator, Why, Questions, Moments, Reviews, Map, Communicate
    }


  }
</script>

<style scoped>

</style>
