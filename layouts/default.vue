<template>

  <v-main app>
    <v-app>

      <Header></Header>

      <nuxt/>

      <Communicate></Communicate>
      <Footer></Footer>

      <v-widget></v-widget>
    </v-app>
  </v-main>


</template>
<script>
import Header from "@/components/frontend/Header";
import Footer from "@/components/frontend/Footer";
import Communicate from "@/components/frontend/Communicate";
import Auth from "../components/auth/Auth";
import vWidget from "@/components/frontend/partials/vWidget";

export default {
  head() {
    return {
      link: [
        {rel: 'canonical', href: `https://potolkov.shop${this.$route.path}`},
      ]
    }
  },
  data() {
    return {
      login: false,
      drawer: true
    }
  },
  components: {
    Header, Auth, Footer, Communicate, vWidget
  },

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
