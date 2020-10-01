<template>
  <section class="table sect-mt">
    <div class='container'>
      <nav class="breadcrumbs">
        <ul class="breadcrumbs__list">
          <li>
            <a href="" class="breadcrumbs__link">Главная</a>
          </li>
          <li>
            <span>Хлебные крошки</span>
          </li>
        </ul>
      </nav>
      <div class="table__title title">
        Цены на услуги
      </div>
      <div class="table__block">
        <div class="table__head">
          <div class="table__head-name">Название услуги</div>
          <div class="table__head-price">Стоимость</div>
        </div>
        <div class="table__row">
          <div class="table__row-name">Название услуги</div>
          <div class="table__row-price">Стоимость</div>
        </div>
        <div class="table__row">
          <div class="table__row-name">Название услуги</div>
          <div class="table__row-price">Стоимость</div>
        </div>
        <div class="table__row">
          <div class="table__row-name">Название услуги</div>
          <div class="table__row-price">Стоимость</div>
        </div>
        <div class="table__row">
          <div class="table__row-name">Название услуги</div>
          <div class="table__row-price">Стоимость</div>
        </div>
        <div class="table__row">
          <div class="table__row-name">Название услуги</div>
          <div class="table__row-price">Стоимость</div>
        </div>
        <div class="table__row">
          <div class="table__row-name">Название услуги</div>
          <div class="table__row-price">Стоимость</div>
        </div>
        <div class="table__row">
          <div class="table__row-name">Название услуги</div>
          <div class="table__row-price">Стоимость</div>
        </div>
        <div class="table__row">
          <div class="table__row-name">Название услуги</div>
          <div class="table__row-price">Стоимость</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {

    }
</script>

<style scoped>
  .container {
    max-width: 1270px;
    margin: 0 auto;
    width: 100%;
  }
  .table {
    margin: 150px 0px 45px 0px;
    padding: 0px 0px 95px 0px;
  }

  .table__title {
    margin: 0px 0px 30px 0px;
  }

  .table__head {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    font-size: 0;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background: #666;
    padding: 20px 27px;
    border: 2px solid #666;
    border-width: 1px 2px;
  }

  .table__head-name {
    font-size: 18px;
    color: #fff;
    font-family: "Geometria-Bold";
  }

  .table__head-price {
    font-size: 18px;
    color: #fff;
    font-family: "Geometria-Bold";
    max-width: 70%;
  }

  .table__row {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    font-size: 0;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 20px 27px;
    border: 2px solid #666;
    border-width: 1px 2px;
  }

  .table__row:nth-child(odd) {
    background: #ccc;
  }

  .table__row:last-child {
    border-width: 1px 2px 2px 2px;
  }

  .table__row-name {
    font-size: 18px;
    color: #333;
  }

  .table__row-price {
    font-size: 18px;
    color: #333;
    max-width: 70%;
  }

  @media (max-width: 767.98px) {
    .table {
      padding: 0px 0px 65px 0px;
    }
  }

  @media (max-width: 479.98px) {
    .table__head, .table__row {
      padding: 18px 15px;
    }

    .table__head-name {
      font-size: 16px;
    }

    .table__head-price {
      font-size: 16px;
    }

    .table__row-name {
      font-size: 16px;
    }

    .table__row-price {
      font-size: 16px;
    }
  }

</style>
