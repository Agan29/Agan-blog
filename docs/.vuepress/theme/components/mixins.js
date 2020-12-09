// FLI 动画混入
export const handleAnimate = {
  data() {
    this.posState = []
    this.animateOpt = {
      blur: 3,
      duration: 600
    }
    this.animateKeyframes = {
      before: {},
      after: {}
    }
    this.delay = 0

    return {}
  },
  mounted() {
    // 初始化获取需要执行动画的dom 的top 和left
    // 赋值给 oldPos
    this.$nextTick(() => {
      if (!this.animateRef) throw new Error("Animation Element Ref is required")
      const { top, left } = this.animateRef.getBoundingClientRect()
      this.hanldeState({ top, left })
    })
  },
  methods: {
    // 队列的方式存储前后状态
    hanldeState(newState) {
      this.posState.push(newState)
      if (this.posState.length > 2) {
        this.posState.shift()
      }
    },

    // FLIP 动画执行
    // 通过初始状态和结束状态的差异 执行animtae 动画方法
    handleAnimate() {
      const { animateRef, animateOpt, animateKeyframes } = this
      const [oldPos, newPos] = this.posState

      const keyframes = [
        {
          transform: `translate(${oldPos.left - newPos.left}px,${oldPos.top -
            newPos.top}px)`,
          filter: `blur(${animateOpt.blur || 6}px)`,
          // 其他设置的动画
          ...animateKeyframes.before
        },
        {
          transform: `translate(0,0)`,
          filter: "blur(0px)",
          ...animateKeyframes.after
        }
      ]
      // animateRef.style.transform = `translate(${oldPos.left -
      //   newPos.left}px,${oldPos.top - newPos.top}px)`
      const animation = animateRef.animate(keyframes, {
        duration: animateOpt.duration || 700,
        fill: "forwards",
        easing: "ease",
        // delay: this.delay || 0,
        fill: "forwards"
      })
      console.log(this.delay)

      animation.play()
      animation.pause()
      setTimeout(() => {
        animation.play()
      }, this.delay)
    }
  }
}
