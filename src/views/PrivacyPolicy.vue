<template>
  <div>
    <Navbar color="#FAFAFA" :logo="logo" />
    <Showcase title="Privacy Policy" />
    <Policy />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Showcase from "@/components/Showcase.vue";
import logo from "../assets/logo-white.svg";
import Policy from "@/components/PrivacyPolicyComponents/Policy.vue";

export default {
  components: {
    Showcase,
    Navbar,
    Policy,
  },
  data() {
    return {
      logo,
    };
  },
};
</script>
