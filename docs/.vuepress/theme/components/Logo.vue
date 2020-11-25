<template>
  <div class="ag-home" ref="logo">
    <h1>{{ title }}</h1>
    <h4>{{ des }}</h4>

    <!-- <Content /> -->
  </div>
</template>

<script>
import { handleAnimate } from "@theme/components/mixins"
import { random } from "lodash"
export default {
  name: "logo",
  components: {},
  mixins: [handleAnimate],
  data() {
    return {
      nav: [],
      des: "",
      title: "",
      animateRef: null,
      animateOpt: Object.freeze({
        blur: 10,
        duration: 700,
      }),
    }
  },

  created() {
    console.log(this.$site)
    // this.options = this.$frontmatter
  },
  mounted() {
    this.title = this.$site.title
    this.des = this.$site.description[
      random(0, this.$site.description.length - 1)
    ]

    // 需要执行动画的dom
    this.animateRef = this.$refs.logo
  },
  methods: {},
  watch: {},
}
</script>
<style lang="stylus" scoped>
.ag-home
  place-items: center
  transform: translateX(0)
  will-change: transform, filter
  .ag-header
    display: flex
    padding: 6vh 0 2vh 0
  h1
    font-family: TrebuchetMS
    font-size: 24px
    color: var(--main-color)
    letter-spacing: 8px
    text-align: center
    transition: all 0.3s ease
  h4
    opacity: 0.3
    font-size: 14px
    color: var(--main-color)
    letter-spacing: 2px
    text-align: center
    margin-bottom: 16vh
    font-weight: normal
    transition: all 0.3s ease
</style>
