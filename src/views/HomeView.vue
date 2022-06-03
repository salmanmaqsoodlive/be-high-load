<template>
  <div>
    <Showcase />
    <Navbar color="#1c3e5f" :logo="logo" page="main" />

    <div class="service-container">
      <ServiceListComponent id="service" class="section1" />
      <Projects id="projects" class="section1" />
      <Career id="career" class="section1" />
      <ContactUs id="contact-us" class="section1" />
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
import logo from "../assets/company.svg";
const links = document.querySelectorAll(".links");
const section = document.querySelectorAll(".section1");

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
  methods: {
    activeMenu() {
      console.log(section);
      let len = section.length;
      // while (--len && window.scrollY + 97 < section[len].offsetTop) {}
      links.forEach((ltx) => ltx.classList.remove("active"));
      links[len].classList.add("active");
    },
  },
};
</script>

<style scoped>
.service-container {
  position: relative !important;
  top: 180px !important;
}
@media only screen and (max-width: 750px) {
  .service-container {
    position: relative !important;
    top: 150px !important;
  }
}
@media only screen and (min-width: 1500px) {
  .service-container {
    position: relative !important;
    top: -170px !important;
  }
}
@media only screen and (min-width: 1600px) {
  .service-container {
    position: relative !important;
    top: -170px !important;
    /* background-color: red !important; */
  }
}
@media only screen and (min-width: 1780px) {
  .service-container {
    position: relative !important;
    top: -90px !important;
    /* background-color: red !important; */
  }
}
@media only screen and (min-width: 1940px) {
  .service-container {
    position: relative !important;
    top: 10px !important;
    /* background-color: red !important; */
  }
}
@media only screen and (min-width: 2096px) {
  .service-container {
    position: relative !important;
    top: 140px !important;
    /* background-color: red !important; */
  }
}
</style>
