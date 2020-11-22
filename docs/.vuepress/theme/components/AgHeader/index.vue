<template>
  <div class="ag-header">
    <nav class="ag-nav" ref="agnav">
      <AgRouteLink v-for="n in computedNav" :to="n.link">
        {{ n.text }}
      </AgRouteLink>
    </nav>
    <ThemeMode class="theme-mode" />
  </div>
</template>

<script>
import ThemeMode from "@theme/components/themeMode"
import AgRouteLink from "@theme/global-components/AgRouteLink"
export default {
  name: "AgHeader",
  components: {
    AgRouteLink,
    ThemeMode,
  },
  computed: {
    computedNav() {
      const { nav } = this.$site.themeConfig
      return this.$frontmatter.home
        ? nav.filter((nav) => nav.link !== "/")
        : nav
    },
  },
  data() {
    return {
      newPos: {},
      oldPos: {},
    }
  },
  mounted() {
    const { top, left } = this.$refs.agnav.getBoundingClientRect()
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
          filter: "blur(3px)",
        },
        {
          transform: `translate(0,0)`,
          filter: "blur(0px)",
        },
      ]
      const { agnav } = this.$refs
      agnav.animate(keyframes, {
        duration: 700,
        fill: "forwards",
        easing: "ease",
      })
    },
  },
  watch: {
    "$frontmatter.home": function () {
      const { top, left } = this.$refs.agnav.getBoundingClientRect()

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
<style lang='stylus' scoped>
.ag-header
  display: flex
  padding: 6vh 0 2vh 0
  place-items: center
  justify-self: end
  display: grid
  grid-template-columns: 60px auto 60px
  width: 100%
.ag-nav
  // width: 100%
  grid-column-start: 2
  justify-self: center
  // text-align: right
  a
    font-size: 14px
    color: var(--main-color)
    letter-spacing: 0
    text-align: center
    text-decoration: none
    padding: 0 8px
    margin: 0 16px
    opacity: 0.5
    transition: all 0.3s ease
    &:hover
      opacity: 1
.theme-mode
  // position: absolute
  // right: 3vw
  // top: 6vh
</style>