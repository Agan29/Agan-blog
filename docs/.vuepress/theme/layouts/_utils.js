// 动画前后状态的存储方式
// Completed:  修改前后状态的储存方式，采用队列的方式，先进先出
export const handleWatch = ({ component, animateRef }) => {
  const { top, left } = component.animateRef.getBoundingClientRect()
  component.hanldeState({ top, left })
  component.handleAnimate()
}
