<template>
  <div>
    <div class="card shadow" id="project-card">
      <img class="card-img-top" alt="Card image cap" :src="src" />
      <div class="card-body p-4">
        <p class="sub-heading mt-4">{{ category }}</p>
        <h5 class="card-title mb-5">{{ title }}</h5>
        <p class="card-text">{{ tagline }}</p>
        <div class="row justify-content-center mt-4 pt-2">
          <div class="col-2 btn">
            <img
              src="@/assets/arrow-inactive.svg"
              style="width: 2rem"
              class="arrow"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  props: ["src", "title", "category", "tagline"],
};
</script>
<style scoped>
.card-text {
  font-family: "Nunito";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 158.2%;
  letter-spacing: 0.04em;
  color: rgba(28, 62, 95, 0.95);
}
.card {
  cursor: pointer;
  /* width: 367px !important; */
  /* height: 564px !important; */
  background: #fafafa !important;
  border-radius: 8px !important;
  border: none;
}
.card-img-top {
  border-radius: 8px 8px 0 0 !important;
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
</style>
