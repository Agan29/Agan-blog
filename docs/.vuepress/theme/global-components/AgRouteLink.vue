<script>
export default {
  functional: true,
  name: "AgRouteLink",
  props: {
    to: {
      type: String
    }
  },
  render(h, ctx) {
    const { to } = ctx.props
    const isURL = /^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/
    return isURL.test(to) ? (
      <a href={to} target="_blank">
        {ctx.children}
      </a>
    ) : (
      <router-link to={to}>{ctx.children}</router-link>
    )
  }
}
</script>
