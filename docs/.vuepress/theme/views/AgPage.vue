<template>
  <div class="ag-page">
    <SlidePanel class="ag-side" :sidebarItems="sidebarItems" />
    <div class="ag-main">
      <div class="ag-content">
        <transition name="fade">
          <Content />
        </transition>

        <div class=""></div>
      </div>
    </div>
  </div>
</template>

<script>
import SlidePanel from "@theme/components/SlideBar"
import { resolveSidebarItems, resolveNavLinkItem } from "@theme/utils"
export default {
  name: "AgPage",
  components: {
    SlidePanel,
  },
  computed: {
    sidebarItems() {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      )
    },
    userNav() {
      return this.$themeLocaleConfig.nav || this.$site.themeConfig.nav || []
    },
    nav() {
      const { locales } = this.$site
      if (locales && Object.keys(locales).length > 1) {
        const currentLink = this.$page.path
        const routes = this.$router.options.routes
        const themeLocales = this.$site.themeConfig.locales || {}
        const languageDropdown = {
          text: this.$themeLocaleConfig.selectText || "Languages",
          ariaLabel: this.$themeLocaleConfig.ariaLabel || "Select language",
          items: Object.keys(locales).map((path) => {
            const locale = locales[path]
            const text =
              (themeLocales[path] && themeLocales[path].label) || locale.lang
            let link
            // Stay on the current page
            if (locale.lang === this.$lang) {
              link = currentLink
            } else {
              // Try to stay on the same page
              link = currentLink.replace(this.$localeConfig.path, path)
              // fallback to homepage
              if (!routes.some((route) => route.path === link)) {
                link = path
              }
            }
            return { text, link }
          }),
        }
        return [...this.userNav, languageDropdown]
      }
      return this.userNav
    },
    userLinks() {
      return (this.nav || []).map((link) => {
        return Object.assign(resolveNavLinkItem(link), {
          items: (link.items || []).map(resolveNavLinkItem),
        })
      })
    },
  },
  data() {
    return {}
  },
  mounted() {
    console.log(this.$page)
  },
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
  border-right: 1px solid rgba(0, 0, 0, 4%)
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