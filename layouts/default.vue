<template>

  <v-main app>

    <Header></Header>

    <nuxt/>
    <Footer></Footer>
  </v-main>


</template>
<script>
  import Header from "@/components/frontend/Header";
  import Footer from "@/components/frontend/Footer";
  import Auth from "../components/auth/Auth";

  export default {

    data() {
      return {
        login: false,
        drawer: true
      }
    },
    created() {
      // this.$vuetify.theme.dark = true
    },
    components: {
      Header, Auth, Footer
    },
    mounted() {
     for (let i = 0; i < this.$el.getElementsByClassName('v-application--wrap').length; i++) {
       this.$el.getElementsByClassName('v-application--wrap')[i].style = "min-height: 0;"
     }

    }


  }
</script>
<style scoped>
  .slide-fade-enter-active {
    transition: all .3s ease;
  }

  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */
  {
    transform: translateY(-100px);
    opacity: 0;
  }
</style>
