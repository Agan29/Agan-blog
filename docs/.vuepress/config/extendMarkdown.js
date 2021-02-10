const mdContainer = require("markdown-it-container")

const spoiler = md => ({
  validate: function(params) {
    return params.trim().match(/^spoiler\s+(.*)$/)
  },

  render: function(tokens, idx) {
    var m = tokens[idx].info.trim().match(/^spoiler\s+(.*)$/)

    if (tokens[idx].nesting === 1) {
      // opening tag
      return "<details><summary>" + md.utils.escapeHtml(m[1]) + "</summary>\n"
    } else {
      // closing tag
      return "</details>\n"
    }
  }
})
const ana = md => ({
  validate: function(params) {
    return params.trim().match(/^ana\s+(.*)$/)
  },
  render: function(tokens, idx) {
    var m = tokens[idx].info.trim().match(/^ana\s+(.*)$/)

    if (tokens[idx].nesting === 1) {
      // opening tag
      return (
        "<div class='ag-ana'><div class='hidden'>" +
        md.utils.escapeHtml(m[1]) +
        "</div>\n"
      )
    } else {
      // closing tag
      return "</div>\n"
    }
  }
})

module.exports = md => {
  md.set({ breaks: true })
  md.use(mdContainer, "spoiler", spoiler(md))
  md.use(mdContainer, "ana", ana(md))
}
