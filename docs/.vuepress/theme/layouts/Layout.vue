<template>
  <div class="ag-container" :class="{ 'ag-home': isHome }">
    <div class="ag-header">
      <nav v-if="isHome" class="ag-nav">
        <AgRouteLink v-for="n in nav" :to="n.link">{{ n.text }}</AgRouteLink>
      </nav>
      <ThemeMode class="theme-mode" />
    </div>
    <div class="ag-body">
      <template v-if="isHome">
        <h1>{{ options.title }}</h1>
        <h4>{{ options.subtitle }}</h4>
      </template>
      <template v-esle>
        <Content />
      </template>
    </div>
    <div cclass="ag-footer-warp">
      <GlobalFooter />
    </div>
  </div>
</template>

<script>
import ThemeMode from "../components/themeMode"
import GlobalFooter from "../global-components/GlobalFooter"
import AgRouteLink from "../global-components/AgRouteLink"
export default {
  name: "layout",
  components: {
    GlobalFooter,
    AgRouteLink,
    ThemeMode,
  },
  data() {
    return {
      isHome: false,
      nav: [],
    }
  },
  created() {
    if (this.$page.path === "/") {
      this.isHome = true
      this.options = this.$frontmatter
    }
  },
  mounted() {
    console.log(this.$page)
    console.log(this.$site.themeConfig)
    this.$nextTick(() => {
      this.nav = this.$site.themeConfig.nav.filter((nav) => nav.link !== "/")
    })
  },
}
</script>
<style lang="stylus" scoped>
.ag-container
  min-height: 100vh
  display: grid
  grid-template-rows: auto 1fr auto
.ag-home
  place-items: center
  .ag-header
    display: flex
    padding: 6vh 0 2vh 0
  h1
    font-family: TrebuchetMS
    font-size: 24px
    color: $mainColor
    letter-spacing: 8px
    text-align: center
  h4
    opacity: 0.3
    font-size: 14px
    color: $mainColor
    letter-spacing: 2px
    text-align: center
    margin-bottom: 16vh
    font-weight: normal
.ag-nav
  a
    font-size: 14px
    color: $mainColor
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
  position: absolute
  right: 3vw
  top: 6vh
</style>
