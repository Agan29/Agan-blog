(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{357:function(_,v,t){"use strict";t.r(v);var e=t(42),r=Object(e.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"浏览器相关"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器相关"}},[_._v("#")]),_._v(" 浏览器相关")]),_._v(" "),t("p",[_._v("[TOC]")]),_._v(" "),t("h2",{attrs:{id:"osi-七层模型和-tcp-ip-四层模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#osi-七层模型和-tcp-ip-四层模型"}},[_._v("#")]),_._v(" OSI 七层模型和 TCP/IP 四层模型")]),_._v(" "),t("table",[t("tbody",[t("tr",[t("td",[_._v(" 七层模型 ")]),_._v(" "),t("td",[_._v(" 四层模型 ")]),_._v(" "),t("td",[_._v(" 功能 ")]),_._v(" "),t("td",[_._v(" 协议 ")])]),_._v(" "),t("tr",[t("td",[_._v(" 应用层")]),_._v(" "),t("td",{attrs:{rowspan:"3"}},[_._v(" 应用层")]),_._v(" "),t("td",[_._v(" 文件传输，电子邮件，虚拟终端等")]),_._v(" "),t("td",[_._v(" HTTP, FTP, DNS域名系统等")])]),_._v(" "),t("tr",[t("td",[_._v(" 表示层")]),_._v(" "),t("td",[_._v(" 数据格式化，代码转换，数据加密")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v(" 会话层")]),_._v(" "),t("td",[_._v(" 建立或解除和别的端的连接")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v(" 传输层")]),_._v(" "),t("td",[_._v(" 传输层")]),_._v(" "),t("td",[_._v(" 提供端对端的接口，数据传输")]),_._v(" "),t("td",[_._v(" TCP传输控制协议, UDP用户数据报协议，SSL安全套接字协议")])]),_._v(" "),t("tr",[t("td",[_._v(" 网络层")]),_._v(" "),t("td",[_._v(" 网络层")]),_._v(" "),t("td",[_._v(" 为数据包选择路由")]),_._v(" "),t("td",[_._v(" IP，ICMP, RIP等")])]),_._v(" "),t("tr",[t("td",[_._v(" 数据链路层")]),_._v(" "),t("td",{attrs:{rowspan:"2"}},[_._v(" 数据链路层")]),_._v(" "),t("td",[_._v(" 传输有地址的帧以及错误检测功能")]),_._v(" "),t("td",[_._v(" PPP，ARP, RARP等")])]),_._v(" "),t("tr",[t("td",[_._v(" 物理层")]),_._v(" "),t("td",[_._v(" 以二进制形式在物理传输媒体上传输数据")]),_._v(" "),t("td",[_._v(" IEEE标准")])])])]),_._v(" "),t("h2",{attrs:{id:"dns"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dns"}},[_._v("#")]),_._v(" DNS")]),_._v(" "),t("p",[_._v("域名系统（服务）协议（DNS）是一种分布式网络目录服务，主要用于域名与 IP 地址的相互转换，以及控制因特网的电子邮件的发送。为了保证高可用、高并发和分布式，它设计成了树状的层次结构。由根 DNS 服务器、顶级域 DNS 服务器和权威 DNS 服务器组成。")]),_._v(" "),t("p",[_._v("解析顺序是首先从浏览器缓存、操作系统缓存以及本地 DNS 缓存 (/etc/hosts) 逐级查找，然后从本地 DNS 服务器、根 DNS、顶级 DNS 以及权威 DNS 层层递归查询。")]),_._v(" "),t("p",[_._v("还可以基于域名在内网、外网进行负载均衡。")]),_._v(" "),t("p",[_._v("不过传统的 DNS 有很多问题(解析慢、更新不及时)，HTTPDNS 通过客户端 SDK 和服务端配合，直接通过 HTTP 调用解析 DNS 的方式，可以绕过传统 DNS 这些缺点，实现智能调度。")]),_._v(" "),t("blockquote",[t("p",[_._v("答案来自 "),t("a",{attrs:{href:"https://mp.weixin.qq.com/s/mgGKIxYbZVDZP781ryhWTQ",target:"_blank",rel:"noopener noreferrer"}},[_._v("mp.weixin.qq.com/s/mgGKIxYbZ…"),t("OutboundLink")],1)])]),_._v(" "),t("h2",{attrs:{id:"udp-和-tcp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#udp-和-tcp"}},[_._v("#")]),_._v(" UDP 和 TCP")]),_._v(" "),t("h3",{attrs:{id:"两者的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#两者的区别"}},[_._v("#")]),_._v(" 两者的区别")]),_._v(" "),t("p",[_._v("UDP 协议全称是用户数据报协议")]),_._v(" "),t("ul",[t("li",[_._v("面向无连接： 首先 UDP 是不需要和 TCP 一样在发送数据前进行三次握手建立连接的，想发数据就可以开始发送了。并且也只是数据报文的搬运工，不会对数据报文进行任何拆分和拼接操作。")]),_._v(" "),t("li",[_._v("有单播，多播，广播的功能")]),_._v(" "),t("li",[_._v("不可靠性：这种不可靠性体现在无连接上")]),_._v(" "),t("li",[_._v("头部开销小，传输数据报文时是很高效的")])]),_._v(" "),t("p",[_._v("TCP 协议全称是传输控制协议是一种面向连接的、可靠的、基于字节流的传输层通信协议")]),_._v(" "),t("ul",[t("li",[_._v("面向连接：发送数据之前必须在两端建立连接。建立连接的方法是“三次握手”")]),_._v(" "),t("li",[_._v("仅支持单播传输：只能进行点对点的数据传输，不支持多播和广播传输方式")]),_._v(" "),t("li",[_._v("可靠传输：判断丢包，误码靠的是 TCP 的段编号以及确认号")]),_._v(" "),t("li",[_._v("提供拥塞控制：当网络出现拥塞的时候，TCP 能够减小向网络注入数据的速率和数量，缓解拥塞")])]),_._v(" "),t("h3",{attrs:{id:"三次握手和四次挥手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三次握手和四次挥手"}},[_._v("#")]),_._v(" 三次握手和四次挥手")]),_._v(" "),t("p",[_._v("TCP 连接采用三次握手")]),_._v(" "),t("ol",[t("li",[_._v("客服端首先发送一个带有 SYN 标志地数据包给服务端。自身进入 sent 状态，等待服务端确认")]),_._v(" "),t("li",[_._v("服务端接收后，回传一个带有 SYN/ACK 标志的数据包传递确认信息，表示我收到了，服务端进入 rcvd 收到状态。")]),_._v(" "),t("li",[_._v('最后，客户端收到确认，再回传一个带有 ACK 标志的数据包，代表我知道了，表示"握手"结束，两端进入 established 确立状态。')])]),_._v(" "),t("p",[_._v("通俗的说法：")]),_._v(" "),t("p",[_._v("Client：喂，小明，是我，听的到吗？ Server：听到了，你听的见吗? Client：听见了，听见了，我们可以聊天了。")]),_._v(" "),t("p",[_._v("为什么需要三次握手？可能有以下两种情况")]),_._v(" "),t("ul",[t("li",[_._v("客户端发出第一次挥手后就失效了，那么服务端接收后就产生 TCP 链接是无用的，需要第三次挥手确认")]),_._v(" "),t("li",[_._v("服务端发送的数据表，因为网络情况丢失了，客户端超时后重新发起了链接，那么上次的 TCP，链接服务端因为没有接受到回应而一直开着，造成了资源浪费")])]),_._v(" "),t("p",[_._v("TCP 断开采用四次挥手")]),_._v(" "),t("ol",[t("li",[_._v("客户端发送一带有个 FIN 标志地数据包给服务，用来关闭客户端到服务端的数据传送，客户端进入 FIN_WAIT_1 状态。")]),_._v(" "),t("li",[_._v("服务端收到后，发送一个 ACK 数据包给客户端，自身进入 CLOSE_WAIT 状态。")]),_._v(" "),t("li",[_._v("服务端发送一个 FIN，用来关闭服务端到客户端的数据传送，客户端进入 LAST_ACK 状态。")]),_._v(" "),t("li",[_._v("客户端收到 FIN 后，进入 TIME_WAIT 状态，接着发送一个 ACK 给 服务端，服务端进入 CLOSED 状态，通信结束。")])]),_._v(" "),t("p",[_._v("通俗的说法(云顶)")]),_._v(" "),t("p",[_._v("Client：我已经第 8，抬走出门了。 Server：我看到了，等等我，我还有血。 Server：好了，我也结束了。 Client：好的，这把游戏结束。")]),_._v(" "),t("p",[_._v("为什么中间服务端发送了两次？ 因为此时服务端可能还有数据没有发送完，所以并不会马上关闭 socket，而是等待数据发送后再发送 FIN 标志。")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/zukunft/MDImage/raw/master/img/20200902004537.png",alt:"TCP"}})]),_._v(" "),t("h2",{attrs:{id:"gc-垃圾回收机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gc-垃圾回收机制"}},[_._v("#")]),_._v(" GC 垃圾回收机制")]),_._v(" "),t("p",[_._v("垃圾回收机制(GC:Garbage Collection),执行环境负责管理代码执行过程中使用的内存。浏览器会在浏览器渲染的空闲时间内清除内存。")]),_._v(" "),t("p",[_._v("在 V8 中，主要将内存分为新生代和老生代，新生代的对象为存活时间较短的对象，老生代中的对象为存活时间较长或常驻内存的对象。")]),_._v(" "),t("h3",{attrs:{id:"栈内存的回收"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#栈内存的回收"}},[_._v("#")]),_._v(" 栈内存的回收")]),_._v(" "),t("p",[_._v("栈内存在调用栈上下文切换后就会被回收。")]),_._v(" "),t("h3",{attrs:{id:"堆内存的回收"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#堆内存的回收"}},[_._v("#")]),_._v(" 堆内存的回收")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("新生代")]),_._v("内存回收机制：新生代内存容量小，默认下，64 位系统下仅有 32M。")])]),_._v(" "),t("p",[_._v("使用 cheney 算法将新生代内存分为 From、To 两部分，处于使用状态的称为 From 空间，处于闲置状态的称为 To 空间。进行垃圾回收时，将 From 中的存活对象复制到 To，然后将非存活对象回收，之后调换 From/To。")]),_._v(" "),t("ul",[t("li",[t("p",[t("strong",[_._v("晋升")]),_._v("：如果新生代的变量经过复制依然依然存活时，那么就会被放入老生代内存中。晋升有两个条件：")]),_._v(" "),t("ul",[t("li",[_._v("是否经历过新生代的回收")]),_._v(" "),t("li",[_._v("To 空间内存占比超过限制")])])]),_._v(" "),t("li",[t("p",[t("strong",[_._v("老生代")]),_._v("内存回收机制")])])]),_._v(" "),t("p",[_._v("V8 在老生代中主要采用 Mark-Sweep 和 Mark-Compact 相结合的方式进行垃圾回收。主要使用 Mark-Sweep，在空间不足以对新生代中晋升过来的对象进行分配是才使用 Mark-Compact。")]),_._v(" "),t("ul",[t("li",[_._v("Mark-Sweep： 在标记阶段遍历所有堆中的所有对象，并标记活着的对象，在清除阶段清除没有标记的对象。")]),_._v(" "),t("li",[_._v("Mark-Compact： 在 Mark-Sweep 的基础上演变而来，差别在于在标记死亡后，在整理过程中会将活着的对象往一端移动，移动后，直接清理掉边界外的内存，解决 Mark-Sweep 的内存碎片问题。")])]),_._v(" "),t("blockquote",[t("p",[_._v("答案来自《深入浅出 Node》")])]),_._v(" "),t("h2",{attrs:{id:"缓存机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缓存机制"}},[_._v("#")]),_._v(" 缓存机制")]),_._v(" "),t("p",[_._v("浏览器会拷贝一份已经请求过的 web 资源在内存或硬盘中。当下一个请求到来的时候，如果是相同的 URL，浏览器会根据缓存机制决定是直接使用副本响应访问请求还是向源服务器再次发起请求。使用缓存有以下的优点：")]),_._v(" "),t("ul",[t("li",[_._v("减少网络带宽消耗")]),_._v(" "),t("li",[_._v("降低服务器压力")]),_._v(" "),t("li",[_._v("减少网络延迟")])]),_._v(" "),t("p",[_._v("浏览器的缓存分成强缓存和协商缓存两种。对应的字段有")]),_._v(" "),t("ul",[t("li",[_._v("强缓存：Expires 和 Cache-Control，Expires 和 Cache-Control。")]),_._v(" "),t("li",[_._v("协商缓存：Last-Modified / If-Modified-Since 和 Etag / If-None-Match，其中 Etag / If-None-Match 的优先级比 Last-Modified / If-Modified-Since 高。")])]),_._v(" "),t("p",[_._v("浏览器再向服务器请求资源时,首先会判断是否命中强缓存,再判断是否命中协商缓存。 简单的流程图如下："),t("br"),_._v(" "),t("img",{attrs:{src:"https://gitee.com/zukunft/MDImage/raw/master/img/20200902004614.png",alt:"缓存"}})]),_._v(" "),t("blockquote",[t("p",[_._v("推荐文章："),t("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/25953524",target:"_blank",rel:"noopener noreferrer"}},[_._v("zhuanlan.zhihu.com/p/25953524"),t("OutboundLink")],1)])]),_._v(" "),t("h2",{attrs:{id:"rest-架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rest-架构"}},[_._v("#")]),_._v(" REST 架构")]),_._v(" "),t("p",[_._v("REST 即表述性状态传递，表述性状态转移是一组架构约束条件和原则。满足这些约束条件和原则的应用程序或设计就是 RESTful。需要注意的是，REST 是设计风格而不是标准。 他有以下几个原则：")]),_._v(" "),t("ul",[t("li",[_._v("C-S 架构: 数据的存储在 Server 端，"),t("code",[_._v("Client")]),_._v(" 端只需使用就行。两端彻底分离。")]),_._v(" "),t("li",[_._v("无状态: 从客户端到服务器的每个请求都必须包含理解请求所需的所有信息，并且不能利用服务器上任何存储的上下文。这表示你应该尽可能的避免使用 "),t("code",[_._v("session，由客户端自己标识会话状态。（例如使用")]),_._v(" "),t("code",[_._v("token")]),_._v(" 标识用户而不是 "),t("code",[_._v("session")]),_._v("）")]),_._v(" "),t("li",[_._v("规范接口: "),t("code",[_._v("restfulAPI")]),_._v(" - "),t("code",[_._v("restfulAPI")]),_._v(" 就是用 URL 定位资源，用 "),t("code",[_._v("HTTP")]),_._v(" 描述操作\n"),t("ul",[t("li",[t("code",[_._v("get")]),_._v(": 请求数据")]),_._v(" "),t("li",[t("code",[_._v("post")]),_._v(": 提交数据")]),_._v(" "),t("li",[t("code",[_._v("put")]),_._v(": restful，更新实体的全部属性")]),_._v(" "),t("li",[t("code",[_._v("patch")]),_._v(": 更新实体的部分属性")]),_._v(" "),t("li",[t("code",[_._v("delete")]),_._v(": restful，删除实体")])])]),_._v(" "),t("li",[_._v("可缓存: 响应中的数据隐式或显式标记为可缓存或不可缓存。它表示 "),t("code",[_._v("get")]),_._v(" 请求响应头中应该表示有是否可缓存的头（"),t("code",[_._v("Cache-Control")]),_._v(")")])])])}),[],!1,null,null,null);v.default=r.exports}}]);