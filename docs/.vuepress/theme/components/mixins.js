export const handleAnimate = {
  data() {
    return {
      newPos: {},
      oldPos: {},
      animateOpt: {
        blur: 3,
        duration: 600
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (!this.animateRef) throw new Error("Animation Element Ref is required")
      const { top, left } = this.animateRef.getBoundingClientRect()
      this.oldPos = { top, left }
    })
  },
  methods: {
    handleAnimate() {
      const { newPos, oldPos, animateRef, animateOpt } = this
      const keyframes = [
        {
          transform: `translate(${oldPos.left - newPos.left}px,${oldPos.top -
            newPos.top}px)`,
          filter: `blur(${animateOpt.blur || 6}px)`
        },
        {
          transform: `translate(0,0)`,
          filter: "blur(0px)"
        }
      ]

      animateRef.animate(keyframes, {
        duration: animateOpt.duration || 700,
        fill: "forwards",
        easing: "ease"
      })
    }
  },
  watch: {
    "$frontmatter.home": function() {
      const { top, left } = this.animateRef.getBoundingClientRect()

      if (Object.keys(this.newPos).length <= 0) {
        this.newPos = { top, left }
      } else {
        ;[this.newPos, this.oldPos] = [this.oldPos, this.newPos]
      }
      this.handleAnimate()
    }
  }
}
