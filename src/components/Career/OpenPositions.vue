<template>
  <div class="container margin-t">
    <div class="row">
      <div class="col-sm-6 col-12 margin-b">
        <CareerCard
          title="Mid React developer"
          salary="salary"
          jobType="Remote/Hybrid"
        />
      </div>
      <div class="col-sm-6 col-12 margin-b">
        <CareerCard
          title="PHP developer"
          salary="salary"
          jobType="Remote/Hybrid"
        />
      </div>
      <div class="col-sm-6 col-12">
        <CareerCard
          title="Mid React developer"
          salary="salary"
          jobType="Remote/Hybrid"
        />
      </div>
      <div class="col-sm-6 col-12">
        <CareerCard
          title="PHP developer"
          salary="salary"
          jobType="Remote/Hybrid"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CareerCard from "@/components/Career/CareerCard.vue";
export default {
  components: {
    CareerCard,
  },
};
</script>

<style scoped>
.margin-t {
  margin-top: 330px;
}
.margin-b {
  margin-bottom: 70px;
}
</style>
