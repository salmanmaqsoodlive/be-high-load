<template>
  <div class="container margin-t">
    <p class="project-paragraph">Work completed</p>
    <h1 class="project-heading margin-b">Our projects showcase</h1>
    <div class="row justify-content-between">
      <div class="col-sm-4 col-12 mb-sm-0 mb-5">
        <ProjectCard :src="image1" />
      </div>
      <div class="col-sm-4 col-12 mb-sm-0 mb-5">
        <ProjectCard :src="image2" />
      </div>
      <div class="col-sm-4 col-12 mb-sm-0 mb-5">
        <ProjectCard :src="image3" />
      </div>
    </div>
  </div>
</template>

<script>
import ProjectCard from "@/components/ProjectsComponents/ProjectCard.vue";
import image1 from "@/assets/pexels-fauxels-3184299 1.jpg";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";

export default {
  name: "Projects",
  components: {
    ProjectCard,
  },
  data() {
    return {
      image1,
      image2,
      image3,
    };
  },
};
</script>

<style>
.margin-b {
  margin-bottom: 120px;
}
.margin-t {
  margin-top: 220px;
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
</style>
