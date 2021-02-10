<template>
  <div class="ag-container" :class="{ 'is-page': !isHome }">
    <AgHeader ref="agHeader" />
    <div class="ag-body">
      <Slogn ref="slogn" />
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

import Slogn from "@theme/components/Slogn"
import AgPage from "@theme/views/AgPage"

import { handleWatch } from "./_utils"
export default {
  name: "layout",
  components: {
    GlobalFooter,
    AgHeader,
    Slogn,
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
          handleWatch({ component: this.$refs.slogn })
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
        this.$refs.slogn.delay = 0
      } else {
        this.$refs.slogn.delay = 50
      }
    },
  },
}
</script>
<style lang="stylus" src="./layout.styl" scoped></style>
