<template>
  <div class="ag-page">
    <div class="ag-side"><SlidePanel></SlidePanel></div>
    <div class="ag-main">
      <div class="ag-content">
        <transition name="fade">
          <Content />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import SlidePanel from "@theme/components/SlidePanel"
export default {
  name: "AgPage",
  components: {
    SlidePanel,
  },
  data() {
    return {}
  },
  mounted() {},
}
</script>
<style lang='stylus' scoped>
$sideWitdh = 256px
.ag-page
  width: 100%
  height: 100%
  // display: grid
  // // padding: 0 16px
  // grid-template-columns: 224px auto
  // grid-column-start: 2
  // grid-column-end: 4
.ag-side
  border-right: 1px solid var(--bg-border-color)
  height: 100%
  width: $sideWitdh
  position: fixed
  // top: 62px
.ag-main
  margin-left: $sideWitdh
.ag-content
  padding: 16px
  width: 80%
  margin: 0 auto
</style>