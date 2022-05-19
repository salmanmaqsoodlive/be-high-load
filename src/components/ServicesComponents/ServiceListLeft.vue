<template>
  <div class="row d-flex align-items-center">
    <div class="col-md-6 col-12">
      <h1>{{ title }}</h1>
      <p class="mt-5">
        {{ description }}
      </p>
    </div>
    <div class="col-md-6 image col-sm-12 d-sm-block d-none">
      <img :src="src" :width="400" />
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
  text-align: end;
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
</style>
