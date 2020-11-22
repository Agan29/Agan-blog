<template>
  <div class="ag-container" :class="{ 'is-home': isHome }">
    <AgHeader />
    <div class="ag-body">
      <Home v-if="$frontmatter.home" />
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
</style>
