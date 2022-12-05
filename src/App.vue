<template>
  <div>
    <!-- sezioni  -->
    <headerPage/>
    <centralPage/>
    <footerPage/>
  </div>
</template>

<script>
// importazione pagine
import headerPage from "@/components/headerPage.vue";
import centralPage from "@/components/centralPage.vue";
import footerPage from "@/components/footerPage.vue";

export default {
  name: "App",
  components: {
    headerPage,
    centralPage,
    footerPage,
  },
};
</script>

<style lang="scss">
// font
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
body {
  font-family: "Roboto", sans-serif;
  margin: 0;
  border: 0;
  box-sizing: border-box;
}
// bootstrap
@import "~bootstrap/scss/bootstrap";


</style>
