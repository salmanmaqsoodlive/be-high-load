<template>
  <div>
    <Navbar color="#FAFAFA" :logo="logo" />
    <Showcase title="Terms and Conditions" />
    <TermsAndConditions />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Showcase from "@/components/Showcase.vue";
import logo from "../assets/logo-white.svg";
import TermsAndConditions from "@/components/TermsAndConditions/TermsAndConditions.vue";

export default {
  components: {
    Showcase,
    Navbar,
    TermsAndConditions,
  },
  data() {
    return {
      logo,
    };
  },
};
</script>
