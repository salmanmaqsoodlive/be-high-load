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
  height: 1200px !important;
  /* left: 0px; */
  top: 0px;
  background-position-x: center !important;
  background-repeat: no-repeat !important;
  background-size: contain !important;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.39),
      rgba(255, 255, 255, 0.39)
    ),
    url("../../assets/christopher-gower-vjMgqUkS8q8-unsplash\ 1.jpg");
}

/* @media only screen and (max-width: 750px) {
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
} */

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

@media only screen and (max-width: 769px) {
  .showcase {
    height: 800px !important;
  }
  .main-text {
    /* left: 85px; */
    top: 90px;
    font-size: 32px;
    width: 400px;
    /* width: 90% !important; */
    /* font-weight: 500; */
    line-height: 49px;
  }
  .secondary-text {
    top: 25px !important;
    width: 500px;
  }
  .contact-us-btn {
    top: -145px !important;
    font-size: 16px;
    /* width: 500px; */
  }
}

@media only screen and (max-width: 717px) {
  .showcase {
    height: 720px !important;
  }
  .main-text {
    /* left: 85px; */
    top: 100px;
    font-size: 25px !important;
    width: 300px !important;
    /* width: 90% !important; */
    font-weight: 450;
    line-height: 39px !important;
  }
  .secondary-text {
    top: 5px !important;
    width: 300px !important;
    font-size: 16px !important;
  }
  .contact-us-btn {
    top: -170px !important;
    font-size: 12px !important;
    /* width: 500px; */
  }
}

@media only screen and (max-width: 591px) {
  .showcase {
    height: 630px !important;
  }
  .main-text {
    /* left: 85px; */
    top: 100px;
    font-size: 18px !important;
    width: 240px !important;
    /* width: 90% !important; */
    font-weight: 500;
    line-height: 29px !important;
  }
  .secondary-text {
    top: -30px !important;
    width: 260px !important;
    font-size: 14px !important;
  }
  .contact-us-btn {
    top: -220px !important;
    font-size: 12px !important;
    padding: 8px 16px;
  }
}
@media only screen and (max-width: 425px) {
  .showcase {
    height: 630px !important;
  }
  .main-text {
    /* left: 85px; */
    top: 90px;
    font-size: 14px !important;
    width: 190px !important;
    /* width: 90% !important; */
    font-weight: 500;
    line-height: 22px !important;
  }
  .secondary-text {
    top: -65px !important;
    width: 250px !important;
    font-size: 11px !important;
  }
  .contact-us-btn {
    top: -265px !important;
    font-size: 11px !important;
    padding: 6px 14px;
  }
}
@media only screen and (max-width: 375px) {
  .showcase {
    height: 510px !important;
  }
  .main-text {
    /* left: 85px; */
    top: 90px;
    font-size: 11px !important;
    width: 150px !important;
    /* width: 90% !important; */
    font-weight: 500;
    line-height: 18px !important;
  }
  .secondary-text {
    top: -80px !important;
    width: 250px !important;
    font-size: 9px !important;
  }
  .contact-us-btn {
    top: -285px !important;
    font-size: 9px !important;
    padding: 4px 10px;
  }
}
@media only screen and (max-width: 320px) {
  .showcase {
    height: 475px !important;
  }
  .main-text {
    /* left: 85px; */
    top: 80px;
    font-size: 9px !important;
    width: 120px !important;
    /* width: 90% !important; */
    font-weight: 600;
    line-height: 16px !important;
  }
  .secondary-text {
    top: -95px !important;
    width: 250px !important;
    font-size: 7px !important;
  }
  .contact-us-btn {
    top: -305px !important;
    font-size: 7px !important;
    padding: 2px 6px;
  }
}
</style>
