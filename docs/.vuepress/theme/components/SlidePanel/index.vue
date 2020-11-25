<template>
  <div class="ag-slide-panel">
    <template v-for="slide in slides">
      <div class="slide-item">
        <SlideItem :value="slide" :key="slide.title"></SlideItem>
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
  data() {
    return {
      slides: [
        {
          title: "这是标题",
          children: [
            {
              title: "这是二级标题",
              path: "/fron-end/",
            },
          ],
        },
        { title: "这是第二个标题", path: "/design/" },
      ],
    }
  },
  mounted() {},
}
</script>
<style lang='stylus' scoped>
.ag-slide-panel
  padding: 16px
.slide-item
  padding: 8px 0 8px 0
</style>