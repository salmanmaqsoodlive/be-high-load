<template>
  <section>
    <div class="container margin-t px-sm-0 px-5">
      <vue-loaders
        v-if="loading"
        name="ball-beat"
        color="orange"
        scale="2"
        class="d-block text-center"
      />
      <template v-else>
        <div class="row d-flex align-items-center">
          <div class="col-md-4 col-12" v-if="vacancy.salary">
            <p class="salary paragraph-style">
              {{ vacancy.salary }}
            </p>
          </div>
          <div class="col-md-6 col-12">
            <p class="type paragraph-style">{{ vacancy.type }}</p>
          </div>
        </div>
        <div class="row align-items-center">
          <div
            class="col-md-4 col-12 d-md-none d-block"
            style="text-align: center"
          >
            <img src="@/assets/vacancy.svg" />
          </div>
          <div class="col-md-8 col-12 margin-t-1">
            <p class="paragragh" v-html="vacancy.description"></p>
          </div>

          <div
            class="col-md-4 col-12 d-md-block d-none"
            style="text-align: right"
          >
            <img src="@/assets/vacancy.svg" :width="255" />
          </div>
        </div>
        <h1 class="heading my-5" v-if="vacancy.duties">Your duties</h1>
        <div class="row">
          <div class="col-sm-9 col-12">
            <p class="paragragh mb-4" v-for="duty in vacancy.duties">
              {{ duty }}
            </p>
          </div>
          <div class="col-sm-3 col-12"></div>
        </div>
        <div class="row">
          <div class="col-md-7 col-12">
            <h1 class="heading my-5" v-if="vacancy.ourExpectations">
              Our expectations
            </h1>
            <p
              class="paragragh mb-4"
              v-for="expection in vacancy.ourExpectations"
            >
              {{ expection }}
            </p>
          </div>
          <div class="col-md-5 col-12">
            <h1 class="heading my-5" v-if="vacancy.niceToHave">
              Nice-to-haves
            </h1>
            <p class="paragragh mb-4" v-for="text in vacancy.niceToHave">
              {{ text }}
            </p>
          </div>
        </div>
        <div class="row justify-content-center margin-t-1">
          <button
            class="apply-now-btn margin-t-1 col-md-4 col-12"
            @click="sendEmail()"
          >
            Apply Now!
          </button>
        </div>
      </template>
    </div>

    <Footer class="margin-t" />
  </section>
</template>

<script>
import Footer from "@/components/Footer.vue";
export default {
  props: ["vacancy"],
  components: {
    Footer,
  },
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    this.loading = false;
  },
  methods: {
    sendEmail(type) {
      window.open("mailto:info@chatapp.com");
    },
  },
};
</script>

<style scoped>
.apply-now-btn {
  border: none;
  background: #f48a17;
  border-radius: 50px;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 163.15%;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: capitalize;
  padding: 12px 75px;
  color: #fafafa;
}
.margin-t {
  margin-top: 330px;
}
.margin-t-1 {
  margin-top: 60px;
}
.margin-b {
  margin-bottom: 70px;
}
.paragragh {
  /* Paragraph */

  font-family: "Nunito";
  font-style: normal;
  font-weight: 500;
  font-size: 20px !important;
  line-height: 163.15%;
  /* or 33px */

  letter-spacing: 0.02em;

  /* Blue */

  color: rgba(28, 62, 95, 0.95);
}
.heading {
  /* Head 2 */

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 34px;
  line-height: 41px;
  display: flex;
  align-items: center;
  letter-spacing: 0.03em;

  /* Orange */

  color: #f48a17;
}
.paragraph-style {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 34px;
  line-height: 41px;
  letter-spacing: 0.03em;
}
.salary {
  color: #55a2a1;
  /* margin-right: 200px; */
}
.type {
  color: rgba(28, 62, 95, 0.95) !important;
}
</style>
