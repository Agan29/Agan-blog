<template>
  <div class="ag-footer">
    <div class="">余</div>
    <div class="supporting">-</div>
    <div class="supporting">{{ date }}</div>
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  name: "GlobalFooter",
  data() {
    return {
      date: "",
    };
  },
  mounted() {
    this.date = dayjs().format("YYYY年MM月");
  },
};
</script>
<style lang="styl"  scoped>
.ag-footer {
  display: grid;
  grid-template-rows: auto auto auto;
  place-items: center;
  padding: 16px 0 32px 0;
  font-size: 14px;
  color: $mainColor;
  .supporting {
    opacity: 0.32;
  }
}
</style>