<template>
  <!-- <Showcase /> -->
  <b-navbar id="mynav" toggleable="lg mt-3" class="mobile-nav sticky-top">
    <b-container>
      <b-navbar-brand class="col-6">
        <router-link to="/">
          <img :src="logo" width="195.5" />
        </router-link>
      </b-navbar-brand>
      <b-navbar-toggle target="navbar-toggle-collapse"> </b-navbar-toggle>

      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item :style="{ color: color }">
            <router-link :to="{ path: '/', hash: '#service' }">
              Services
            </router-link>
          </b-nav-item>
          <b-nav-item class="margin-left" :style="{ color: color }">
            <router-link :to="{ path: '/', hash: '#projects' }"
              >Projects</router-link
            >
          </b-nav-item>
          <b-nav-item class="margin-left" :style="{ color: color }">
            <router-link :to="{ path: '/', hash: '#career' }"
              >Career</router-link
            >
          </b-nav-item>
          <b-nav-item class="margin-left" :style="{ color: color }">
            <router-link :to="{ path: '/', hash: '#contact-us' }"
              >Contact Us</router-link
            >
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

  mounted() {
    var myNav = document.getElementById("mynav");
    window.onscroll = function () {
      if (
        document.body.scrollTop >= 100 ||
        document.documentElement.scrollTop >= 100
      ) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
      } else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
      }
    };
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
a {
  color: var(--color) !important;
}
.margin-left {
  margin-left: 40px !important;
}
.mobile-nav {
  background-color: rgba(0, 0, 0, 0);
}
.nav-colored {
  background-color: rgba(234, 234, 234, 0.773) !important;
}
.nav-transparent {
  background-color: transparent;
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
