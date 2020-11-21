<template>

  <footer class="footer">
    <div class='container'>
      <div class="footer__text footer-col">
        <p>© 2009-{{ new Date().getFullYear() }} Господин Потолков</p>
        <p>г. Краснодар, ул. им. 40-летия Победы, 33/6</p>
        <p>+7 (999) 631-45-41, <a href="mailto:info@potolkov.shop" class="footer__text">info@potolkov.shop</a></p>
      </div>
      <div class="footer-col footer-logo">
        <a href="/">
          <img src="~/assets/img/logo.png" alt=""/>
        </a>
      </div>
      <div class="footer-social  footer-col">

        <div class="footer-social-icons">
          <div>
            <a href="https://vk.com/potolki_eysk"><img src="~/assets/img/icons/01.svg" alt="ВКонтакте"
                                                       class="social_image"/></a>
          </div>
          <div>
            <a href="https://ok.ru/profile/561793328279"><img src="~/assets/img/icons/02.svg" alt="Однокласники"
                                                              class="social_image"/></a>
          </div>
          <div>


            <a href="https://www.instagram.com/gospodinpotolkov/"><img src="~/assets/img/icons/03.svg"
                                                                       alt="instagram" class="social_image"/></a>
          </div>
          <div>


            <a href="https://www.facebook.com/profile.php?id=100033774094645"><img src="~/assets/img/icons/04.svg"
                                                                                   alt="Facebook"

                                                                                   class="social_image"/></a>
          </div>
        </div>
        <div class="footer__contacts-call">
          <a href="tel:+79996314541" class="footer__contacts-call-link">
            <svg class="tel" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                 xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 480.56 480.56"
                 xml:space="preserve">
					<g>
						<g>
							<path d="M365.354,317.9c-15.7-15.5-35.3-15.5-50.9,0c-11.9,11.8-23.8,23.6-35.5,35.6c-3.2,3.3-5.9,4-9.8,1.8
			c-7.7-4.2-15.9-7.6-23.3-12.2c-34.5-21.7-63.4-49.6-89-81c-12.7-15.6-24-32.3-31.9-51.1c-1.6-3.8-1.3-6.3,1.8-9.4
			c11.9-11.5,23.5-23.3,35.2-35.1c16.3-16.4,16.3-35.6-0.1-52.1c-9.3-9.4-18.6-18.6-27.9-28c-9.6-9.6-19.1-19.3-28.8-28.8
			c-15.7-15.3-35.3-15.3-50.9,0.1c-12,11.8-23.5,23.9-35.7,35.5c-11.3,10.7-17,23.8-18.2,39.1c-1.9,24.9,4.2,48.4,12.8,71.3
			c17.6,47.4,44.4,89.5,76.9,128.1c43.9,52.2,96.3,93.5,157.6,123.3c27.6,13.4,56.2,23.7,87.3,25.4c21.4,1.2,40-4.2,54.9-20.9
			c10.2-11.4,21.7-21.8,32.5-32.7c16-16.2,16.1-35.8,0.2-51.8C403.554,355.9,384.454,336.9,365.354,317.9z"/>
              <path d="M346.254,238.2l36.9-6.3c-5.8-33.9-21.8-64.6-46.1-89c-25.7-25.7-58.2-41.9-94-46.9l-5.2,37.1
			c27.7,3.9,52.9,16.4,72.8,36.3C329.454,188.2,341.754,212,346.254,238.2z"/>
              <path d="M403.954,77.8c-42.6-42.6-96.5-69.5-156-77.8l-5.2,37.1c51.4,7.2,98,30.5,134.8,67.2c34.9,34.9,57.8,79,66.1,127.5
			l36.9-6.3C470.854,169.3,444.354,118.3,403.954,77.8z"/>
						</g>
					</g>

				</svg>
          </a>
          <a href="tel:+79996314541"><span class="footer__contacts-call-num">+7 (999) 631-45-41</span></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  head() {
    return {
    __dangerouslyDisableSanitizers: ["script"],
    script: [
      {
        innerHTML: JSON.stringify(this.structuredData),
        type: "application/ld+json",
        body: true
      }
    ]
    }
  },

  data() {
    return {
      structuredData:  {
        "@context": "http://schema.org",
        "@type": "Organization",
        "name" : "Господин Потолков",
        "alternateName": "Натяжнае потолки - Господин Потолков",
        "description": "Натяжные потолки в Краснодаре от 260 р.",
        "url": "https://potolkov.shop",
        "email": "info@potolkov.shop",
        "legalName": "И.П. Завадская Ю.А.",
        "logo": "https://potolkov.shop/logo.png",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "RU",
          "addressLocality": "Краснодар",
          "addressRegion": "Краснодарский край",
          "postalCode": "350000",
          "streetAddress": "ул. им. 40-летия Победы, 33/6"
        },
        "telephone": "+7 (999) 631-45-41",
        "sameAs" : ["https://vk.com/potolki_eysk", "https://ok.ru/profile/561793328279",
          "https://www.instagram.com/gospodinpotolkov/", "https://www.facebook.com/profile.php?id=100033774094645"]
      }
    }
  }
}
</script>

<style scoped>

.footer-col {
  margin: 10px auto;
}

.social_image {
  transition: all 0.3s;
}

.social_image:hover {
  transform: rotate(360deg);
}

.footer-social-icons div {
  width: 20px;
  height: 20px;
}

.footer-social-icons {
  display: flex;
  justify-content: space-between;
}

.footer-social img {
  display: block;
  max-height: 20px;
}

.footer-logo a {
  margin: 20px auto;
}

.footer-social {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.footer__text {
  line-height: 2;

  color: white;
  font-size: 14px;
}

.container {
  max-width: 1270px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
