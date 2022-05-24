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
