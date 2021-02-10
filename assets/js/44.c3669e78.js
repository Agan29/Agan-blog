(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{374:function(t,e,a){"use strict";a.r(e);var r=a(42),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"「前端进阶必备」深入理解现代浏览器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#「前端进阶必备」深入理解现代浏览器"}},[t._v("#")]),t._v(" 「前端进阶必备」深入理解现代浏览器")]),t._v(" "),a("p",[t._v("今天我们的现代浏览器深度游会非常轻松、快乐。这首先必须感谢一位名叫Mariko Kosaka（小坂真子，"),a("a",{attrs:{href:"https://kosamari.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://kosamari.com/"),a("OutboundLink")],1),t._v("）的同行。她在Scripto工作，2018年9月在Google开发者网站上发表了“Inside look at modern web browser”系列文章。本文就是她那4篇文章的“集合版”。为什么搞这个“集合版”？因为她的4篇文章写得实在太好，更难得的是人家亲手绘制了一大堆生动的配图和动画，这让深入理解现代浏览器变得更加轻松愉快。")]),t._v(" "),a("p",[t._v("好了，言归正传。本文分4个部分，对应上述4篇文章（原文链接附后）。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("架构：以Chrome为例，介绍现代浏览器的实现架构。")])]),t._v(" "),a("li",[a("p",[t._v("导航：从输入URL到获到HTML响应称为导航。")])]),t._v(" "),a("li",[a("p",[t._v("渲染：浏览器解析HTML、下载外部资源、计算样式并把网页绘制到屏幕上。")])]),t._v(" "),a("li",[a("p",[t._v("交互：用户输入事件的处理与优化。")])])]),t._v(" "),a("p",[t._v("先来个小小的序言。很多人在开发网站时，只关注怎么写自己的代码，关注怎么提升自己的开发效率。这些当然重要，但是写到一定的阶段，就应该停下来想想：浏览器到底会怎么运行你写的代码。如果你能多了解一些浏览器，然后对它好一点，那么就会更容易达成你提升用户体验的目标。")]),t._v(" "),a("h2",{attrs:{id:"架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#架构"}},[t._v("#")]),t._v(" 架构")]),t._v(" "),a("p",[t._v("Web浏览器的架构，可以实现为一个进程包含多个线程，也可以实现为很多进程包含少数线程通过IPC通信。如何实现浏览器，并没有统一的标准。Chrome最新的架构：最上层是浏览器进程，负责协调承担各项工作的其他进程，比如实用程序进程、渲染器进程、GPU进程、插件进程等，如下图所示。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/zukunft/MDImage/raw/master/img/download.png",alt:"架构"}})]),t._v(" "),a("p",[t._v("渲染器进程对应新开的标签页，每新开一个标签页，就会创建一个新的渲染器进程。不仅如此，Chrome还会尽量给每个站点新开一个渲染器进程，包括iframe中的站点，以实现站点隔离。")]),t._v(" "),a("p",[t._v("下面详细了解一下每个进程的作用，可以参考下图。")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("浏览器进程")]),t._v("：控制浏览器这个应用的chrome（主框架）部分，包括地址栏、书签、前进/后退按钮等，同时也会处理浏览器不可见的高权限任务，如发送网络请求、访问文件。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("渲染器进程")]),t._v("：负责在标签页中显示网站及处理事件。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("插件进程")]),t._v("：控制网站用到的所有插件。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("GPU进程")]),t._v("：在独立的进程中处理GPU任务。之所以放到独立的进程，是因为GPU要处理来自多个应用的请求，但要在同一个界面上绘制图形。")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/zukunft/MDImage/raw/master/img/640.jpeg",alt:"Chrome"}})]),t._v(" "),a("p",[t._v("当然，还有其他进程，比如扩展进程、实用程序进程。要知道你的Chrome当前打开了多少个进程，点击右上角的按钮，选择“更多工具”，再选择“任务管理器”。")]),t._v(" "),a("p",[t._v("Chrome的多进程架构有哪些优点呢？")]),t._v(" "),a("p",[t._v("最简单的情况下，可以想像一个标签页就是一个渲染器进程，比如3个标签页就是3个渲染器进程。这时候，如果有一个渲染器崩溃了，只要把它关掉即可，不会影响其他标签页。如果所有标签页都运行在一个进程中，那只要有一个标签页卡住，所有标签页都会卡住。")]),t._v(" "),a("p",[t._v("除此之外，多进程架构还有助于安全和隔离。因为操作系统有限制进程特权的机制，浏览器可以借此限制某些进程的能力。比如，Chrome会限制处理任意用户输入的渲染器进程，不让它任意访问文件。")]),t._v(" "),a("p",[t._v("由于进程都有自己私有的内存空间，因此每个进程可能都会保存某个公共基础设施（比如Chrome的JavaScript引擎V8）的多个副本。这会导致内存占用增多。为节省内存，Chrome会限制自己可以打开的进程数量。限制的条件取决于设备内存和CPU配置。达到限制条件后，Chrome会用一个进程处理同一个站点的多个标签页。")]),t._v(" "),a("p",[t._v("Chrome架构进化的目标是将整个浏览器程序的不同部分服务化，便于分割或合并。基本思路是在高配设备中，每个服务独立开进程，保证稳定；在低配设备中，多个服务合并为一个进程，节约资源。同样的思路也应用到了Android上。")]),t._v(" "),a("p",[t._v("重点说一说站点隔离（"),a("a",{attrs:{href:"http://t.cn/RgNAwLC",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://t.cn/RgNAwLC"),a("OutboundLink")],1),t._v("）。站点隔离是新近引入Chrome的一个里程碑式特性，即每个跨站点iframe都运行一个独立的渲染器进程。即便像前面说的那样，每个标签页单开一个渲染器进程，但允许跨站点的iframe运行在同一个渲染器进程中并共享内存空间，那安全攻击仍然有可能绕开同源策略（"),a("a",{attrs:{href:"http://t.cn/8s1ySzx",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://t.cn/8s1ySzx"),a("OutboundLink")],1),t._v("），而且有人发现在现代CPU中，进程有可能读取任意内存（"),a("a",{attrs:{href:"http://t.cn/R8FwHoX",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://t.cn/R8FwHoX"),a("OutboundLink")],1),t._v("）。")]),t._v(" "),a("p",[t._v("进程隔离是隔离站点、确保上网安全最有效的方式。Chrome 67桌面版默认采用站点隔离。站点隔离是多年工程化努力的结果，它并非多开几个渲染器进程那么简单。比如，不同的iframe运行在不同进程中，开发工具在后台仍然要做到无缝切换，而且即便简单地Ctrl+F查找也会涉及在不同进程中搜索。")]),t._v(" "),a("h2",{attrs:{id:"导航"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导航"}},[t._v("#")]),t._v(" 导航")]),t._v(" "),a("p",[t._v("导航涉及浏览器进程与线程间为显示网页而通信。一切从用户在浏览器中输入一个URL开始。输入URL之后，浏览器会通过互联网获取数据并显示网页。从请求网页到浏览器准备渲染网页的过程，叫做导航。")]),t._v(" "),a("p",[t._v("如前所述，标签页外面的一切都由浏览器进程处理。浏览器进程中有线程（UI线程）负责绘制浏览器的按钮和地址栏，有线程（网络线程）负责处理网络请求并从互联网接收数据，有线程（存储线程）负责访问文件和存储数据。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/zukunft/MDImage/raw/master/img/640-20201111212132263.jpeg",alt:"导航"}})]),t._v(" "),a("p",[t._v("下面我们逐步看一看导航的几个步骤。")]),t._v(" "),a("p",[t._v("第一步："),a("strong",[t._v("处理输入")]),t._v("。UI线程会判断用户输入的是查询字符串还是URL。因为Chrome的地址栏同时也是搜索框。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/zukunft/MDImage/raw/master/img/640-20201111212139275.jpeg",alt:"处理输入"}})]),t._v(" "),a("p",[t._v("第二步："),a("strong",[t._v("开始导航")]),t._v("。如果输入的是URL，UI线程会通知网络线程发起网络调用，获取网站内容。此时标签页左端显示旋转图标，网络线程进行DNS查询、建立TLS连接（对于HTTPS）。网络线程可能收到服务器的重定向头部，如"),a("code",[t._v("HTTP 301")]),t._v("。此时网络线程会跟UI线程沟通，告诉它服务器要求重定向。然后，再发起对另一个URL的请求。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/zukunft/MDImage/raw/master/img/640-20201111212144998-20201111212211216.jpeg",alt:"开始导航"}})]),t._v(" "),a("p",[t._v("第三步："),a("strong",[t._v("读取响应")]),t._v("。服务器返回的响应体到来之后，网络线程会检查接收到的前几个字节。响应的"),a("code",[t._v("Content-Type")]),t._v("头部应该包含数据类型，如果没有这个字段，则需要MIME类型嗅探（"),a("a",{attrs:{href:"http://t.cn/Rt2gG2J",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://t.cn/Rt2gG2J"),a("OutboundLink")],1),t._v("）。看看Chrome源码（"),a("a",{attrs:{href:"http://t.cn/Ai9cZI7D",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://t.cn/Ai9cZI7D"),a("OutboundLink")],1),t._v("）中的注释就知道这一块有多难搞。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/zukunft/MDImage/raw/master/img/chrome-mime.jpeg",alt:"读取响应"}})]),t._v(" "),a("p",[t._v("如果响应是HTML文件，那下一步就是把数据交给渲染器进程。但如果是一个zip文件或其他文件，那就意味着是一个下载请求，需要把数据传给下载管理器。")]),t._v(" "),a("p",[t._v("此时也是“安全浏览”（"),a("a",{attrs:{href:"https://safebrowsing.google.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://safebrowsing.google.com/"),a("OutboundLink")],1),t._v("）检查的环节。如果域名和响应数据匹配已知的恶意网站，网络线程会显示警告页。此外，CORB（Cross Origin Read Blocking，"),a("a",{attrs:{href:"https://www.chromium.org/Home/chromium-security/corb-for-developers",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.chromium.org/Home/chromium-security/corb-for-developers"),a("OutboundLink")],1),t._v("）检查也会执行，以确保敏感的跨站点数据不会发送给渲染器进程。")]),t._v(" "),a("p",[t._v("第四步："),a("strong",[t._v("联系渲染器进程")]),t._v("。所有查检完毕，网络线程确认浏览器可以导航到用户请求的网站，于是会通知UI线程数据已经准备好了。UI线程会联系渲染器进程渲染网页。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/zukunft/MDImage/raw/master/img/20201111213744.png",alt:"联系渲染器进程"}})]),t._v(" "),a("blockquote",[a("p",[t._v("由于网络请求可能要花几百毫秒才能拿到响应，这里还会应用一个优化策略。第二步UI线程要求网络线程发送请求后，已经知道可能要导航到哪个网站去了。因此在发送网络请求的同时，UI线程会提前联系或并行启动一个渲染器进程。这样在网络线程收到数据后，就已经有渲染器进程原地待命了。如果发生了重定向，这个待命进程可能用不上，而是换作其他进程去处理。")])]),t._v(" "),a("p",[t._v("第五步："),a("strong",[t._v("提交导航")]),t._v("。数据和渲染器进程都有了，就可以通过IPC从浏览器进程向渲染器进程提交导航。渲染器进程也会同时接收到不间断的HTML数据流。当浏览器进程收到渲染器进程的确认消息后，导航完成，文档加载阶段开始。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/zukunft/MDImage/raw/master/img/20201111213802.png",alt:"提交导航"}})]),t._v(" "),a("p",[t._v("此时，地址栏会更新，安全指示图标和网站设置UI也会反映新页面的信息。当前标签页面的会话历史会更新，后退/前进按钮起作用。为便于标签页/会话在关闭标签页或窗口后恢复，会话历史会写入磁盘。")]),t._v(" "),a("p",[t._v("最后一步："),a("strong",[t._v("初始加载完成")]),t._v("。提交导航之后，渲染器进程将负责加载资源和渲染页面（具体细节后面介绍）。而在“完成”渲染后（在所有"),a("code",[t._v("iframe")]),t._v("中的"),a("code",[t._v("onload")]),t._v("事件触发且执行完成后），渲染器进程会通过IPC给浏览器进程发送一个消息。此时，UI线程停止标签页上的旋转图标。")]),t._v(" "),a("blockquote",[a("p",[t._v("初始加载完成后，客户端JavaScript仍然可能加载额外资源并重新渲染页面。")])]),t._v(" "),a("p",[t._v("如果此时用户在地址又输入了其他URL呢？浏览器进程还会重复上述步骤，导航到新站点。不过在此之前，需要确认已渲染的网站是否关注"),a("code",[t._v("beforeunload")]),t._v("事件。因为标签页中的一切，包括JavaScript代码都由渲染器进程处理，所以浏览器进程必须与当前的渲染器进程确认后再导航到新站点。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/zukunft/MDImage/raw/master/img/640-20201111212237814.jpeg",alt:"初始加载完成"}})]),t._v(" "),a("p",[t._v("如果导航请求来自当前渲染器进程（用户点击了链接或JavaScript运行了"),a("code",[t._v('window.location = "https://newsite.com"')]),t._v("），渲染器进程首先会检查"),a("code",[t._v("beforeunload")]),t._v("处理程序。然后，它会走一遍与浏览器进程触发导航同样的过程。唯一的区别在于导航请求是由渲染器进程提交给浏览器进程的。")]),t._v(" "),a("p",[t._v("导航到不同的网站时，会有一个新的独立渲染器进程负责处理新导航，而老的渲染器进程要负责处理"),a("code",[t._v("unload")]),t._v("之类的事件。更多细节，可以参考“页面生命周期API”："),a("a",{attrs:{href:"http://t.cn/Rey7RIE",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://t.cn/Rey7RIE"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/zukunft/MDImage/raw/master/img/20201111213902.png",alt:"导航到不同的网站时"}})]),t._v(" "),a("p",[t._v("另外，导航阶段还可能涉及"),a("code",[t._v("Service Worker")]),t._v("，即网页应用中的网络代理服务（"),a("a",{attrs:{href:"http://t.cn/R3SH3HL",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://t.cn/R3SH3HL"),a("OutboundLink")],1),t._v("），开发者可以通过它控制什么缓存在本地，何时从网络获取新数据。"),a("code",[t._v("Service Worker")]),t._v("说到底也是需要渲染器进程运行的JavaScript代码。如果网站注册了Server Worker，那么导航请求到来时，网络线程会根据URL将其匹配出来，此时UI线程就会联系一个渲染器进程来执行"),a("code",[t._v("Service Worker")]),t._v("的代码：可能只要从本地缓存读取数据，也可能需要发送网络请求。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/zukunft/MDImage/raw/master/img/20201111213914.png",alt:"Service Worker"}})]),t._v(" "),a("p",[t._v("如果"),a("code",[t._v("Service Worker")]),t._v("最终决定从网络请求数据，浏览器进程与渲染器进程间的这种往返通信会导致延迟。因此，这里会有一个“导航预加载”的优化（"),a("a",{attrs:{href:"http://t.cn/Ai9qGJ66",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://t.cn/Ai9qGJ66"),a("OutboundLink")],1),t._v("），即在"),a("code",[t._v("Service Worker")]),t._v("启动同时预先加载资源，加载请求通过HTTP头部与服务器沟通，服务器决定是否完全更新内容。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/zukunft/MDImage/raw/master/img/20201111213921.png",alt:"Service Worker"}})]),t._v(" "),a("h2",{attrs:{id:"渲染"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#渲染"}},[t._v("#")]),t._v(" 渲染")]),t._v(" "),a("p",[t._v("渲染是渲染器进程内部的工作，涉及Web性能的诸多方面（详细内容可以参考这里"),a("a",{attrs:{href:"http://t.cn/Ai9c4nUu",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://t.cn/Ai9c4nUu"),a("OutboundLink")],1),t._v("）。标签页中的一切都由渲染器进程负责处理，其中主线程负责运行大多数客户端JavaScript代码，少量代码可能会由工作线程处理（如果用到了Web Worker或"),a("code",[t._v("Service Worker")]),t._v("）。合成器（compositor）线程和栅格化（raster）线程负责高效、平滑地渲染页面。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/zukunft/MDImage/raw/master/img/20201111213932.png",alt:"渲染"}})]),t._v(" "),a("p",[t._v("渲染器进程的核心任务是把HTML、CSS和JavaScript转换成用户可以交互的网页接下来，我们从整体上过一遍渲染器进程处理Web内容的各个阶段。")]),t._v(" "),a("h3",{attrs:{id:"解析html"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解析html"}},[t._v("#")]),t._v(" 解析HTML")]),t._v(" "),a("p",[a("strong",[t._v("构建DOM")]),t._v("。渲染器进程收到导航的提交消息后，开始接收HTML，其主线程开始解析文本字符串（HTML），并将它转换为DOM（Document Object Model，文档对象模型）。")]),t._v(" "),a("p",[t._v("DOM是浏览器内部对页面的表示，也是JavaScript与之交互的数据结构和API。")]),t._v(" "),a("p",[t._v("如何将HTML解析为DOM由HTML标准（"),a("a",{attrs:{href:"http://t.cn/R2NREUt",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://t.cn/R2NREUt"),a("OutboundLink")],1),t._v("）定义。HTML标准要求浏览器兼容错误的HTML写法，因此浏览器会“忍气吞声”，绝不报错。详情可以看看“解析器错误处理及怪异情形简介”"),a("br"),t._v("\n（"),a("a",{attrs:{href:"http://t.cn/Ai9c8i5D",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://t.cn/Ai9c8i5D"),a("OutboundLink")],1),t._v("）。")]),t._v(" "),a("p",[a("strong",[t._v("加载子资源")]),t._v("。网站都会用到图片、CSS和JavaScript等外部资源。浏览器需要从缓存或网络加载这些文件。主线程可以在解析并构建DOM的过程中发现一个加载一个，但这样效率太低。为此，Chrome会在解析同时并发运行“预加载扫描器”，当发现HTML文档中有"),a("code",[t._v("<img>")]),t._v("或"),a("code",[t._v("<link>")]),t._v("时，预加载扫描器会将请求提交给浏览器进程中的网络线程。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/zukunft/MDImage/raw/master/img/640-20201111212242491.jpeg",alt:"解析HTML"}})]),t._v(" "),a("p",[a("strong",[t._v("JavaScript可能阻塞解析")]),t._v("。如果HTML解析器碰到"),a("code",[t._v("<script>")]),t._v("标签，会暂停解析HTML文档并加载、解析和执行JavaScript代码。因为JavaScript有可能通过"),a("code",[t._v("document.write()")]),t._v("修改文档，进而改变DOM结构（HTML标准的“解析模型”有一张图可以一目了然：（"),a("a",{attrs:{href:"http://t.cn/Ai9cupLc",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://t.cn/Ai9cupLc"),a("OutboundLink")],1),t._v("）。所以HTML解析器必须停下来执行JavaScript，然后再恢复解析HTML。至于执行JavaScript的细节，大家可以关注V8团队相关的分享："),a("a",{attrs:{href:"http://t.cn/RB9qP51",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://t.cn/RB9qP51"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("提示浏览器你要加载资源")])])]),t._v(" "),a("h3",{attrs:{id:"计算样式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#计算样式"}},[t._v("#")]),t._v(" 计算样式")]),t._v(" "),a("p",[t._v("光有DOM还不行，因为并不知道页面应该长啥样。所以接下来，主线程要解析CSS并计算每个DOM节点的样式。这个过程就是根据CSS选择符，确定每个元素要应用什么样式。在Chrome开发工具“计算的样式”（computed）中可以看每个元素计算后的样式。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/zukunft/MDImage/raw/master/img/640-20201111212247961.jpeg",alt:"计算样式"}})]),t._v(" "),a("p",[t._v("就算网页没有提供任何CSS，每个DOM节点仍然会有计算的样式。这是因为浏览器有一个默认的样式表，Chrome默认的样式在这里："),a("a",{attrs:{href:"http://t.cn/Ai9VALCy",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://t.cn/Ai9VALCy"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#布局"}},[t._v("#")]),t._v(" 布局")]),t._v(" "),a("p",[t._v("到这一步，渲染器进程知道了文档的结构，也知道了每个节点的样式。但基于这些信息仍然不足以渲染页面。比如，你通过电话跟朋友说：“画一个红色的大圆形，还有一个蓝色的小方形”，你的朋友仍然不知道该画成什么样。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/zukunft/MDImage/raw/master/img/640-20201111212252255.jpeg",alt:"布局"}})]),t._v(" "),a("p",[t._v("布局，就是要找到元素间的几何位置关系。主线程会遍历DOM元素及其计算样式，然后构造一棵布局树，这棵树的每个节点将带有坐标和大小信息。布局树与DOM树的结构类似，但只包含页面中可见元素的信息。如果元素被应用了display: none，则布局树中不会包含它（"),a("code",[t._v("visibility: hidden")]),t._v("的元素会包含在内）。类似地，通过伪类"),a("code",[t._v("p::before{content: 'Hi!'}")]),t._v("添加的内容会包含在布局树中，但DOM树中却没有。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/zukunft/MDImage/raw/master/img/640-20201111212254672.jpeg",alt:"布局"}})]),t._v(" "),a("p",[t._v("确定页面的布局要考虑很多很多因素，并不简单。比如，字体大小、文本换行都会影响段落的形状，进而影响后续段落的布局。CSS可让元素浮动到一边、隐藏溢出边界的内容、改变文本显示方向。可想而知，布局阶段的任务是非常艰巨的。Chrome有一个工程师团队专司布局，感兴趣的话，可以看看他们这个分享："),a("a",{attrs:{href:"http://t.cn/Ai9VcjFn",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://t.cn/Ai9VcjFn"),a("OutboundLink")],1),t._v("（在YouTube上）。")]),t._v(" "),a("h3",{attrs:{id:"绘制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#绘制"}},[t._v("#")]),t._v(" 绘制")]),t._v(" "),a("p",[t._v("有了DOM、样式和布局，仍然不足以渲染页面。还要解决先画什么后画什么，即绘制顺序的问题。比如，z-index影响元素叠放，如果有这个属性，那简单地按元素在HTML中出现的顺序绘制就会出错。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/zukunft/MDImage/raw/master/img/20201111215444.png",alt:"绘制"}})]),t._v(" "),a("p",[t._v("因此，在这一步，主线程会遍历布局树并创建绘制记录。绘制记录是对绘制过程的注解，比如“先画背景，然后画文本，最后画矩形”。如果你用过"),a("code",[t._v("<canvas>")]),t._v("，应该更容易理解这一点。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/zukunft/MDImage/raw/master/img/640-20201111212257404.jpeg",alt:"绘制"}})]),t._v(" "),a("p",[t._v("渲染是一个流水线作业（pipeline）：前一道工序的输出就是下一道工序的输入。这意味着如果布局树有变化，则相应的绘制记录也要重新生成。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/zukunft/MDImage/raw/master/img/20201111214007.png",alt:"绘制"}})]),t._v(" "),a("p",[t._v("如果元素有动画，浏览器就需要每帧运行一次渲染流水线。目前显示器的刷新率为每秒60次（60fps），也就是说每秒更新60帧，动画会显得很流畅。如果中间缺了帧，那页面看起来就会“闪眼睛”。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/zukunft/MDImage/raw/master/img/640-20201111212304037.jpeg",alt:"绘制"}})]),t._v(" "),a("p",[t._v("即便渲染操作的频率能跟上屏幕刷新率，但由于计算发生在主线程上，而主线程可能因为运行JavaScript被阻塞。此时动画会因为阻塞被卡住。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/zukunft/MDImage/raw/master/img/640.png",alt:"绘制"}})]),t._v(" "),a("p",[t._v("此时，可以使用requestAnimationFrame()将涉及动画的JavaScript操作分块并调度到每一帧的开始去运行。对于耗时的不必操作DOM的JavaScript操作，可以考虑Web Worker（"),a("a",{attrs:{href:"http://t.cn/Ai9VBqs9",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://t.cn/Ai9VBqs9"),a("OutboundLink")],1),t._v("），避免阻塞主线程。")]),t._v(" "),a("h3",{attrs:{id:"合成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#合成"}},[t._v("#")]),t._v(" 合成")]),t._v(" "),a("p",[t._v("知道了文档结构、每个元素的样式、页面的几何关系，以及绘制顺序，接下来就该绘制页面了。具体该怎么绘制呢？把上述信息转换为屏幕上的像素叫做栅格化。")]),t._v(" "),a("p",[t._v("最简单的方式，可能就是把页面在当前视口中的部分先转换为像素。然后随着用户滚动页面，再移动栅格化的画框（frame），填补缺失的部分。Chrome最早的版本就是这样干的。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/zukunft/MDImage/raw/master/img/640.gif",alt:"合成"}})]),t._v(" "),a("p",[t._v("但现代浏览器会使用一个更高级的步骤叫合成。什么是合成？合成（composite）是将页面不同部分先分层并分别栅格化，然后再通过独立的合成器线程合成页面。这样当用户滚动页面时，因为层都已经栅格化，所以浏览器唯一要做的就是合成一个新的帧。而动画也可以用同样的方式实现：先移动层，再合成帧。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/zukunft/MDImage/raw/master/img/20201111214026.png",alt:"合成"}})]),t._v(" "),a("p",[t._v("怎么分层？为了确定哪个元素应该在哪一层，主线程会遍历布局树并创建分层树（这一部分在开发工具的“性能”面板中叫“Update Layer Tree”）。如果页面某些部分应该独立一层（如滑入的菜单）但却没有，那你可以在CSS中给它加上will-change属性（"),a("a",{attrs:{href:"http://t.cn/R7IJCx2",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://t.cn/R7IJCx2"),a("OutboundLink")],1),t._v("）来提醒浏览器。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/zukunft/MDImage/raw/master/img/640-20201111212312717.jpeg",alt:"合成"}})]),t._v(" "),a("p",[t._v("分层并不是越多越好，合成过多的层有可能还不如每帧都对页面中的一小部分执行一次栅格化更快。关于这里边的权衡，可以参考："),a("a",{attrs:{href:"http://t.cn/Ai9fiJiM",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://t.cn/Ai9fiJiM"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[t._v("创建了分层树，确定了绘制顺序，主线程就会把这些信息提交给合成器线程。合成器线程接下来负责将每一层转换为像素——栅格化。一层有可能跟页面一样大，此时合成器线程会将它切成小片（tile），再把每一片发给栅格化线程。栅格化线程将每一小片转换为像素后将它们保存在GPU的内存中。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/zukunft/MDImage/raw/master/img/640-20201111212316948.jpeg",alt:"合成"}})]),t._v(" "),a("p",[t._v("合成器线程会安排栅格化线程优先转换视口（及附近）的小片。而构成一层的小片也会转换为不同分辨率的版本，以便在用户缩放时使用。")]),t._v(" "),a("p",[t._v("所有小片都栅格化以后，合成器线程会收集叫做“绘制方块”（draw quad）的小片信息，以创建合成器帧。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("绘制方块：包含小片的内存地址、页面位置等合成页面相关的信息")])]),t._v(" "),a("li",[a("p",[t._v("合成器帧：由从多绘制方块拼成的页面中的一帧")])])]),t._v(" "),a("p",[t._v("创建好的合成器帧会通过IPC提交给浏览器进程。与此同时，为更新浏览器界面，UI线程可能还会添加另一个合成器帧；或者因为有扩展，其他渲染器进程也可能添加额外的合成器帧。所有这些合成器帧都会发送给GPU，以便最终显示在屏幕上。如果发生滚动事件，合成器线程会再创建新的合成器帧并发送给GPU。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/zukunft/MDImage/raw/master/img/640-20201111212321035.jpeg",alt:"合成器帧"}})]),t._v(" "),a("p",[t._v("使用合成的好处是不用牵扯主线程。合成器线程不用等待样式计算或JavaScript执行。这也是为什么“只需合成的动画”（"),a("a",{attrs:{href:"http://t.cn/Ai9fO8OW",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://t.cn/Ai9fO8OW"),a("OutboundLink")],1),t._v("）被认为性能最佳的原因。因为如果布局和绘制需要再次计算，那还得用到主线程。")]),t._v(" "),a("h2",{attrs:{id:"交互"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#交互"}},[t._v("#")]),t._v(" 交互")]),t._v(" "),a("p",[t._v("最后，我们看一看合成器如何处理用户交互。说到用户交互，有人可能只会想到在文本框里打字或点击鼠标。实际上，从浏览器的角度看，交互意味着来自用户的任何输入：鼠标滚轮转动、触摸屏幕、鼠标悬停，这些都是交互。")]),t._v(" "),a("p",[t._v("当用户交互比如触摸事件发生时，浏览器进程首先接收到该手势。但是，浏览器进程仅仅知道手势发生在哪里，因为标签页中的内容是渲染器进程处理。因此浏览器进程会把事件类型（如touchstart）及其坐标发送给渲染器进程。渲染器进程会处理这个事件，即根据事件目标来运行注册的监听程序。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/zukunft/MDImage/raw/master/img/20201111214042.png",alt:"交互"}})]),t._v(" "),a("p",[t._v("具体来说，输入事件是由渲染器进程中的合成器线程处理的。如前所述，如果页面上没有注册事件监听程序，那合成器线程可以完全独立于主线程生成新的合成器帧。但是如果页面上注册了事件监听程序呢？此时合成器线程怎么知道是否有事件要处理？")]),t._v(" "),a("p",[t._v("这就涉及一个概念，叫“非快速滚动区”（non-fast scrollable region）。我们知道，运行JavaScript是主线程的活儿。在页面合成后，合成器线程会给附加了事件处理程序的页面区域打上“Non-Fast Scrollable Region”的记号。有了这个记号，合成器线程就可以在该区域发生事件时把事件发送给主线程。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/zukunft/MDImage/raw/master/img/640-20201111212324433.jpeg",alt:"交互"}})]),t._v(" "),a("p",[t._v("如果事件发生在这个区域外，那合成器线程会继续合成新帧而不会等待主线程。")]),t._v(" "),a("p",[t._v("提到注册事件，有一个常见的问题要注意。很多人喜欢使用事件委托来注册处理程序。这是利用事件冒泡原理，把事件注册到最外层元素上，然后再根据事件目标决定是否执行任务。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'touchstart'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("evt")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("evt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" area"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n      evt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("preventDefault")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("一个事件处理程序就可以面向多个元素，这种高效的写法因此很流行。然而，从浏览器的角度来看，这样会导致整个页面被标记为“非快速滚动区”。这也就意味着，即便事件发生在那些不需要处理的元素上，合成器线程也要每次都跟主线程沟通，并等待它的回应。于是，合成器线程平滑滚动的优点就被抵销了。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/zukunft/MDImage/raw/master/img/640-20201111212327860.jpeg",alt:"交互"}})]),t._v(" "),a("p",[t._v("为缓冲使用事件委托带来的副作用，可以在注册事件时传入passive: true。这个选项会提醒浏览器，你仍然希望主线程处理事件，但与此同时合成器线程也可以继续合成新的帧。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'touchstart'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("evt")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" passive"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("此外，检查事件是否可以取消也是一个优化策略。假设页面中有一个盒子，你想限制盒子中的内容只能水平滚动。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/zukunft/MDImage/raw/master/img/640-20201111212334221.png",alt:"交互"}})]),t._v(" "),a("p",[t._v("使用passive: true可以让页面平滑滚动，但为了限制滚动方向而调用prevenDefault则不会避免垂直滚动。此时可以检查evt.cancelable。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pointermove'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("evt")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("evt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cancelable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n      evt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("preventDefault")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 阻止原生滚动")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n\n      * 其他操作\n\n      */")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" passive"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("p",[t._v("当然，也可以使用"),a("code",[t._v("CSS")]),t._v("规则如"),a("code",[t._v("touch-action")]),t._v("完全避免使用事件处理程序。")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#area")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("touch-action")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pan-x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("合成器线程把事件发送给主线程以后，要做的第一件事就是通过命中测试（"),a("code",[t._v("hit test")]),t._v("）找到事件目标。命中测试就是根据渲染进程生成的绘制记录数据和事件坐标找到下方的元素。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/zukunft/MDImage/raw/master/img/640-20201111212337722.jpeg",alt:"hit"}})]),t._v(" "),a("p",[t._v("另外，事件还有一个触发频率的问题。通常的触屏设备每秒会产生60~120次触碰事件，而鼠标每秒会产生约100次事件。换句话说，输入事件具有比每秒刷新60次的屏幕更高的保真度。")]),t._v(" "),a("p",[t._v("如果像touchmove这种连续事件，以每秒120次的频率发送到主线程，相比更慢的屏幕刷新率而言，就会导致过多的命中测试和JavaScript执行。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/zukunft/MDImage/raw/master/img/20201111214101.png",alt:"touchmove"}})]),t._v(" "),a("p",[t._v("为把对主线程过多的调用降至最少，Chrome会合并（coalesce）连续触发的事件（如wheel、mousewheel、mousemove、pointermove、touchmove），并将它们延迟到恰好在下一次"),a("code",[t._v("requestAnimationFrame")]),t._v("之前派发。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/zukunft/MDImage/raw/master/img/20201111214109.png",alt:"requestAnimationFrame"}})]),t._v(" "),a("p",[t._v("对于其他离散触发的事件，像keydown、keyup、mouseup、mousedown、touchstart和touchend会立即派发。")]),t._v(" "),a("p",[t._v("合并后的事件在多数情况下足以保证不错的用户体验。但是，在一些特殊应用场景下，比如需要基于touchmove事件的坐标生成轨迹的绘图应用，合并事件就会导致丢失一些坐标，影响所绘线条的平滑度。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/zukunft/MDImage/raw/master/img/20201111214118.png",alt:"getCoalescedEvents"}})]),t._v(" "),a("p",[t._v("此时，可以使用指针事件的getCoalescedEvents方法，取得被合并事件的信息：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pointermove'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" events "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCoalescedEvents")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" event "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" events"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pageX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" y "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pageY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用x和y坐标画线")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("这是个小小的结尾。相信不少前端开发者早已知道给"),a("code",[t._v("<script>")]),t._v("标签添加"),a("code",[t._v("defer")]),t._v("、"),a("code",[t._v("async")]),t._v("属性的作用。通过阅读本文，你应该也知道了为什么在注册事件监听器时最好传入"),a("code",[t._v("passive: true")]),t._v("选项，知道了"),a("code",[t._v("CSS")]),t._v("的"),a("code",[t._v("will-change")]),t._v("属性会让浏览器做出不同的决策。事实上，不止上面这些，看完看懂这篇文章，你甚至也会对其他关于浏览器性能优化的细节感到豁然开朗，从而对更多关于网页性能的话题会产生兴起。而这正是深入理解现代浏览器的重要意义和价值所在，因为它为我们打开了一扇大门。")]),t._v(" "),a("p",[t._v("原文链接：")]),t._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://developers.google.com/web/updates/2018/09/inside-browser-part1",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developers.google.com/web/updates/2018/09/inside-browser-part1"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://developers.google.com/web/updates/2018/09/inside-browser-part2",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developers.google.com/web/updates/2018/09/inside-browser-part2"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://developers.google.com/web/updates/2018/09/inside-browser-part3",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developers.google.com/web/updates/2018/09/inside-browser-part3"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://developers.google.com/web/updates/2018/09/inside-browser-part4",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developers.google.com/web/updates/2018/09/inside-browser-part4"),a("OutboundLink")],1)])])]),t._v(" "),a("p",[t._v("再次感谢原文作者："),a("strong",[t._v("Mariko Kosaka")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("她的网站："),a("a",{attrs:{href:"https://kosamari.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://kosamari.com/"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[t._v("她的Twitter："),a("a",{attrs:{href:"https://twitter.com/kosamari",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://twitter.com/kosamari"),a("OutboundLink")],1)])])])])}),[],!1,null,null,null);e.default=s.exports}}]);