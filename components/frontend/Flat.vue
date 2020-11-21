<template>
  <section>
    <div class='container'>
      <h2 class="price__title  my-title">
        Выберите помещение
      </h2>
      <div class="info__row">
        <div class="info__column">
          <div class="info__photo">


            <div v-for="(room, index) in flat">
              <div :class="['livingroom_title', {active_title: room.isActive}]"
                   :style="{ top: room.top + '%', right: room.right + '%' }">
                <p class="flat-text">{{ room.title }}</p>
                <p class="flat-text">{{ room.square }} м<sup>2</sup></p>
              </div>
            </div>

            <svg viewBox="0 0 586 471" class="flat">
              <path :class="[room.class, {display: room.isActive}, {display_click: tmpClass}]"
                    @mouseover="click(index)"
                    @mouseleave="mouseLeave(index)" @click="click(index)"
                    :d="room.d" :fill="room.fill" v-for="(room, index) in flat"></path>
            </svg>

            <img src="~/assets/img/info/photo.jpg" alt="photo"/>

          </div>
        </div>
        <div class="info__column">
          <div class="info__item">
            <div class="info__label">Цена с установкой и стоимостью комплектующих
            </div>
            <div>
              <p class="info__title">{{ dispalyClick !== '' ? flat[dispalyClick].title : flat[0].title }}
              </p>
            </div>
            <div>
              <p
                class="info__subtitle">{{
                  dispalyClick !== '' ? flat[dispalyClick].sub_title : flat[0].sub_title
                }}</p>
            </div>
            <div>
              <p class="info__text">{{
                  dispalyClick !== '' ? flat[dispalyClick].description : flat[0].description
                }}</p>
            </div>
            <div>
              <p class="info__subtitle" style="text-transform: none">Итого: {{
                  dispalyClick !== '' ? flat[dispalyClick].price : flat[0].price
                }} р.</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      tmpClass: false,
      dispalyClick: '',
      flat: [
        {
          id: 0,
          title: 'Гостиная комната',
          sub_title: 'Белый матовый потолок',
          description: 'Общая площадь - 16 кв.м. Также в гостиной установлено 8 точечных светильников Gx53, карниз для штор, потолочная вставка - плинтус по периметру.',
          price: 11260,
          square: 16,
          d: 'm 227.62552,9.6305864 0.12292,217.5234336 96.17797,0.5947 0.35052,62.41012 252.11767,0.26 -1.42034,-280.396433 z',
          right: 15,
          top: 17,
          class: 'livingroom',
          isActive: true,
          fill: '#bf2523'
        },

        {
          id: 1,
          title: 'Кухня',
          sub_title: 'Белый глянцевый потолок',
          description: 'Общая площадь - 11,5 кв.м. На кухне выполнена фотопечать (UF) 1,5 кв. м, также установлена 1 люстра, потолочная вставка - плинтус по периметру.. Также на кухне 4 точечных светильника GX-53, потолочная вставка - плинтус, люстра.',
          price: 6570,
          square: 11.5,
          d: 'm 324.62316,295.92232 0.68568,165.83796 252.03844,-0.4408 -0.78364,-165.78898 z',
          right: 18,
          top: 72,
          class: 'kitchen',
          isActive: false,
          fill: '#bf2523'
        },
        {
          id: 2,
          title: 'Прихожая',
          sub_title: 'Бежевый глянцевый потолок (L-501)',
          description: 'Общая площадь - 8 кв.м. Также в прихожей установлено 4 точечных светильника Gx53, потолочная вставка - плинтус по периметру.',
          price: 4370,
          square: 8,
          d: 'M 317.85574,461.71853 H 227.04971 V 345.76941 H 125.48047 V 233.67186 h 190.27979 z',
          right: 50,
          top: 55,
          class: 'hallway',
          isActive: false,
          fill: '#bf2523'
        },
        {
          id: 3,
          title: 'Ванная',
          sub_title: 'Белый глянцевый потолок',
          description: 'Общая площадь - 10 кв.м. Также в ванной установлено 6 точечных светильников Gx53, потолочная вставка - плинтус по периметру.',
          price: 2540,
          square: 6,
          d: 'M 219.79156,461.51074 H 9.9741177 V 352.83441 l 209.6534323,-0.098 z',
          right: 74,
          top: 78,
          class: 'bathroom',
          isActive: false,
          fill: '#bf2523'
        },
        {
          id: 4,
          title: 'Гардероб',
          sub_title: 'Белый глянцевый потолок',
          description: 'Общая площадь — 3,5 кв.м. Также в гардеробной установлено 2 точечных светильника Gx53, потолочная вставка - плинтус по периметру.',
          price: 1810,
          square: 3.5,
          d: 'm 119.87211,347.1091 -109.9161137,0.11246 -0.00391,-113.54451 109.7683002,0.004 z',
          right: 80,
          top: 55,
          class: 'wardrobe',
          isActive: false,
          fill: '#bf2523'
        },
        {
          id: 5,
          title: 'Спальня',
          sub_title: 'Белый глянцевый потолок',
          description: 'Общая площадь - 12 кв.м. Также в спальне установлена 1 люстра, потолочная вставка - плинтус по периметру.',
          price: 4360,
          square: 12,
          d: 'M 10.575162,226.68283 220.89062,226.65473 220.99196,9.0486227 10.064007,9.623147 Z',
          right: 70,
          top: 17,
          class: 'bedroom',
          isActive: false,
          fill: '#bf2523'
        },
      ]
    }
  },
  methods: {
    mouseOver(index) {
      this.flat[index].isActive = true
    },

    mouseLeave(index) {
      if (this.dispalyClick === '' && this.dispalyClick !== 0) {
        this.flat[index].isActive = false
        this.flat[0].isActive = true
      } else if (this.dispalyClick === index && this.flat[index].isActive) {
        this.flat[index].isActive = true
      } else {
        this.flat[index].isActive = false
      }

    },
    click(index) {
      for (let i = 0; i < this.flat.length; i++) {
        this.flat[i].isActive = false
      }
      this.flat[index].isActive = true
      this.dispalyClick = index

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

.flat {
  position: absolute;
}


.livingroom_title {
  z-index: 1;
  position: absolute;
  color: #ffffff;
  letter-spacing: 1px;
  font-weight: bold;
  font-size: 1rem;
  line-height: 1.5;
  text-shadow: -1px -1px 17px rgba(255, 255, 255, 1);
  display: none;
  pointer-events: none;
}

@media (max-width: 576px) {
  .livingroom_title {
    font-size: 0.7rem;
  }
}

@media (max-width: 350px) {
  .livingroom_title {
    font-size: 0.5rem;
  }
}


.active_title {
  display: block
}

.livingroom, .kitchen, .hallway, .bathroom, .wardrobe, .bedroom {
  cursor: pointer;
  position: absolute;
  opacity: 0;
}

.display {
  opacity: 0.4;
}

.display_click {
  opacity: 0.4;
}

</style>
