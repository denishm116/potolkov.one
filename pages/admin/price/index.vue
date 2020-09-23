<template>
  <v-app id='menu-app'>
    <button>
      <clipper-upload v-model="imgURL">upload image</clipper-upload>
    </button>
    <button @click="getResult">clip image</button>
    <clipper-basic
      class="my-clipper"
      ref="clipper"
      :src="imgURL"
      preview="my-preview">
      <div class="placeholder" slot="placeholder">No image</div>
    </clipper-basic>
    <div>
      <div>preview:</div>
      <clipper-preview name="my-preview" class="my-clipper">
        <div class="placeholder" slot="placeholder">preview area</div>
      </clipper-preview>
    </div>
    <div>
      <div>result:</div>
      <img class="result" :src="resultURL" alt="">
    </div>
  </v-app>
</template>

<script>


  export default {
    layout: 'admin',

    data() {
      return {
        imgURL: '',
        resultURL: ''
      }
    },
    methods: {
      getResult() {
        const canvas = this.$refs.clipper.clip();//call component's clip method
        console.log(this.$refs.clipper)
        this.resultURL = canvas.toDataURL("image/jpeg", 1);//canvas->image
      }
    }

  }
</script>

<style scoped>

  .my-clipper {
    width: 100%;
    max-width: 700px;
  }

  .placeholder {
    text-align: center;
    padding: 20px;
    background-color: lightgray;
  }
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
