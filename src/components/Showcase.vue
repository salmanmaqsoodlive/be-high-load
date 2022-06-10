<template>
  <div class="container-fluid showcase-bg">
    <div class="container">
      <h1 class="title">{{ title }}</h1>

      <p class="tagline">{{ tagline }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "tagline"],
};
</script>

<style scoped>
.tagline {
  font-family: "Nunito";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 163.15%;
  /* identical to box height, or 33px */

  letter-spacing: 0.02em;

  /* White */

  color: #fafafa;
}
.title {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 52px;
  line-height: 69px;
  letter-spacing: 0.02em;
  color: #fafafa;
  margin-top: 160px;
}
.showcase-bg {
  top: 0px !important;
  position: absolute !important;
  z-index: -9999;
  height: 305px;
  background-image: url("../assets/showcase-bg-1.png");
  background-position: center;
  background-size: cover;
}

@media only screen and (max-width: 767px) {
  .title {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;

    letter-spacing: 0.02em;
    color: #fafafa;
    margin-top: 110px;
  }
}

@media only screen and (max-width: 425px) {
  .title {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 42px;
    line-height: 49px;
    letter-spacing: 0.01em;
    color: #fafafa;
    margin-top: 120px;
  }
}
</style>
