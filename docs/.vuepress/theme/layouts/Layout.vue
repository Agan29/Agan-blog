<template>
  <div class="ag-container" :class="{ 'is-page': !isHome }">
    <AgHeader ref="agHeader" />
    <div class="ag-body">
      <Home ref="home" />
      <transition name="fade" mode="in-out">
        <AgPage v-if="$route.path !== '/'"></AgPage>
      </transition>
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
import AgPage from "@theme/views/AgPage"

import { handleWatch } from "./_utils"
export default {
  name: "layout",
  components: {
    GlobalFooter,
    AgHeader,
    Home,
    AgPage,
  },
  data() {
    return {
      handleAnimate: true,
      delay: 0,
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
        // this.$refs.home.delay = 50
        setTimeout(() => {
          handleWatch({ component: this.$refs.home })
          handleWatch({ component: this.$refs.agHeader })
          // 动画执行完成修改值
          this.handleAnimate = false
        }, 1)
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
      // console.log(newV)
      // // undefined === undefined 的时候表示不是来自 home 或者跳转到 home
      if (newV === oldV) {
        this.handleAnimate = false
      } else {
        this.handleAnimate = true
      }
      if (newV) {
        this.$refs.home.delay = 0
      } else {
        this.$refs.home.delay = 50
      }
    },
  },
}
</script>
<style lang="stylus" scoped>
.ag-container
  min-height: 100vh
  // display: grid
  // grid-template-rows: auto 1fr auto
  // place-items: center
  // transition: all 0.3s 0.1s ease
.ag-header
  transition: padding-top 0.3s 0.1s ease
.ag-body
  height: calc(100vh - 200px)
  width: 100%
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
.is-page
  padding-top: 64px
  .ag-body
    height: 100vh
    width: 100%
  .ag-header
    position: fixed
    padding-top: 24px
    top: 0
    background-color: var(--bg-color)
    border-bottom: 1px solid var(--bg-border-color)
  >>> .ag-nav
    justify-self: end
  .ag-home
    position: fixed
    left: 24px
    top: 12px
    margin-bottom: 0
    >>> h1
      font-size: 18px
      text-align: left
      margin-bottom: 0
      margin-top: 4px
      letter-spacing: 3px
      transition: font-size 0.3s 0.45s ease
    >>> h4
      margin-bottom: 0
      margin-left: -2px
      margin-top: 2px
      font-size: 12px
      letter-spacing: 0px
      transition: font-size 0.3s 0.45s ease
</style>
