<template>
  <div class="showcase">
    <b-container>
      <div class="row">
        <div class="col-6">
          <p class="box main-text">
            Fast and reliable solutions to the most complex problems
          </p>
          <p class="box secondary-text">
            Built with honesty, integrity & quality.
          </p>
          <button class="contact-us-btn">
            <router-link :to="{ path: '/', hash: '#contact-us' }"
              >Contact Us</router-link
            >
          </button>
        </div>
      </div>
    </b-container>
  </div>
</template>

<style scoped>
a {
  color: #ffffff !important;
}
.box {
  position: relative;
  width: 637px;
  height: 209px;
  font-style: normal;
  color: rgba(28, 62, 95, 0.95);
  letter-spacing: 0.02em;
}

.main-text {
  /* left: 85px; */
  top: 221px;
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 52px;
  line-height: 69px;
  color: rgba(28, 62, 95, 0.95);
}

.secondary-text {
  /* left: 90px; */
  top: 210px;
  font-family: "Nunito";
  font-weight: 500;
  font-size: 20px;
  line-height: 163.15%;
}

.contact-us-btn {
  position: relative;
  /* left: 85px; */
  top: 45px;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 163.15% !important;
  letter-spacing: 0.05em;
  text-transform: capitalize;
  padding: 10px 20px;
  color: #fafafa !important;
  background: #f48a17;
  border: none;
  border-radius: 25px;
}

.showcase {
  /* position: absolute; */
  width: 100vw;
  z-index: -9999;
  height: 1200px !important;
  /* left: 0px; */
  top: 0px;
  background-repeat: no-repeat !important;
  background-size: contain !important;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.39),
      rgba(255, 255, 255, 0.39)
    ),
    url("../../assets/christopher-gower-vjMgqUkS8q8-unsplash\ 1.jpg");
}

@media only screen and (max-width: 750px) {
  .showcase {
    height: 600px !important;
  }
  .main-text {
    font-weight: 400;
    width: 250px;
    padding: 0 8px;
    font-size: 20px;
    top: 90px;
    line-height: 123.15% !important;
  }
  .secondary-text {
    width: 250px;
    left: 9px;
    top: -60px;
    font-size: 11px;
  }
  .contact-us-btn {
    left: 9px;
    top: -250px;
    font-size: 11px;
  }
}
</style>
