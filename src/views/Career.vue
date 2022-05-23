<template>
  <div>
    <Navbar color="#FAFAFA" :logo="logo" />
    <Showcase title="Join our team" tagline="Boost your career with us." />
    <OpenPostions />
  </div>
  <!-- <h1>Career</h1> -->
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import logo from "../assets/logo-white.png";
import Showcase from "@/components/Showcase.vue";
import OpenPostions from "@/components/Career/OpenPositions.vue";
export default {
  components: {
    Showcase,
    Navbar,
    OpenPostions,
  },
  data() {
    return {
      logo,
    };
  },
};
</script>
