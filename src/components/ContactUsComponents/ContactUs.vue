<template>
  <div class="container margin-t">
    <p class="paragraph">Get in touch</p>
    <h1 class="heading margin-b">Contact us</h1>
    <div class="row justify-content-between align-items-center">
      <div class="col-sm-4 col-12 padding-r">
        <b-form-input
          id="input-small"
          placeholder="Name"
          type="text"
        ></b-form-input>
        <b-form-input
          id="input-small"
          placeholder="Email"
          type="email"
        ></b-form-input>

        <textarea
          placeholder="Message"
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="4"
        ></textarea>
        <button class="contact-us-btn shadow">Contact Us</button>
      </div>

      <div class="col-sm-6 col-12 back-card">
        <div class="map-card"></div>
        <div class="contact-details">
          <p class="contact-heading">Email</p>
          <p class="contact-paragraph mb-5">info@behighload.com</p>
          <p class="contact-heading mt-5">Phone</p>
          <p class="contact-paragraph">
            Adama Branickiego<br />
            21 / U3, 02-972<br />
            Warsaw <br />Poland
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-paragraph {
  font-family: "Nunito";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 163.15%;
  /* or 29px */

  display: flex;
  align-items: center;
  letter-spacing: 0.02em;

  /* White */

  color: #fafafa;
}
.contact-heading {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: 0.03em;
  text-transform: uppercase;

  /* White */

  color: #fafafa;
}
.contact-us-btn {
  margin-top: 60px;
  background: #f48a17;
  border-radius: 35px;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 163.15%;
  letter-spacing: 0.05em;
  text-transform: capitalize;
  color: #fafafa;
  border: none;
  padding: 11px 28px;
}
.contact-details {
  position: relative;
  display: inline-block;
  left: 350px !important;
  top: -385px;
  z-index: 9999;
}
.map-card {
  position: relative;
  border-radius: 8px !important;
  height: 400px;
  width: 400px;
  margin: 50px 0;
  right: 129px;
  box-shadow: 0px 14px 35px rgba(122, 122, 122, 0.25);
  background-image: url("@/assets/map.png");
}
.back-card {
  position: absolute;
  right: 0;
  z-index: -99999;
  background: #55a2a1;
  /* padding: 60px 0; */
  height: 500px;
  box-shadow: 0px 14px 35px rgba(122, 122, 122, 0.25);
  border-radius: 8px 0px 0px 8px;
}
.form-control {
  padding: 0;
  padding-bottom: 10px;
  border: none;
  border-bottom: 1px solid rgba(28, 62, 95, 0.5);
  transform: rotate(0.16deg);
  border-radius: 0;
  margin-bottom: 35px;
}
.form-control:focus {
  border-color: #f48a17;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(244, 137, 23, 0.393);
}
.margin-b {
  margin-bottom: 250px;
}
.margin-t {
  margin-top: 220px !important;
}
.paragraph {
  font-family: "Nunito";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 163.15%;
  letter-spacing: 0.02em;
  color: #f48a17;
  text-align: center;
}
.heading {
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
