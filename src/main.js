import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapVue from "bootstrap-vue";
import Axios from "axios";
import "vue-loaders/dist/vue-loaders.css";
import VueLoaders from "vue-loaders";

Vue.use(VueLoaders);

Vue.prototype.$axios = Axios;
Axios.defaults.baseURL = "https://behighload.azurewebsites.net";

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
