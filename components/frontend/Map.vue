<template>
  <section class="map1">
    <div class='container'>
      <h2 class="map__title  my-title">
        МЫ НАХОДИМСЯ
      </h2>
      <div class="map__item">
        <yandex-map
          :coords="coords"
          v-if="isMounted"
          class="ymap-class"

        >
          <ymap-marker
            :coords="coords"
            marker-id="landing"
            :icon="markerIcon"
          />
        </yandex-map>
      </div>
    </div>
  </section>
</template>
<script>
import {yandexMap, ymapMarker} from 'vue-yandex-maps'

export default {
  components: {yandexMap, ymapMarker},

  data() {
    return {
      isMounted: false,
      coords: [
        45.057982,
        39.007500
      ],
      markerIcon: {
        layout: 'default#imageWithContent',
        imageHref: "https://potolkov.net/img/logo.png",
        imageSize: [113, 33],
        imageOffset: [10, -60],
        content: 'ул. 40-летия Победы, 33/6',
        contentOffset: [-30, -35],
        contentLayout: '<div style="background: red; width: 170px; color: #FFFFFF; font-weight: bold; padding: 3px; border-radius: 3px; opacity: 0.5">$[properties.iconContent]</div>'
      },

    }
  },
  mounted() {
    this.isMounted = true
  }

}
</script>

<style>
/*.ymap-container {*/
/*  height: 500px;*/
/*}*/
.ymap-class {
  height: 60vh;
}

#map {
  width: 1000px;
  height: 500px;
  background: #eaeaea;
}

.container {
  max-width: 1270px;
  margin: 0 auto;
  width: 100%;
}
</style>
