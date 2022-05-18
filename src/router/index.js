import Vue from "vue";
import VueRouter from "vue-router";
import Services from "../views/Services.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "services",
    component: Services,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/AboutView.vue");
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
