<template>
  <section>
    <Showcase />
    <!-- <Projects />h -->
  </section>
</template>

<script>
// @ is an alias to /src
import Showcase from "@/components/Showcase.vue";
import Projects from "@/views/Projects.vue";

export default {
  name: "HomeView",
  components: {
    Showcase,
    Projects,
  },
};
</script>
