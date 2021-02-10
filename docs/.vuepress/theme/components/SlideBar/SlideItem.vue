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

        >{{ value.title }}
                <!-- v-if="!(value.frontmatter.article === false)" -->
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
      type: Object
    },
    isOpen: {
      type: Boolean,
      defalut: false
    }
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
    }
  }
}
</script>
<style lang="stylus" src="./slide-item.styl" scoped></style>
