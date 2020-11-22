<template>
  <div class="ag-home" ref="logo">
    <h1>{{ options.title }}</h1>
    <h4>{{ options.subtitle }}</h4>

    <!-- <Content /> -->
  </div>
</template>

<script>
import { handleAnimate } from "@theme/components/mixins"

export default {
  name: "home",
  components: {},
  mixins: [handleAnimate],
  data() {
    return {
      nav: [],
      animateRef: null,
      animateOpt: {
        blur: 10,
        duration: 700,
      },
    }
  },
  created() {
    console.log(this.$site)
    // this.options = this.$frontmatter
    this.options = this.$site
  },
  mounted() {
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
  .ag-header
    display: flex
    padding: 6vh 0 2vh 0
  h1
    font-family: TrebuchetMS
    font-size: 24px
    color: var(--main-color)
    letter-spacing: 8px
    text-align: center
  h4
    opacity: 0.3
    font-size: 14px
    color: var(--main-color)
    letter-spacing: 2px
    text-align: center
    margin-bottom: 16vh
    font-weight: normal
</style>
