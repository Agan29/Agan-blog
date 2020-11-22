<template>
  <div class="ag-container" :class="{ 'is-page': !isHome }">
    <AgHeader />
    <div class="ag-body">
      <Home />
    </div>
    <div cclass="ag-footer-warp">
      <GlobalFooter />
    </div>
  </div>
</template>

<script>
import GlobalFooter from "@theme/global-components/GlobalFooter"
import AgHeader from "@theme/components/AgHeader"

import Home from "@theme/views/home"

export default {
  name: "layout",
  components: {
    GlobalFooter,
    AgHeader,
    Home,
  },
  data() {
    return {}
  },
  computed: {
    isHome() {
      return this.$frontmatter.home
    },
  },
  created() {
    this.options = this.$frontmatter
  },
  mounted() {
    console.log(this.$page)
    console.log(this.$site.themeConfig)
  },
  methods: {},
}
</script>
<style lang="stylus" scoped>
.ag-container
  min-height: 100vh
  display: grid
  grid-template-rows: auto 1fr auto
  place-items: center
.ag-header
  transition: all 0.3s 0.1s ease
.is-page
  .ag-header
    padding-top: 24px
  >>> .ag-nav
    justify-self: end
  .ag-home
    position: absolute
    left: 24px
    top: 12px
    >>> h1
      font-size: 18px
</style>
