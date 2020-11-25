<template>
  <div class="no-page">
    <p>404</p>

    <AgButton><router-link to="/"> 返回首页</router-link></AgButton>
  </div>
</template>

<script>
import AgButton from "@theme/components/AgButton"
export default {
  name: "NotFound",
  components: {
    AgButton,
  },
  data() {
    return {}
  },
  mounted() {},
}
</script>
<style lang="stylus">
.no-page
  font-size: 56px
  text-align: center
  padding: 30vh
</style>