<template>
  <div class="container margin-t">
    <span class="anchor" id="test"></span>
    <p class="project-paragraph">Join our team</p>
    <h1 class="project-heading margin-b">Boost your career with us</h1>
    <div class="row justify-content-between">
      <div
        class="col-md-6 col-12 mb-5"
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
    <div class="row justify-content-center mt-5 mb-5">
      <div class="col-md-3 col-12 text-center">
        <router-link to="/career">
          <button class="shadow show-more-btn">Show More</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import CareerCard from "@/components/Career/CareerCard.vue";
export default {
  components: {
    CareerCard,
  },
  data() {
    return {
      vacancies: [],
    };
  },
  mounted() {
    this.getHomePageVacancies();
  },
  methods: {
    async getHomePageVacancies() {
      const { data } = await this.$axios.get("/Vacancies/vacancies-main-page");
      this.vacancies = data;
    },
  },
};
</script>

<style scoped>
.anchor {
  display: block !important;
  height: 92px;
  margin-top: -92px !important;
  visibility: hidden !important;
}
.show-more-btn {
  background: #fafafa !important;
  border: 1px solid #f48a17 !important;
  border-radius: 25px !important;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: capitalize;
  padding: 12px 27px;
  color: #f48a17 !important;
}
.show-more-btn > a {
  color: #f48a17 !important;
}
.margin-b {
  margin-bottom: 120px;
}
.margin-t {
  margin-top: 220px !important;
}
.project-detail-img {
  border-radius: 8px;
  /* box-shadow: 2px 2px 10px 4px rgb(217, 217, 217); */
  height: 250px !important;
  width: 356px !important;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.project-paragraph {
  font-family: "Nunito";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 163.15%;
  letter-spacing: 0.02em;
  color: #f48a17;
  text-align: center;
}
.project-heading {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 52px;
  line-height: 59px;
  text-align: center;
  letter-spacing: 0.02em;
  color: rgba(28, 62, 95, 0.95);
}

.card-title {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 30px;
  letter-spacing: 0.03em;
  color: rgba(28, 62, 95, 0.95);
}
.sub-heading {
  font-family: "Nunito";
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 174.2%;
  letter-spacing: 0.06em;
  color: #f48a17;
}
.text {
  font-family: "Nunito";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 158.2%;
  letter-spacing: 0.04em;
  color: rgba(28, 62, 95, 0.95);
  padding-right: 50px !important;
}
</style>
