<template>
  <div class="">
    <template v-if="value.children">
      <div class="slide-title" @click="handleClick">{{ value.title }}</div>
      <transition name="fade">
        <ul class="slide-menus" v-show="isShowItems">
          <li v-for="children in value.children">
            <SlideItem :value="children"></SlideItem>
          </li>
        </ul>
      </transition>
    </template>
    <template v-else>
      <div class="slide-link">
        <router-link :to="value.path">{{ value.title }}</router-link>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  name: "SlideItem",
  components: {},
  props: {
    value: {
      type: Object,
    },
  },
  data() {
    return { isShowItems: false }
  },
  mounted() {},
  methods: {
    handleClick() {
      this.isShowItems = !this.isShowItems
    },
  },
}
</script>
<style lang='stylus' scoped>
.slide-title
  font-size: $font-size-lg
  cursor: pointer
  padding: 2px 0 2px 12px
  position: relative
  font-weight: bold
  &:before, &:after
    content: ''
    display: block
    opacity: 0.5
    border-radius: 50%
    position: absolute
    left: 0
    top: 0%
    bottom: 0
    margin: auto
  &:before
    width: 10px
    height: 10px
    border: 2px solid var(--main-color)
.slide-menus
  padding: 8px 0 8px 24px
  .slide-menu-item
    opacity: 0.7
</style>