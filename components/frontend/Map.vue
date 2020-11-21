<template>
  <section class="map1">
    <div class='container'>
      <h2 class="map__title  my-title">
        МЫ НАХОДИМСЯ
      </h2>
      <div class="map__item">
        <client-only>
          <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A398fee05586ef392323c65b0df663620e412c6a89c89f134b449ffa25aa1a938&amp;source=constructor" width="1251" height="439" frameborder="0"></iframe>
        </client-only>
      </div>
    </div>
  </section>
</template>
<script>

export default {

}
</script>

<style>
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
