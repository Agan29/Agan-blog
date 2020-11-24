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
import { handleAnimate } from "@theme/components/mixins"
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
  mixins: [handleAnimate],
  data() {
    this.animateRef = null
    this.animateOpt = {
      blur: 3,
      duration: 600,
    }
    return {
      // animate mixin 需要 ref 以及animate配置
    }
  },
  mounted() {
    this.animateRef = this.$refs.agnav
  },
  methods: {},
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