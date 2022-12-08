<template>
  <div class="font">
    <!-- sezioni  -->
    <headerPage :arr-menu="arrMenu"/>
    <centralPage/>
    <footerPage :arr-menu="arrMenu"/>
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
  data(){
    return {
      arrMenu: ['HOME', 'SHOP', 'ABOUT', 'GALLERY', 'LOCATION', 'JURNAL', 'CONTACT', 'MY ACCOUNT'],
    }
  }
  
};
</script>

<style lang="scss">
// font
body {
  margin: 0;
  border: 0;
  box-sizing: border-box;
}

.font {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
// bootstrap
@import "~bootstrap/scss/bootstrap";


</style>
