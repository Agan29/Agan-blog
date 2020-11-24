<template>
  <div class="ag-container" :class="{ 'is-page': !isHome }">
    <AgHeader ref="agHeader" />
    <div class="ag-body">
      <Home ref="home" />
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

import { handleWatch } from "./_utils"
export default {
  name: "layout",
  components: {
    GlobalFooter,
    AgHeader,
    Home,
  },
  data() {
    return {
      handleAnimate: true,
    }
  },
  computed: {
    isHome() {
      return this.$frontmatter.home
    },
  },
  created() {
    this.options = this.$frontmatter
  },
  // updated 后才能计算dom
  updated() {
    this.$nextTick(function () {
      if (this.handleAnimate) {
        handleWatch({ component: this.$refs.home })
        handleWatch({ component: this.$refs.agHeader })
        // 动画执行完成修改值
        this.handleAnimate = false
      }
      // Code that will run only after the
      // entire view has been re-rendered
    })
  },
  mounted() {
    // console.log(this.$page)
    // console.log(this.$site.themeConfig)
  },
  methods: {},

  watch: {
    // 监听是不是跳转或者从 home 页面跳转过来
    "$frontmatter.home": function (newV, oldV) {
      // undefined === undefined 的时候表示不是来自 home 或者跳转到 home
      if (newV === oldV) {
        this.handleAnimate = false
      } else {
        this.handleAnimate = true
      }
    },
  },
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
