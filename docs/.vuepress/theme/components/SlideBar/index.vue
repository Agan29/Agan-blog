<template>
  <div class="ag-slide-panel">
    <template v-for="(slide, index) in sidebarItems">
      <div class="slide-item">
        <SlideItem
          :value="slide"
          :key="slide.title"
          :isOpen="index === 0"
        ></SlideItem>
      </div>
    </template>
  </div>
</template>

<script>
import SlideItem from "./SlideItem"

export default {
  name: "AgSlidePanel",
  components: {
    SlideItem,
  },
  props: ["sidebarItems"],
  data() {
    return {}
  },
  mounted() {
    console.log(this.sidebarItems)
  },
}
</script>
<style lang='stylus' scoped>
.ag-slide-panel
  padding: 16px 0
  overflow-y: auto
.slide-item
  padding: 8px 16px
  background-color: var(--bg-color)
  overflow: hidden
</style>