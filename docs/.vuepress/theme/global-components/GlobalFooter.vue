<template>
  <div class="ag-footer">
    <div class="">余 年</div>
    <div class="supporting">-</div>
    <div class="supporting">距离{{ newYear }}年还剩下 {{ date }} 天</div>
  </div>
</template>

<script>
import dayjs from "dayjs"
var duration = require("dayjs/plugin/duration")
dayjs.extend(duration)
export default {
  name: "GlobalFooter",
  data() {
    this.newYear = dayjs().year() + 1
    this.futureDate = dayjs(`${this.newYear}-01-01`)
    return {
      date: "",
    }
  },
  mounted() {
    this.date = this.futureDate.diff(dayjs(), "day")
  },
}
</script>
<style lang="stylus" scoped>
.ag-footer
  display: grid
  grid-template-rows: auto auto auto
  place-items: center
  padding: 16px 0 32px 0
  font-size: 14px
  color: var(--main-color)
  line-height: 1
  .supporting
    opacity: 0.32
</style>
