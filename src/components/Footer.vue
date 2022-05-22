<template>
  <div class="container-fluid footer-container">
    <div class="container pt-4">
      <div class="row py-5">
        <div class="col-sm-6 col-12">
          <div class="col-4">
            <img src="@/assets/Logo-2.png" />
            <p class="tagline">Built with honesty, integrity & quality..</p>
          </div>
        </div>
        <div class="d-flex col-sm-6 col-12 justify-content-between mb-5">
          <div class="col-4">
            <p class="heading">Pages</p>
            <a class="nav-link-title" href="#service">Services</a>
            <a class="nav-link-title" href="#projects">Projects</a>
            <a class="nav-link-title" href="#career">Career</a>
            <a class="nav-link-title" href="#contact-us">Contact Us</a>
          </div>
          <div class="col-4">
            <p class="heading">Contact Us</p>
            <p class="nav-link-title">info@chatapp.com</p>
            <p class="nav-link-title">1-800-200-300</p>
            <p class="nav-link-title">
              Adama Branickiego 21 / U3, 02-927 Warsaw <br />
              Poland
            </p>
          </div>
          <div class="col-4">
            <p class="heading">Privacy policy</p>
            <p class="nav-link-title">Terms of service</p>
            <p class="nav-link-title">Legal Use</p>
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
  background-color: #1c3e5f !important;
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
</style>
