<template>
  <div class="ag-home" ref="logo">
    <h1>{{ options.title }}</h1>
    <h4>{{ options.subtitle }}</h4>

    <!-- <Content /> -->
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  data() {
    return {
      nav: [],
      newPos: {},
      oldPos: {},
    }
  },
  created() {
    console.log(this.$site)
    // this.options = this.$frontmatter
    this.options = this.$site
  },
  mounted() {
    const { top, left } = this.$refs.logo.getBoundingClientRect()
    this.oldPos = { top, left }
  },
  methods: {
    handleAnimate() {
      const { newPos, oldPos } = this
      const keyframes = [
        {
          transform: `translate(${oldPos.left - newPos.left}px,${
            oldPos.top - newPos.top
          }px)`,
          filter: "blur(10px)",
        },
        {
          transform: `translate(0,0)`,
          filter: "blur(0px)",
        },
      ]
      const { logo } = this.$refs
      logo.animate(keyframes, {
        duration: 700,
        fill: "forwards",
        easing: "ease",
      })
    },
  },
  watch: {
    "$frontmatter.home": function () {
      const { top, left } = this.$refs.logo.getBoundingClientRect()

      if (Object.keys(this.newPos).length <= 0) {
        this.newPos = { top, left }
      } else {
        ;[this.newPos, this.oldPos] = [this.oldPos, this.newPos]
      }
      this.handleAnimate()
    },
  },
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
