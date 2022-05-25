<template>
  <div>
    <Showcase />
    <Navbar color="#1c3e5f" :logo="logo" />

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
import logo from "../assets/company.png";
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
  mounted() {
    // setTimeout(() => {
    // window.addEventListener("scroll", this.activeMenu());
    // }, 2000);
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
  top: -300px !important;
}
@media only screen and (max-width: 750px) {
  .service-container {
    position: relative !important;
    top: -250px !important;
  }
}
</style>
