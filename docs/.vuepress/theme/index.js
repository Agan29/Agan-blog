const path = require("path")
const setFrontmatter = require("./node_utils/setFrontmatter")
const getSidebarData = require("./node_utils/getSidebarData")
const { createPage, deletePage } = require("./node_utils/handlePage")
const chalk = require("chalk") // 命令行打印美化
const yaml = require("js-yaml") // yaml转js
const log = console.log

module.exports = (themeConfig, ctx) => {
  const { sourceDir, siteConfig } = ctx
  // 自动生成结构化侧边栏
  const sidebar = themeConfig.sidebar
  if (
    sidebar === "structuring" ||
    (sidebar && sidebar.mode === "structuring")
  ) {
    const collapsable = themeConfig.sidebar.collapsable === false ? false : true
    const sidebarData = getSidebarData(sourceDir, collapsable)

    if (sidebarData) {
      themeConfig.sidebar = sidebarData
      log(
        chalk.blue("tip ") +
          chalk.green("add sidebar data. 侧边栏数据成功生成。")
      )
    } else {
      themeConfig.sidebar = "auto"
      log(
        chalk.yellow(
          'warning: fail to add sidebar data, switch to "auto". 未能添加侧边栏数据，将切换为“auto”。'
        )
      )
    }
  }
  const enableSmoothScroll = themeConfig.smoothScroll === true
  // resolve algolia
  //   const isAlgoliaSearch =
  //     themeConfig.algolia ||
  //     Object.keys((siteConfig.locales && themeConfig.locales) || {}).some(
  //       base => themeConfig.locales[base].algolia
  //     )

  return {
    alias() {
      //   return {
      //     "@AlgoliaSearchBox": isAlgoliaSearch
      //       ? path.resolve(__dirname, "components/AlgoliaSearchBox.vue")
      //       : path.resolve(__dirname, "noopModule.js")
      //   }
    },
    plugins: [
      ["@vuepress/active-header-links", options.activeHeaderLinks],
      "@vuepress/search",
      "@vuepress/plugin-nprogress",
      ["smooth-scroll", enableSmoothScroll],
      [
        "container",
        {
          type: "note",
          defaultTitle: {
            "/": "笔记",
            "/en/": "NOTE"
          }
        }
      ],
      [
        "container",
        {
          type: "tip",
          defaultTitle: {
            "/": "提示",
            "/en/": "TIP"
          }
        }
      ],
      [
        "container",
        {
          type: "warning",
          defaultTitle: {
            "/": "注意",
            "/en/": "WARNING"
          }
        }
      ],
      [
        "container",
        {
          type: "danger",
          defaultTitle: {
            "/": "警告",
            "/en/": "WARNING"
          }
        }
      ],
      [
        "container",
        {
          type: "right",
          defaultTitle: ""
        }
      ],
      [
        "container",
        {
          type: "theorem",
          before: info =>
            `<div class="custom-block theorem"><p class="title">${info}</p>`,
          after: "</div>"
        }
      ],
      [
        "container",
        {
          type: "details",
          before: info =>
            `<details class="custom-block details">${
              info ? `<summary>${info}</summary>` : ""
            }\n`,
          after: () => "</details>\n",
          defaultTitle: {
            "/": "点击查看",
            "/en/": "DETAILS"
          }
        }
      ],

      // 内容居中容器
      [
        "container",
        {
          type: "center",
          before: info => `<div class="center-container">`,
          after: () => "</div>"
        }
      ]

      // 卡片列表
      //   [
      //     "container",
      //     {
      //       type: CARD_LIST,
      //       render: (tokens, idx) => {
      //         // tokens 是整个md文件的虚拟dom结构数组
      //         // idx 是tokens中':::' 所在的索引，而且是当前指定type的':::'，分别有开始和结束两次的idx
      //         // if (tokens[idx].nesting === 1) { // 开头的 ':::' 标记
      //         // } else { // 结束的 ':::' 标记
      //         // }
      //         // 注意：修改这里面的代码后需要在md文件保存一下才会重新执行渲染
      //         return renderCardList(tokens, idx, CARD_LIST)
      //       }
      //     }
      //   ],

      //   // 图文卡片列表
      //   [
      //     "container",
      //     {
      //       type: CARD_IMG_LIST,
      //       render: (tokens, idx) => {
      //         return renderCardList(tokens, idx, CARD_IMG_LIST)
      //       }
      //     }
      //   ]
    ]
  }
}
