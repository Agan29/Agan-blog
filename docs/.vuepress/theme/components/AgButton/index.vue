<template>
  <div class="ag-button">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "AgButton",
  data() {
    return {}
  },
  mounted() {},
}
</script>
<style lang='stylus' scoped>
.ag-button
  background-color: var(--bg-border-color)
  font-size: $font-size-sm
  display: inline-block
  width: 120px
  padding: 12px
  border-radius: 8px
  transition: all 0.3s ease
  &:active
    opacity: 0.7
  &:hover
    box-shadow: 0 3px 4px var(--box-shadow)
</style>