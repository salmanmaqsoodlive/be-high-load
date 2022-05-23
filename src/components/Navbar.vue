<template>
  <!-- <Showcase /> -->
  <b-navbar toggleable="lg mt-3" class="mobile-nav">
    <b-container>
      <b-navbar-brand class="col-6">
        <router-link to="/">
          <img :src="logo" width="195.5" />
        </router-link>
      </b-navbar-brand>
      <b-navbar-toggle target="navbar-toggle-collapse"> </b-navbar-toggle>

      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#service" :style="{ color: color }">
            <router-link to="/"> Services </router-link>
          </b-nav-item>
          <b-nav-item
            class="margin-left"
            href="#projects"
            :style="{ color: color }"
          >
            Projects
          </b-nav-item>
          <b-nav-item
            class="margin-left"
            href="#career"
            :style="{ color: color }"
          >
            Career
          </b-nav-item>
          <b-nav-item
            class="margin-left"
            href="#contact-us"
            :style="{ color: color }"
          >
            Contact Us
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
import Showcase from "@/components/ServicesComponents/Showcase.vue";
export default {
  name: "Navbar",
  props: ["color", "logo"],
  components: {
    Showcase,
  },

  computed: {
    cssVars() {
      return {
        /* variables you want to pass to css */
        "--color": this.color,
      };
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.test {
  /* display: flex; */
  position: fixed !important ;
  top: 0;
}
.nav-item > a {
  color: var(--color) !important;
}
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
