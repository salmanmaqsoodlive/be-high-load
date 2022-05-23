<template>
  <div class="career-card">
    <div class="row padding">
      <div class="col-10">
        <p class="title">{{ title }}</p>
        <div class="row mt-5">
          <p class="col-5 salary">{{ salary }}</p>
          <p class="col-6 job-type">{{ jobType }}</p>
        </div>
      </div>
      <div class="col-2 d-flex align-items-center justify-content-center">
        <img src="@/assets/arrow_forward_ios_24px.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "salary", "jobType"],
};
</script>

<style>
.job-type {
  /* Paragraph */

  font-family: "Nunito";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 163.15%;
  /* identical to box height, or 33px */

  display: flex;
  align-items: flex-end;
  letter-spacing: 0.02em;

  /* Blue */

  color: rgba(28, 62, 95, 0.95);
}
.padding {
  padding: 62px 30px !important;
}
.career-card {
  /* White */
  background: #fafafa;
  /* Shadow */
  box-shadow: 0px 14px 35px rgba(43, 64, 54, 0.15);
  border-radius: 8px;
}
.title {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 37px;
  letter-spacing: 0.03em;
  color: rgba(28, 62, 95, 0.95);
}

.salary {
  font-family: "Nunito";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 163.15%;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #55a2a1;
}
</style>
