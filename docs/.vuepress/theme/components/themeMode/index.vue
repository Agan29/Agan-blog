<template>
  <div class="ag-toggle-mode">
    <div class="current-mode" @click="toggleSelect">
      {{ modeMap[currentMode] }}
    </div>
    <ul class="select-mode" v-show="showSelect">
      <li
        v-for="mode in modeOptions"
        :key="mode.mode"
        :class="[{ 'is-active': mode.mode === currentMode }, mode.mode]"
        @click="toggleMode(mode.mode)"
      >
        {{ mode.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import applyMode from "./applyMode"
export default {
  name: "toggleMode",
  data() {
    this.modeOptions = [
      { mode: "light", title: "浅色" },
      { mode: "dark", title: "暗色" },
      { mode: "auto", title: "自动" },
    ]
    this.modeMap = {
      light: "浅色",
      dark: "暗色",
      auto: "自动",
    }
    return {
      currentMode: "auto",

      showSelect: false,
    }
  },
  mounted() {
    // modePicker 开启时默认使用用户主动设置的模式
    this.currentMode =
      localStorage.getItem("mode") || this.$themeConfig.mode || "auto"

    // Dark and Light autoswitches
    // 为了避免在 server-side 被执行，故在 Vue 组件中设置监听器
    window.matchMedia("(prefers-color-scheme: dark)").addListener(() => {
      this.currentMode === "auto" && applyMode(this.currentMode)
    })
    window.matchMedia("(prefers-color-scheme: light)").addListener(() => {
      this.currentMode === "auto" && applyMode(this.currentMode)
    })
    applyMode(this.currentMode)
  },
  methods: {
    toggleMode(mode) {
      if (mode !== this.currentMode) {
        this.currentMode = mode
        applyMode(mode)
        localStorage.setItem("mode", mode)
      }
      this.toggleSelect()
    },
    toggleSelect() {
      this.showSelect = !this.showSelect
    },
  },
}
</script>
<style lang="stylus" scoped>
.ag-toggle-mode
  position: relative
  .current-mode
    padding: 0 4px
    cursor: pointer
    color: $mianColor
    opacity: 0.5
    transition: 0.3s all ease
    font-size: 14px
    &:hover
      background: #ece2d4
    &:active
      opacity: 0.8
  .select-mode
    display: block
    position: absolute
    padding: 6px 8px
    width: 100px
    text-align: center
    left: 50%
    transform: translateX(-50%)
    li
      opacity: 0.5
      padding: 4px 0
      cursor: pointer
      font-size: 14px
</style>
