<template>
  <div>
    <Navbar color="#FAFAFA" :logo="logo" />
    <Showcase
      :title="this.vacancy.title"
      tagline="Boost your career with us."
    />
    <Vacancy :vacancy="vacancy" />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Showcase from "@/components/Showcase.vue";
import Vacancy from "@/components/Career/Vacancy.vue";
import logo from "../assets/logo-white.png";
export default {
  components: { Navbar, Showcase, Vacancy },
  data() {
    return {
      vacancy: {},
      logo,
    };
  },
  mounted() {
    this.getVacancies();
    var myNav = document.getElementById("mynav");
    console.log(myNav);
    // window.addEventListener("scroll", this.activeMenu());
    // window.onscroll = () => {
    //   if (
    //     document.body.scrollTop >= 100 ||
    //     document.documentElement.scrollTop >= 100
    //   ) {
    //     myNav.classList.add("nav-colored");
    //     myNav.classList.remove("nav-transparent");
    //   } else {
    //     myNav.classList.add("nav-transparent");
    //     myNav.classList.remove("nav-colored");
    //   }
    // };
  },
  methods: {
    async getVacancies() {
      const { data } = await this.$axios.get("/Vacancies/vacancies");
      this.vacancy = data.find(
        (element) => this.$route.params.id == element.id
      );
      this.loading = false;
    },
  },
};
</script>

<style scoped>
.nav-colored {
  background-color: rgba(234, 234, 234, 0.773) !important;
}
.nav-transparent {
  background-color: transparent;
}
</style>
