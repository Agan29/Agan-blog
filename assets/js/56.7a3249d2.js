(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{393:function(t,a,s){"use strict";s.r(a);var n=s(42),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"react"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react"}},[t._v("#")]),t._v(" React")]),t._v(" "),s("p",[t._v("[TOC]")]),t._v(" "),s("h2",{attrs:{id:"_1-生命周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-生命周期"}},[t._v("#")]),t._v(" 1 生命周期")]),t._v(" "),s("h3",{attrs:{id:"_1-1-单个组件的生命周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-单个组件的生命周期"}},[t._v("#")]),t._v(" 1.1 单个组件的生命周期")]),t._v(" "),s("p",[t._v("按照创建，更新，销毁的顺序")]),t._v(" "),s("ol",[s("li",[t._v("componentwillMount(React17 废弃)")]),t._v(" "),s("li",[t._v("componentDidMount")]),t._v(" "),s("li",[t._v("componentWillReceiveProps(React17 替换成 getDerivedStateFromProps)")]),t._v(" "),s("li",[t._v("shouldComponentUpdate")]),t._v(" "),s("li",[t._v("componentWillUpdate(React17 替换成 getSnapshotBeforeUpdate)")]),t._v(" "),s("li",[t._v("componentDidUpdate")]),t._v(" "),s("li",[t._v("componentWillUnmount")])]),t._v(" "),s("p",[t._v("其他：")]),t._v(" "),s("ul",[s("li",[t._v("错误捕获 componendDidCatch")])]),t._v(" "),s("h3",{attrs:{id:"_1-2-父子组件的生命周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-父子组件的生命周期"}},[t._v("#")]),t._v(" 1.2 父子组件的生命周期")]),t._v(" "),s("p",[t._v("大致和 Vue 相同，不同的是，react 没有局部更新，更新父组件的同时也会更新子组件。")]),t._v(" "),s("p",[t._v("父 componentWillMount -> 子 componentWillMount -> 子 componentDidMount -> 父 componentDidMount")]),t._v(" "),s("ul",[s("li",[t._v("销毁：")])]),t._v(" "),s("p",[t._v("父 componentWillUnmount -> 子 componentWillUnmount")]),t._v(" "),s("ul",[s("li",[t._v("更新\n"),s("ul",[s("li",[t._v("只更新子： 子 shouldComponentUpdate -> 子 componentWillUpdate -> 子 componentDidUpdate")]),t._v(" "),s("li",[t._v("更新父或同时更新：父 shouldComponentUpdate -> 父 componentWillUpdate -> ==子 componentWillReceiveProps== -> 子 shouldComponentUpdate -> 子 componentWillUpdate -> 子 componentDidUpdate -> 父 componentDidUpdate")])])])]),t._v(" "),s("h3",{attrs:{id:"_1-3-react17-生命周期改动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-react17-生命周期改动"}},[t._v("#")]),t._v(" 1.3 react17 生命周期改动")]),t._v(" "),s("ul",[s("li",[t._v("componentWillMount")]),t._v(" "),s("li",[t._v("componentWillRecieveProps")]),t._v(" "),s("li",[t._v("componentWIllUpdate")])]),t._v(" "),s("p",[t._v("简单来说就是这三个生命周期函数容易被误解并滥用，可能会对异步渲染造成潜在的问题。 可用 UNSAFE_xxx 来取消 eslint 的报错。")]),t._v(" "),s("p",[t._v("新增三个生命周期")]),t._v(" "),s("ul",[s("li",[t._v("getDerivedStateFromProps(nextProps, prevState)")])]),t._v(" "),s("p",[s("strong",[t._v("静态方法，所以不能使用 this.setState。")]),t._v(" 用于替换 componentWillReceiveProps，可以用来控制 props 更新 state 的过程；它返回一个对象表示新的 state；如果不需要更新，返回 null 即可")]),t._v(" "),s("ul",[s("li",[t._v("getSnapshotBeforeUpdate(nextProps, prevState) 。用于替换 componentWillUpdate")]),t._v(" "),s("li",[t._v("componendDidCatch(error, info)。 新增，用于捕捉错误")])]),t._v(" "),s("h2",{attrs:{id:"_2-react-的通信方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-react-的通信方式"}},[t._v("#")]),t._v(" 2 react 的通信方式")]),t._v(" "),s("ul",[s("li",[t._v("props")]),t._v(" "),s("li",[t._v("context。 可跨级通信，但不知道来源哪里不推荐使用。基于生产者消费者模式")]),t._v(" "),s("li",[t._v("redux 和 react-redux")]),t._v(" "),s("li",[t._v("用 js 实现发布订阅模式")]),t._v(" "),s("li",[t._v("React17 会废弃 childContext 使用新 API - createContext()，并提供 Provider 和 consumer 组件，类似 Vue")])]),t._v(" "),s("h2",{attrs:{id:"_3-setstate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-setstate"}},[t._v("#")]),t._v(" 3 setState")]),t._v(" "),s("p",[t._v("setState 是 React 组件中用于更新数据和触发渲染的函数，他的用法如下")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newState"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("object "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" updater"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Function"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("updater")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" prop")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("h3",{attrs:{id:"_3-1-同步和异步-setstate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-同步和异步-setstate"}},[t._v("#")]),t._v(" 3.1 同步和异步 setState")]),t._v(" "),s("p",[s("strong",[t._v("何时同步，何时异步？")])]),t._v(" "),s("ul",[s("li",[t._v("在 react 的生命周期勾子或 react 事件监听回调中使用")]),t._v(" "),s("li",[t._v("其他情况，如定时器回调，原生事件监听回调，promise 回调")])]),t._v(" "),s("p",[s("strong",[t._v("为什么 setState 是异步的？")])]),t._v(" "),s("p",[t._v("setState 出发 React 的更新生命周期函数 4 个函数：shouldComponentUpdate，componentWillUpdate，render，componentDidUpdate。如果每一次 setState 调用都走一圈生命周期，并拿 render 函数返回的结果会拿去做 Virtual DOM 比较和更新 DOM 树，这个就比较费时间。")]),t._v(" "),s("p",[t._v("目前 React 会将 setState 的效果放在队列中，积攒着一次引发更新过程。为的就是把 Virtual DOM 和 DOM 树操作降到最小，用于提高性能。")]),t._v(" "),s("h3",{attrs:{id:"_3-2-setstate-如何实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-setstate-如何实现"}},[t._v("#")]),t._v(" 3.2 setState 如何实现")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ReactComponent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("setState")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("partialState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 更新的操作会放在数组里")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("updater"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("enqueueSetState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" partialState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("callback"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("updater"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("enqueueCallback")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'setState'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("总体流程如下：")]),t._v(" "),s("ol",[s("li",[t._v("将 state 放入 enqueueSetState 队列中，并调用 enqueueUpdate 处理要更新的 Component")]),t._v(" "),s("li",[t._v("如果组件当前正处于 update 中(isBatchingUpdates)，则先将 Component 存入 dirtyComponent 中。否则调用 batchedUpdates 处理。")]),t._v(" "),s("li",[t._v("batchedUpdates 发起一次 transaction.perform()事务")]),t._v(" "),s("li",[t._v("事务会更新 isBatchingUpdates 为 false，循环遍历所有的 dirtyComponents，调用 updateComponent 刷新组件，并执行它的 pendingCallbacks, 也就是 setState 中设置的 callback。")])]),t._v(" "),s("h2",{attrs:{id:"_4-react-的事件机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-react-的事件机制"}},[t._v("#")]),t._v(" 4 react 的事件机制")]),t._v(" "),s("h3",{attrs:{id:"_4-1-合成事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-合成事件"}},[t._v("#")]),t._v(" 4.1 合成事件")]),t._v(" "),s("p",[t._v("在 react 中使用 jsx 语法绑定的事件并不是原生事件，而是一种合成事件 SyntheticEvent。例如 SyntheticEvent, SyntheticKeyboardEvent, SyntheticFocusEvent 等。他有以下特点：")]),t._v(" "),s("ul",[s("li",[t._v("默认的事件流是冒泡，如果以捕获的方式来触发事件的话，事件类型后面加一个后缀 Capture")]),t._v(" "),s("li",[t._v("几乎所有的事件代理(delegate)到 document，达到性能优化的目的，例如对于 audio、video 标签，存在一些媒体事件(例如 onplay、onpause)，只能在这些标签上进行事件绑定，绑定一个入口分发函数(dispatchEvent)")]),t._v(" "),s("li",[t._v("对于每种类型的事件，拥有统一的分发函数 dispatchEvent")]),t._v(" "),s("li",[t._v("事件对象(event)是合成对象(SyntheticEvent)，不是原生的。所以 e.stopPropagation()方法阻止的知识合成事件流的传播。")])]),t._v(" "),s("h3",{attrs:{id:"_4-2-如何实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-如何实现"}},[t._v("#")]),t._v(" 4.2 如何实现")]),t._v(" "),s("p",[t._v("React 事件机制分为事件注册，和事件分发，两个部分。")]),t._v(" "),s("ul",[s("li",[t._v("组件加载 (mountComponent)、更新 (updateComponent) 的时候，调用 _updateDOMProperties 方法对 props 进行处理，将事件绑定在 document 上，并存储在 EventPluginHub 中（订阅发布中心）")]),t._v(" "),s("li",[t._v("回调统一是 ReactEventListener 的 dispatch 方法。通过_dispatchListeners 里得到所有绑定的回调函数，然后循环执行里面的所有的回调函数")])]),t._v(" "),s("h2",{attrs:{id:"_5-react16"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-react16"}},[t._v("#")]),t._v(" 5 react16")]),t._v(" "),s("ol",[s("li",[t._v("新的核心算法 Fiber")]),t._v(" "),s("li",[t._v("render 可以返回数组，字符串")]),t._v(" "),s("li",[t._v("错误处理机制")]),t._v(" "),s("li",[t._v("Portals 组件 渲染外部的 dom 节点. createPortal API")]),t._v(" "),s("li",[t._v("更好 更快的服务端渲染 rendertoNodeStream 返回 node 的流")]),t._v(" "),s("li",[t._v("体积更小 MIT 协议")])]),t._v(" "),s("h2",{attrs:{id:"_6-fiber"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-fiber"}},[t._v("#")]),t._v(" 6 Fiber")]),t._v(" "),s("p",[t._v("Fiber 可以提升复杂 React 应用的可响应性和性能。Fiber 即是 React 新的调度算法。")]),t._v(" "),s("ul",[s("li",[t._v("每次有 state 的变化 React 重新计算，如果计算量过大，浏览器主线程来不及做其他的事情，比如 rerender 或者 layout，那例如动画就会出现卡顿现象。")]),t._v(" "),s("li",[t._v("React 制定了一种名为 Fiber 的数据结构，加上新的算法，使得大量的计算可以被拆解，异步化，浏览器主线程得以释放，保证了渲染的帧率。从而提高响应性。")]),t._v(" "),s("li",[t._v("React 将更新分为了两个时期：\n"),s("ul",[s("li",[t._v("render/reconciliation: 可打断，React 在 workingProgressTree 上复用 current 上的 Fiber 数据结构来一步地（通过 requestIdleCallback）来构建新的 tree，标记处需要更新的节点，放入队列中。")]),t._v(" "),s("li",[t._v("commit: 不可打断。在第二阶段，React 将其所有的变更一次性更新到 DOM 上。")])])])]),t._v(" "),s("h2",{attrs:{id:"_7-函数式组件-class-组件-受控组件-高级组件的概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-函数式组件-class-组件-受控组件-高级组件的概念"}},[t._v("#")]),t._v(" 7 函数式组件，class 组件，受控组件，高级组件的概念")]),t._v(" "),s("ul",[s("li",[t._v("class 组件：类组件不仅允许你使用更多额外的功能，如组件自身的状态和生命周期钩子，也能使组件直接访问 store 并维持状态")]),t._v(" "),s("li",[t._v("函数式组件：当组件仅是接收 props，并将组件自身渲染到页面时，该组件就是一个 '无状态组件(stateless component)'，可以使用一个纯函数来创建这样的组件,即函数式组件")]),t._v(" "),s("li",[t._v('受控组件：在 HTML 中，类似 input, textarea 和 select 这样的表单元素会维护自身的状态，并基于用户的输入来更新。一个输入表单元素，它的值通过 React 的这种方式来控制，这样的元素就被称为"受控元素"。')]),t._v(" "),s("li",[t._v("高级组件 HOC：高阶组件是一个以组件为参数并返回一个新组件的函数，例如 redux 的 connect 函数")])]),t._v(" "),s("h2",{attrs:{id:"_8-react-router"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-react-router"}},[t._v("#")]),t._v(" 8 react-router")]),t._v(" "),s("h3",{attrs:{id:"_8-1-路由模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-1-路由模式"}},[t._v("#")]),t._v(" 8.1 路由模式")]),t._v(" "),s("ul",[s("li",[t._v("BrowserHistory：h5 历史模式")]),t._v(" "),s("li",[t._v("HashHistory：h5 hash 模式")]),t._v(" "),s("li",[t._v("MemoryHistory：和 abstract 模式类似")]),t._v(" "),s("li",[t._v("StaticRouter：一个永远不会改变位置的"),s("code",[t._v("<Router>")]),t._v("。这在服务器端渲染场景中非常有用")]),t._v(" "),s("li",[t._v("NativeRouter：RN 使用")])]),t._v(" "),s("h2",{attrs:{id:"_9-redux"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-redux"}},[t._v("#")]),t._v(" 9 redux")]),t._v(" "),s("h3",{attrs:{id:"_9-1-基本概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-1-基本概念"}},[t._v("#")]),t._v(" 9.1 基本概念")]),t._v(" "),s("ul",[s("li",[t._v("state: 数据，即状态")]),t._v(" "),s("li",[t._v("Action: 一个纯对象，携带这个操作的类型和数据信息")]),t._v(" "),s("li",[t._v("Action Creater: 一个函数，根据指定参数，来生成一个 Action，目的是减少代码量")]),t._v(" "),s("li",[t._v("Reducer: 一个纯函数，用来修改应用的状态，接收当前 State 和 Action，返回一个新的 State。\n"),s("ul",[s("li",[t._v("不得改写参数")]),t._v(" "),s("li",[t._v("不得调用系统的 I/O 的 API")]),t._v(" "),s("li",[t._v("不得调用 Date.now()或者 Math.random()等不纯的方法，因为每次得到的结果会不一样")]),t._v(" "),s("li",[t._v("不能改变 State，必须返回一个新的对象，具体可以使用{...obj}运算符或者 Object.assign()来操作")])])]),t._v(" "),s("li",[t._v("combineReducers: 一个函数，将多个小的 Reducer 合并成一个大的 Reducer")]),t._v(" "),s("li",[t._v("Store: 数据存储中心\n"),s("ul",[s("li",[t._v("Store.getState() 获取 Store 当前的状态")]),t._v(" "),s("li",[t._v("Store.dispatch() 分派一个 Action，用来修改 Store 的状态，从 View 中发出 Action 的唯一方法")]),t._v(" "),s("li",[t._v("Store.subscribe() 订阅一个监听器，当 Store 的状态发生改变的时候，执行函数")])])]),t._v(" "),s("li",[t._v("Middlewares: 中间件, 中间件实际上就是一个拦截器，本质是一个函数，拦截所有的 Action，并执行特定的操作\n"),s("ul",[s("li",[t._v("compose 函数，将[f1, f2, f3] => f1(f2(f3(x)))")])])])]),t._v(" "),s("h3",{attrs:{id:"_9-2-数据流"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-2-数据流"}},[t._v("#")]),t._v(" 9.2 数据流")]),t._v(" "),s("p",[t._v("Redux 应用中数据的生命周期遵循下面 4 个步骤：")]),t._v(" "),s("ol",[s("li",[t._v("调用 store.dispatch(action)。")]),t._v(" "),s("li",[t._v("Redux store 调用传入的 reducer 函数。")]),t._v(" "),s("li",[t._v("根 reducer 应该把多个子 reducer 输出合并成一个单一的 state 树。")]),t._v(" "),s("li",[t._v("Redux store 保存了根 reducer 返回的完整 state 树。")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/zukunft/MDImage/raw/master/img/20200902003659.png",alt:"Redux"}})]),t._v(" "),s("blockquote",[s("p",[t._v("官网地址："),s("a",{attrs:{href:"https://www.redux.org.cn/docs/basics/DataFlow.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("www.redux.org.cn/docs/basics…"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"_10-react-应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_10-react-应用"}},[t._v("#")]),t._v(" 10 react 应用")]),t._v(" "),s("h3",{attrs:{id:"_10-1-实现一个简单的-redux"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_10-1-实现一个简单的-redux"}},[t._v("#")]),t._v(" 10.1 实现一个简单的 redux")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//数据中心 和 发布订阅调度中心")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 生成状态树\n * @param {*} reducer 纯函数 接受dispatch的action,对state进行操作\n * @param {*} enhancer 增强器，中间件\n */")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createStore")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("reducer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" enhancer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("enhancer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("enhancer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("createStore"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reducer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" state "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" listeners "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" state\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscribe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("listener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" listener "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'function'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'listeners should be a function'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    listeners"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("listener"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("action")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    state "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reducer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" action"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    listeners"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("f")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" action\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@@zty/redux/init'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 初始化数据")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" getState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" subscribe"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dispatch "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// addGun = dispatch(addGun())")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bindActionCreator")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("creator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dispatch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("args")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("creator")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// creators = {addGun, removeGun}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bindActionCreators")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("creators"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dispatch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("keys")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("creators"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reduce")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" k")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bindActionCreator")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("creators"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dispatch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" res\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [f1, f2, f3] = f1(f2(f3()))")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("compose")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("funs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("funs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("f")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" f\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("funs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" funs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" funs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reduce")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fun")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("args")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("res")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fun")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 添加中间件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("applyMiddleware")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("middlewares")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("createStore")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("args")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" store "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createStore")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" dispatch "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" store"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dispatch\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" midApi "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      getState"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" store"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("dispatch")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("args")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" middlewaresChain "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" middlewares"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("mw")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mw")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("midApi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [f1, f2, f3] => f1(f2(f3))  形成中间件链路")]),t._v("\n    dispatch "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("compose")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("middlewaresChain"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("store"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dispatch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("store"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      dispatch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);