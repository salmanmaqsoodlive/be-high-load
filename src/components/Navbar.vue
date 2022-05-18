<template>
  <!-- <Showcase /> -->
  <b-navbar toggleable="lg mt-3" class="mobile-nav">
    <b-container>
      <b-navbar-brand class="col-6">
        <router-link to="/">
          Logo
          <!-- <img src="../assets/Logo.png" width="195.5" /> -->
        </router-link>
      </b-navbar-brand>
      <b-navbar-toggle target="navbar-toggle-collapse"> </b-navbar-toggle>

      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item>
            <router-link to="/">Services</router-link>
          </b-nav-item>
          <b-nav-item class="margin-left">
            <router-link to="/projects">Projects</router-link>
          </b-nav-item>
          <b-nav-item class="margin-left">
            <router-link to="/career">Career</router-link>
          </b-nav-item>
          <b-nav-item class="margin-left">
            <router-link to="/contact-us">Contact Us</router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
import Showcase from "@/components/Showcase.vue";
export default {
  name: "Navbar",
  components: {
    Showcase,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.margin-left {
  margin-left: 40px !important;
}
.mobile-nav {
  background-color: rgba(0, 0, 0, 0);
}
@media only screen and (max-width: 991px) {
  .mobile-nav {
    background-color: rgba(226, 226, 226, 0.9);
  }
  .margin-left {
    margin-left: 0px !important;
  }
}
</style>
