import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Career from "@/views/Career.vue";
import VacancyDetails from "@/views/VacancyDetails.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/career",
    name: "career",
    component: Career,
  },
  {
    path: "/career/:id",
    name: "VacancyDetails",
    props: true,
    component: VacancyDetails,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  },
});

export default router;
