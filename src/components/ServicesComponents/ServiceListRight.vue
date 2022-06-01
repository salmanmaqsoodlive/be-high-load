<template>
  <div class="row align-items-center">
    <div class="col-md-6 col-12 image">
      <img :src="src" :width="348.21" />
    </div>
    <div class="col-md-6 col-12 margin-t">
      <h1>{{ title }}</h1>
      <p class="mt-5">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["src", "title", "description"],
};
</script>
<style scoped>
.image {
  text-align: start;
}
h1 {
  font-family: "Montserrat" !important;
  font-style: normal;
  font-weight: 600 !important;
  font-size: 34px !important;
  line-height: 41px !important;
  letter-spacing: 0.03em !important;
  color: rgba(28, 62, 95, 0.95);
}
p {
  font-family: "Nunito";
  font-style: normal;
  font-weight: 500 !important;
  font-size: 25px !important;
  line-height: 174.2% !important;
  letter-spacing: 0.06em !important;
  color: rgba(28, 62, 95, 0.95);
}

@media only screen and (max-width: 767px) {
  h1 {
    margin-top: 40px !important;
  }
}
</style>
