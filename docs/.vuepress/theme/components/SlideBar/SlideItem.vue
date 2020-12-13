<template>
  <div :class="value.children ? 'slide-group' : 'slide-link'">
    <template v-if="value.children">
      <div
        :class="['slide-title', isOpened && 'is-opened']"
        @click="handleClick"
      >
        {{ value.title }}
      </div>
      <DropdownTransition>
        <ul class="slide-menus" v-show="isOpened">
          <li v-for="children in value.children" class="slide-menu">
            <SlideItem :value="children"></SlideItem>
          </li>
        </ul>
      </DropdownTransition>
    </template>
    <template v-else>
      <router-link
        :to="value.path"
        v-if="!(value.frontmatter.article === false)"
        >{{ value.title }}
      </router-link>
    </template>
  </div>
</template>
<script>
import DropdownTransition from "@theme/components/DropdownTransition"
export default {
  name: "SlideItem",
  components: { DropdownTransition },
  props: {
    value: {
      type: Object,
    },
    isOpen: {
      type: Boolean,
      defalut: false,
    },
  },
  data() {
    return { isOpened: false }
  },
  mounted() {
    this.isOpened = this.isOpen
  },
  methods: {
    handleClick() {
      this.isOpened = !this.isOpened
    },
  },
}
</script>
<style lang='stylus' scoped>
.slide-title
  font-size: $font-size-md
  cursor: pointer
  padding: 2px 0 2px 12px
  position: relative
  font-weight: bold
  display: flex
  align-items: center
  opacity: 1
  &.is-opened
    &:after
      transform: rotate(90deg)
  &:before, &:after
    content: ''
    display: block
    opacity: 0.3
  &:after
    right: 0
    width: 0px
    height: 0px
    border-left: 6px solid var(--main-color)
    border-top: 4px solid transparent
    border-bottom: 4px solid transparent
    // transform-origin: 25% 25%
    margin-left: 12px
    transition: all 0.3s ease
.slide-menus
  padding: 8px 0 8px 24px
  transition: height 0.3s ease
  // overflow: hidden
  .slide-menu-item
    opacity: 1
.slide-link a, .slide-menu .slide-title
  font-size: $font-size-sm
  font-weight: normal
  line-height: 2
  opacity: 0.7
  transition: all 0.3s ease
  padding: 4px 0
  background-color: rgba(255, 255, 255, 0%)
  &:hover
    // color: #0931ff
    opacity: 1
.slide-link a, .slide-menu .slide-group
  display: block
  margin-left: -40px
  margin-right: -16px
  padding-left: 40px
  padding-right: 16px
.slide-menu .slide-group a
  margin-left: -64px
  padding-left: 64px
.slide-link a
  position: relative
  &:after
    content: ''
    width: 2px
    height: 100%
    position: absolute
    display: block
    background-color: var(--main-color)
    right: 0
    top: 0
    opacity: 0
.slide-link a.router-link-active
  opacity: 1
  background-color: #eee
  &:after
    opacity: 1
</style>