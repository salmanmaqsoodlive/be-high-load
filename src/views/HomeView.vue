<template>
  <div>
    <Navbar color="#1c3e5f" :logo="logo" />
    <Showcase />
    <div class="service-container">
      <ServiceListComponent id="service" />
      <Projects id="projects" />
      <Career id="career" />
      <ContactUs id="contact-us" />
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Projects from "@/components/ProjectsComponents/Projects.vue";
import Career from "@/components/Career/Career.vue";
import Showcase from "@/components/ServicesComponents/Showcase.vue";
import ServiceListComponent from "@/components/ServicesComponents/ServicesListingComponent.vue";
import ContactUs from "@/components/ContactUsComponents/ContactUs.vue";
import Footer from "@/components/Footer.vue";
import logo from "../assets/company.png";

export default {
  name: "Services",
  components: {
    Showcase,
    ServiceListComponent,
    Projects,
    Career,
    ContactUs,
    Navbar,
    Footer,
  },
  data() {
    return {
      logo,
    };
  },
};
</script>

<style scoped>
.service-container {
  position: relative !important;
  top: 750px !important;
}
@media only screen and (max-width: 750px) {
  .service-container {
    position: relative !important;
    top: 250px !important;
  }
}
</style>
