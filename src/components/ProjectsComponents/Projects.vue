<template>
  <div class="container margin-t">
    <span class="anchor" id="test"></span>
    <p class="project-paragraph">Work completed</p>
    <h1 class="project-heading margin-b">Our projects showcase</h1>

    <div class="row justify-content-between">
      <carousel
        :startPosition="0"
        :responsive="{
          0: { items: 1, nav: true },
          1000: { items: 3, nav: true },
        }"
        :rewind="false"
        :dots="false"
      >
        <div
          class="mb-md-0 mb-5 py-5 px-lg-3 px-5"
          v-for="(project, index) in projectsData"
          @click="projectCardClicked(project, index)"
        >
          <ProjectCard
            :src="image[index]"
            :title="project.title"
            :category="project.category"
            :tagline="project.tagline"
          />
        </div>
      </carousel>
    </div>
    <div
      v-if="clicked > 0"
      class="row margin-t align-items-center justify-content-between"
    >
      <div class="col-12 col-md-5">
        <div
          class="project-detail-img shadow"
          :style="`background-image: url(${image[id]});`"
        />
      </div>
      <div class="col-md-6 col-12">
        <p class="sub-heading mt-md-0 mt-5">
          {{ project.category }}
        </p>
        <h5 class="card-title mb-5">
          {{ project.title }}
        </h5>
        <p class="text" v-html="project.description"></p>
        <p class="text mt-4">TECHNOLOGIES</p>
        <div class="col-12">
          <img
            :src="technology"
            v-for="technology in project.techStack"
            style="margin-right: 20px"
            :height="45"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import nextBtn from "@/assets/next-arrow.svg";
import prevBtn from "@/assets/prev.svg";
import backBtn from "@/assets/back-arrow.svg";
// import projectsData from "./projects.json";
import ProjectCard from "@/components/ProjectsComponents/ProjectCard.vue";
import image1 from "@/assets/Desktop-Main-Card.png";
import image2 from "@/assets/MobileMainCard.png";
import activeArrow from "@/assets/arrow-down.svg";
import inactiveArrow from "@/assets/arrow-inactive.svg";
import carousel from "vue-owl-carousel";
import microsoftLogo from "@/assets/technologies/microsoft.svg";
import xamarinLogo from "@/assets/technologies/xamarin.svg";
import vuejsLogo from "@/assets/technologies/vuejs.svg";
import netLogo from "@/assets/technologies/net-core.svg";

export default {
  name: "Projects",
  components: {
    ProjectCard,
    carousel,
  },
  data() {
    return {
      image: [image1, image2],
      id: 1,
      project: {},
      activeArrow,
      inactiveArrow,
      nextBtn,
      prevBtn,
      clicked: 0,
      projectsData: [
        {
          category: "Health",
          title: "Medical Billing SaaS Platform",
          tagline: "SaaS billing platform for home health providers.",
          description:
            "The platform handles complicated rules and regulations in an easy, user-friendly service that includes management of contractor payrolls, and scheduling of payment to payers and clearinghouses.",
          techStack: [vuejsLogo, netLogo],
        },
        {
          category: "Lifestyle",
          title: "Renting SaaS Platform",
          tagline:
            "On-line Business Platform and a great showcase for Fleet Owners to meet and interact with Drivers",
          description:
            "On-line Business Platform and a great showcase for Fleet Owners to meet and interact with Drivers regardless of where they are. Built-in chat allows staying in touch with owners and renters with expedition. The scheduling payment system made payments on time.",
          techStack: [netLogo, xamarinLogo, microsoftLogo],
        },
      ],

      // title:"",
      // description:"",
      // category
    };
  },
  mounted() {
    this.styleCarouselButtons();
    // this.project = projectsData[0];
    // this.selectedProject();
  },
  methods: {
    projectCardClicked(project, index) {
      this.clicked++;
      this.project = project;
      this.selectedProject(index);
      this.id = index;
    },
    styleCarouselButtons() {
      const nav = document.getElementsByClassName("owl-nav");

      nav[0].classList.add("row");
      nav[0].classList.add("m-5");
      nav[0].classList.add("justify-content-end");
      nav[0].childNodes[0].classList.add("col-1");

      nav[0].childNodes[0].classList.remove("owl-prev");
      nav[0].childNodes[0].innerHTML = `<img src=${backBtn} />`;
      nav[0].childNodes[1].classList.add("col-1");
      nav[0].childNodes[1].classList.remove("owl-next");
      nav[0].childNodes[1].innerHTML = `<img src=${nextBtn} />`;
    },
    selectedProject(index = 1) {
      const cardsImg = document.querySelectorAll(".arrow");
      const cards = document.querySelectorAll("#project-card");
      cards.forEach((ltx) => ltx.classList.remove("shadow-lg"));
      cards.forEach((ltx) => ltx.classList.add("shadow"));
      cardsImg.forEach((ltx) => (ltx.src = inactiveArrow));
      cardsImg[index].src = activeArrow;
      cards[index].classList.add("shadow-lg");
      cards[index].classList.remove("shadow");
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
/* .nextBtn {
  background-image: url("@/assets/next.svg") !important;
  height: 50px !important;
} */
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
  /* max-width: 356px !important; */
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

@media only screen and (max-width: 767px) {
  .margin-t {
    margin-top: 100px !important;
  }
}
</style>
