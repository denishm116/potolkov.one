<template>
  <v-app id='menu-app'>
    <h1>Price</h1>
  </v-app>
</template>

<script>


  export default {
    layout: 'admin',

    data() {
      return {

      }
    }

  }
</script>

<style scoped>

  li {
    list-style-type: none;
  }

  .bg-grey {
    margin: 0;
    padding: 35px 35px 35px 35px;
    background-color: rgb(238, 238, 238);
    min-height: 100vh;
  }

  .container {
    margin: 0;

    display: flex;
    /*justify-content: center;*/
    /*align-items: center;*/
    /*text-align: center;*/
  }

  .title {
    font-family: 'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
</style>
