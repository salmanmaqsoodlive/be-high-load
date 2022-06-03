<template>
  <div class="showcase">
    <b-container>
      <div class="row">
        <div class="col-md-6 col-12">
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
  height: 120vh !important;
  /* left: 0px; */
  top: 0px;
  background-position-x: center !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.39),
      rgba(255, 255, 255, 0.39)
    ),
    url("../../assets/christopher-gower-vjMgqUkS8q8-unsplash\ 1.jpg");
}

@media only screen and (max-width: 1024px) {
  .showcase {
    height: 990px !important;
  }

  .main-text {
    top: 120px;
  }
  .secondary-text {
    top: 120px;
  }
  .contact-us-btn {
    top: -40px;
  }
}

@media only screen and (max-width: 768px) {
  .showcase {
    height: 80vh !important;
  }
  .main-text {
    /* left: 85px; */
    top: 130px;
    font-size: 30px !important;
    width: 350px !important;
    /* width: 90% !important; */
    /* font-weight: 600; */
    line-height: 40px !important;
  }
  .secondary-text {
    top: 30px !important;
    width: 290px !important;
    font-size: 16px !important;
  }
  .contact-us-btn {
    top: -155px !important;
    font-size: 12px;
  }
}

@media only screen and (max-width: 425px) {
  .showcase {
    height: 80vh !important;
  }
  .main-text {
    /* left: 85px; */
    top: 160px;
    font-size: 20px !important;
    width: 250px !important;
    /* width: 90% !important; */
    /* font-weight: 600; */
    line-height: 30px !important;
  }
  .secondary-text {
    top: 30px !important;
    width: 250px !important;
    font-size: 11px !important;
  }
  .contact-us-btn {
    top: -165px !important;
    padding: 6px 10px;
    font-size: 12px !important;
  }
}
@media only screen and (max-width: 375px) {
  .showcase {
    height: 80vh !important;
  }
  .main-text {
    /* left: 85px; */
    top: 160px;
    font-size: 20px !important;
    width: 250px !important;
    /* width: 90% !important; */
    /* font-weight: 600; */
    line-height: 30px !important;
  }
  .secondary-text {
    top: 30px !important;
    width: 250px !important;
    font-size: 11px !important;
  }
  .contact-us-btn {
    top: -165px !important;
  }
}
@media only screen and (max-width: 320px) {
  .showcase {
    height: 80vh !important;
  }
  .main-text {
    /* left: 85px; */
    top: 160px;
    font-size: 20px !important;
    width: 250px !important;
    /* width: 90% !important; */
    /* font-weight: 600; */
    line-height: 30px !important;
  }
  .secondary-text {
    top: 30px !important;
    width: 250px !important;
    font-size: 11px !important;
  }
  .contact-us-btn {
    top: -165px !important;
  }
}
</style>
