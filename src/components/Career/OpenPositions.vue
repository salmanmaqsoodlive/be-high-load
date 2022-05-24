<template>
  <section>
    <div class="container margin-t">
      <vue-loaders
        v-if="loading"
        name="ball-beat"
        color="orange"
        scale="2"
        class="d-block text-center"
      />
      <div class="row" v-else>
        <div
          class="col-sm-6 col-12 margin-b"
          style="cursor: pointer"
          v-for="vacancy in vacancies"
        >
          <router-link :to="`/career/${vacancy.id}`">
            <CareerCard
              :title="vacancy.title"
              :salary="vacancy.salary"
              :jobType="vacancy.type"
            />
          </router-link>
        </div>
      </div>
    </div>
    <Footer class="margin-t" />
  </section>
</template>

<script>
import CareerCard from "@/components/Career/CareerCard.vue";
import Footer from "../Footer.vue";
export default {
  components: {
    CareerCard,
    Footer,
  },
  data() {
    return {
      loading: true,
      vacancies: [],
    };
  },
  async mounted() {
    this.getVacancies();
  },
  methods: {
    async getVacancies() {
      const { data } = await this.$axios.get("/Vacancies/vacancies");
      this.vacancies = data;
      this.loading = false;
    },
    // vacancyCardClicked(vacancy) {
    //   console.log(vacancy);
    // },
  },
};
</script>

<style scoped>
.margin-t {
  margin-top: 330px;
}
.margin-b {
  margin-bottom: 70px;
}
</style>
