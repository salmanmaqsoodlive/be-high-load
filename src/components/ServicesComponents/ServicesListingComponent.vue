<template>
  <section>
    <div class="container">
      <span class="anchor" id="test"></span>
      <p class="services-paragraph">Services list</p>
      <h1 class="services-heading">Explore what we offer</h1>
      <ServiceListLeft
        class="margin-t"
        title="Web App Development"
        description="Web app development services help design, build, and evolve web-based software."
        :src="WebAppImage"
      />
      <ServiceListRight
        class="margin-t-1"
        title="Mobile App Development"
        description="Mobile app development services help design, build, and evolve mobile-based solutions."
        :src="MobileImage"
      />
      <ServiceListLeft
        class="margin-t-1"
        title="Consultancy"
        description="We provide personalized consulting services using our expertise and industry best practices to help our customers find the most profitable and efficient solution."
        :src="ConsultImage"
      />
    </div>
  </section>
</template>

<script>
import WebAppImage from "@/assets/web-dev-service.svg";
import ConsultImage from "@/assets/consult.svg";
import MobileImage from "@/assets/mobile-dev.svg";
import ServiceListRight from "@/components/ServicesComponents/ServiceListRight.vue";
import ServiceListLeft from "@/components/ServicesComponents/ServiceListLeft.vue";
export default {
  components: {
    ServiceListLeft,
    ServiceListRight,
  },
  data() {
    return { WebAppImage, ConsultImage, MobileImage };
  },
};
</script>

<style scoped>
.margin-t {
  margin-top: 120px;
}
.margin-t-1 {
  margin-top: 250px;
}

.anchor {
  display: block !important;
  height: 92px;
  margin-top: -92px !important;
  visibility: hidden !important;
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
