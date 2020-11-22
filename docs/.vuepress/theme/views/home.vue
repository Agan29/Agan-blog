<template>
  <div class="ag-home">
    <h1>{{ options.title }}</h1>
    <h4>{{ options.subtitle }}</h4>

    <Content />
  </div>
</template>

<script>
export default {
  name: "layout",
  components: {},
  data() {
    return {
      nav: [],
    }
  },
  created() {
    this.options = this.$frontmatter
  },
  mounted() {},
  methods: {},
}
</script>
<style lang="stylus" scoped>
.ag-home
  place-items: center
  .ag-header
    display: flex
    padding: 6vh 0 2vh 0
  h1
    font-family: TrebuchetMS
    font-size: 24px
    color: var(--main-color)
    letter-spacing: 8px
    text-align: center
  h4
    opacity: 0.3
    font-size: 14px
    color: var(--main-color)
    letter-spacing: 2px
    text-align: center
    margin-bottom: 16vh
    font-weight: normal
</style>
