<template>
  <div>
    <Navbar color="#FAFAFA" :logo="logo" />
    <Showcase title="Cookies Policy" />
    <CookiesPolicy />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Showcase from "@/components/Showcase.vue";
import logo from "../assets/logo-white.svg";
import CookiesPolicy from "@/components/Cookies/CookiesPolicy.vue";

export default {
  components: {
    Showcase,
    Navbar,
    CookiesPolicy,
  },
  data() {
    return {
      logo,
    };
  },
};
</script>
