<template>
  <!-- <Showcase /> -->
  <b-navbar id="mynav" toggleable="lg" class="mobile-nav sticky-top">
    <b-container>
      <b-navbar-brand class="col-6">
        <router-link to="/">
          <img :src="logo" width="195.5" id="logo" />
        </router-link>
      </b-navbar-brand>
      <b-navbar-toggle target="navbar-toggle-collapse"> </b-navbar-toggle>

      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item class="links" :style="{ color: color }">
            <router-link :to="{ path: '/', hash: '#service' }">
              Services
            </router-link>
          </b-nav-item>
          <b-nav-item class="margin-left links" :style="{ color: color }">
            <router-link :to="{ path: '/', hash: '#projects' }"
              >Projects</router-link
            >
          </b-nav-item>
          <b-nav-item class="margin-left links" :style="{ color: color }">
            <router-link :to="{ path: '/', hash: '#career' }"
              >Career</router-link
            >
          </b-nav-item>
          <b-nav-item class="margin-left links" :style="{ color: color }">
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
import darkLogo from "@/assets/company.svg";
import whiteLogo from "@/assets/logo-white.svg";
export default {
  name: "Navbar",
  props: ["color", "logo", "page"],
  data() {
    return {
      darkLogo,
      whiteLogo,
    };
  },
  components: {
    Showcase,
  },

  mounted() {
    var myNav = document.getElementById("mynav");
    var logo = document.getElementById("logo");
    // window.addEventListener("scroll", this.activeMenu());
    window.onscroll = () => {
      const links = document.querySelectorAll("li");
      const section = document.querySelectorAll(".section1");
      let len = section.length;
      if (
        document.body.scrollTop >= 100 ||
        document.documentElement.scrollTop >= 100
      ) {
        logo.src = this.darkLogo;
        this.color = "#1c3e5f";
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
      } else {
        if (this.page === "main") {
          this.color = "#1c3e5f";
        } else {
          this.color = "#fafafa";
        }
        logo.src = this.logo;

        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
      }
      // if (section.length > 0)

      while (--len && window.scrollY - 597 < section[len].offsetTop) {}
      links.forEach((ltx) => ltx.classList.remove("active"));
      links[len].classList.add("active");
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
  methods: {
    async activeMenu() {
      const links = document.querySelectorAll("li");
      const section = document.querySelectorAll(".section1");
      let len = section.length;

      while (--len && window.scrollY + 97 < section[len].offsetTop) {}
      links.forEach((ltx) => ltx.classList.remove("router-link-exact-active"));
      links.forEach((ltx) => ltx.classList.remove("router-link-active"));

      links[len].classList.add("router-link-exact-active");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.active {
  color: #f48a17 !important;
}
#mynav {
  top: 0;
  position: fixed !important ;
  /* position: absolute; */
  width: 100%;
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
