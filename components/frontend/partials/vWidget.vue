<template>
  <div class="wrapper">
    <div class="connect">
      <div class="connect__block" :class="{'active': active}" @mouseenter="addClass" @mouseleave="removeClass">
        <div class="connect__item">
          <div class="connect__item-icon teleg">
            <img :src="require('assets/img/icons/whatsapp.svg')" alt=""/>
          </div>
          <div class="connect__item-icon insta">
            <img :src="require('assets/img/icons/viber.svg')" alt=""/>
          </div>
        </div>
        <ul class="connect__icons"  :class="{'active': active}">
          <li>
            <a href="whatsapp://send?phone=+79298330051" class="connect__link">
              <img :src="require('assets/img/icons/whatsapp.svg')" alt=""/>
            </a>
          </li>
          <li>
            <a href="viber://add?number=+79298330051" class="connect__link">
              <img :src="require('assets/img/icons/viber.svg')" alt=""/>
            </a>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
    active: false
    }
  },
methods: {
  addClass() {
    this.active = true
  },
  removeClass() {
    this.active = false
  }
}
}
</script>

<style scoped>

.connect {
  position: fixed;
  right: 5vw;
  bottom: 5vh;
  z-index: 5;
}
.connect__block img {
  display: block;
  max-width: 100%;
}
.connect__block.active .connect__item .connect__item-icon {
  opacity: 0;
  -webkit-animation: none;
  animation: none;
}
.connect__block.active .connect__item:after {
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}
.connect__block.active .connect__item:before {
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
.connect__icons {
  position: absolute;
  right: 0;
  bottom: 100%;
  z-index: 2;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}
.connect__icons.active li {
  margin: 0px 0px 15px 0px;
  -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}
.connect__icons li {
  overflow: hidden;
  margin-bottom: -100%;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
  height: 50px;
  width: 50px;
  background: #fff;
  border-radius: 50%;
}
.connect__icons li:hover {
  -webkit-transform: scale(1.2);
  -ms-transform: scale(1.2);
  transform: scale(1.2);
}
.connect__icons img {
  max-width: 100%;
  display: block;
}
.connect__link {
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
  display: block;
  position: relative;
  z-index: 6;
  padding: 8px;
}
.connect__item {
  height: 50px;
  width: 50px;
  background: #fff;
  border-radius: 50%;
  -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  position: relative;
  top: 0;
  z-index: 5;
  cursor: pointer;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}
.connect__item:before,
.connect__item:after {
  height: 2px;
  width: 20px;
  position: absolute;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
  background: red;
}
.connect__item:before {
  content: "";
  left: 8px;
  top: 23px;
}
.connect__item:after {
  content: "";
  right: 8px;
  top: 23px;
}
.connect__item-icon {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  background: transparent;
  padding: 8px;
  background: #fff;
  border-radius: 50%;
  z-index: 2;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
}
.connect__item-icon.insta {
  opacity: 0;
  -webkit-animation: anim 6s linear infinite;
  animation: anim 6s linear infinite;
}


@-webkit-keyframes anim {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes anim {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
