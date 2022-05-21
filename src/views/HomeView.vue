<template>
  <div>
    <Showcase />
    <div class="service-container">
      <ServiceListComponent id="service" />
      <Projects id="projects" />
      <Career id="career" />
      <ContactUs id="contact-us" />
    </div>
  </div>
</template>

<script>
import Projects from "@/components/ProjectsComponents/Projects.vue";
import Career from "@/components/Career/Career.vue";
import Showcase from "@/components/ServicesComponents/Showcase.vue";
import ServiceListComponent from "@/components/ServicesComponents/ServicesListingComponent.vue";
import ContactUs from "@/components/ContactUsComponents/ContactUs.vue";

export default {
  name: "Services",
  components: {
    Showcase,
    ServiceListComponent,
    Projects,
    Career,
    ContactUs,
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
