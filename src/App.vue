<template>
  <div id="app">
    <!-- <Navbar /> -->
    <router-view />
    <!-- <Footer id="footer" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
// import Footer from "@/components/Footer.vue";

export default {
  components: {
    Navbar,
    // Footer,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;400;500;600&family=Nunito:wght@200;300;400;500&display=swap");
#app {
  font-family: "Nunito", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
}

a {
  text-decoration: none !important;
}
.nav-item a {
  font-size: 17px;
  line-height: 163.15%;
  /* identical to box height, or 28px */

  letter-spacing: 0.02em;
  text-transform: uppercase;
  font-weight: 500;
  /* color: #1c3e5f !important; */
  text-decoration: none !important;
}
.nav-item a:hover {
  color: #f48a17 !important;
}

.router-link-active {
  color: #f48a17 !important;
}
.nav-item a.router-link-exact-active {
  color: #f48a17 !important;
}
</style>
