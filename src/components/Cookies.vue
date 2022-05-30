<template>
  <div class="container-fluid">
    <div class="container py-5 p-0">
      <div class="row align-items-center">
        <div class="col-sm-10 col-12 p-sm-0 p-4">
          <p>
            We and selected third parties use cookies or similar technologies
            for technical purposes, to enhance site navigation, analyze site
            usage, assist in our marketing efforts, and for other purposes as
            specified in the cookie policy. By clicking “Accept All Cookies”,
            you agree to the storing of cookies on your device to enhance site
            navigation, analyze site usage, and assist in our marketing efforts.
            <span
              ><router-link class="cookie-route" to="/cookies">
                Cookie policy</router-link
              ></span
            >
          </p>
        </div>
        <div class="col-sm-2 col-12 mb-4">
          <button class="cookie-btn" @click="cookiesAcceptButtonClicked">
            Accept all
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    if (this.getCookie("Accept")) {
      let cookieHtmlElement = document.getElementById("cookies");
      cookieHtmlElement.classList.add("d-none");
    }
  },
  methods: {
    cookiesAcceptButtonClicked() {
      let datetime = new Date();
      datetime = datetime;
      document.cookie = `Accept=true;path=https://be-high-load.herokuapp.com/`;
      document.cookie = `datetime=${datetime};path=https://be-high-load.herokuapp.com/`;
      document.cookie = "version=1;path=https://be-high-load.herokuapp.com/";
      document.cookie = `path=${this.$route.name};path=https://be-high-load.herokuapp.com/`;
      let cookieHtmlElement = document.getElementById("cookies");
      cookieHtmlElement.classList.add("d-none");
    },
    getCookie(key) {
      var name = key + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === " ") {
          c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    },
  },
};
</script>

<style scoped>
.cookie-route {
  font-family: "Nunito";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 163.15%;
  letter-spacing: 0.02em;
  text-decoration-line: underline !important;
  color: #55a2a1;
  margin-left: 40px;
}
.cookie-btn {
  font-family: "Nunito";
  font-style: normal;
  font-weight: 500;
  font-size: 11.7857px;
  line-height: 163.15%;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: capitalize;
  border: none;
  color: #fafafa;
  background: #55a2a1;
  border-radius: 14.7321px;
  padding: 7px 19px;
  margin-left: 60px !important;
}
p {
  font-family: "Nunito";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 163.15%;
  letter-spacing: 0.02em;
  color: rgba(28, 62, 95, 0.95);
}
</style>
