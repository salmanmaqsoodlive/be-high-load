<template>
  <div class="container-fluid footer-container">
    <div class="container pt-4">
      <div class="row py-5">
        <div class="col-md-6 col-12">
          <div class="col-md-7 col-12">
            <img src="@/assets/Logo-2.png" />
            <p class="tagline">Built with honesty, integrity & quality..</p>
          </div>
        </div>
        <div class="col-md-6 col-12 justify-content-between mb-5">
          <div class="row">
            <div class="col-md-4 col-12">
              <p class="heading">Pages</p>
              <router-link
                class="nav-link-title"
                :to="{ path: '/', hash: '#service' }"
                >Services</router-link
              >
              <router-link
                class="nav-link-title"
                :to="{ path: '/', hash: '#projects' }"
                >Projects</router-link
              >
              <router-link
                class="nav-link-title"
                :to="{ path: '/', hash: '#career' }"
                >Career</router-link
              >
              <router-link
                class="nav-link-title"
                :to="{ path: '/', hash: '#contact-us' }"
                >Contact Us</router-link
              >
            </div>
            <div class="col-md-4 col-12">
              <p class="heading">Contact Us</p>
              <p class="nav-link-title" @click="sendEmail('email')">
                hello@behighload.com
              </p>
              <p class="nav-link-title" @click="sendEmail('')">+48-574-429-116</p>
              <p class="nav-link-title">
                Adama Branickiego 21 / U3, 02-927 Warsaw <br />
                Poland
              </p>
            </div>
            <div class="col-md-4 col-12">
              <p class="heading">Agreements</p>
              <p class="nav-link-title">
                <router-link
                  class="nav-link-title"
                  :to="{ path: '/privacy-policy' }"
                  >Privacy Policy</router-link
                >
              </p>
              <p class="nav-link-title">
                <router-link
                    class="nav-link-title"
                    :to="{ path: '/terms-and-conditions' }"
                >Terms and Conditions</router-link
                >
              </p>
              <p class="nav-link-title">
                <router-link
                    class="nav-link-title"
                    :to="{ path: '/cookies' }"
                >Cookie policy</router-link
                >
              </p>
            </div>
          </div>
        </div>
        <div class="col-12">
          <p class="nav-link-title mt-5">
            © 2022 beHighload Sp. z o.o.. All rights reserved
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    sendEmail(type) {
      if (type === "email") {
        window.open("mailto:info@chatapp.com");
        return;
      }
      window.open("tel:1800200300", "_self");
    },
  },
};
</script>

<style scoped>
.nav-link-title {
  font-family: "Nunito";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 128.2%;
  letter-spacing: 0.02em;
  color: #fafafa;
  margin-bottom: 30px !important;
  cursor: pointer;
  display: block;
}
.heading {
  /* Nav link */

  font-family: "Nunito";
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 163.15%;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #fafafa;
  margin-bottom: 55px !important;
}
.footer-container {
  background-color: rgba(28, 62, 95, 0.95) !important;
  margin-top: 240px;
}
.tagline {
  font-family: "Nunito";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 128.2%;
  display: flex;
  align-items: center;
  letter-spacing: 0.02em;
  color: #fafafa;
  margin-top: 33px;
}

@media only screen and (max-width: 767px) {
  .nav-link-title {
    margin-bottom: 10px !important;
  }
  .heading {
    margin-bottom: 12px !important;
    margin-top: 22px !important;
  }
}
</style>
