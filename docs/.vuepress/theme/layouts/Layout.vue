<template>
  <div class="ag-container">
    <div class="ag-header"></div>
    <div class="ag-body"><Content /></div>
    <div cclass="ag-footer-warp">
      <GlobalFooter />
    </div>
  </div>
</template>

<script>
import GlobalFooter from "../global-components/GlobalFooter";
export default {
  name: "layout",
  components: {
    GlobalFooter,
  },
  data() {
    return {};
  },
  mounted() {
    console.log(this.$page);
  },
};
</script>
<style lang="css"  scoped>
.ag-container {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
}
</style>