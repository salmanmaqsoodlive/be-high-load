<template>
  <section class="service-container">
    <div class="container">
      <p class="services-paragraph">Services list</p>
      <h1 class="services-heading">Explore what we offer</h1>
      <ServiceList class="margin-t" />
    </div>
  </section>
</template>

<script>
import ServiceList from "@/components/ServicesComponents/ServiceList.vue";
export default {
  components: {
    ServiceList,
  },
};
</script>

<style scoped>
.margin-t {
  margin-top: 120px;
}
.service-container {
  position: relative !important;
  top: 750px;
}
.services-paragraph {
  font-family: "Nunito";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 163.15%;
  letter-spacing: 0.02em;
  color: #f48a17;
  text-align: center;
}
.services-heading {
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
