<template>
  <section>
    <Showcase />
    <ServiceListComponent />
    <!-- <Projects /> -->
  </section>
</template>

<script>
// @ is an alias to /src
import Showcase from "@/components/ServicesComponents/Showcase.vue";
// import Projects from "../views/Projects.vue";
import ServiceListComponent from "@/components/ServicesComponents/ServicesListingComponent.vue";

export default {
  name: "Services",
  components: {
    Showcase,
    // Projects,
    ServiceListComponent,
  },
};
</script>
