import katex from 'katex'
import marked from 'marked'





let originalLex = marked.Lexer.lex

marked.Lexer.lex = function (src, options) {
  src = src.replace(/^\$\$((?:[\s\S]+?))\$\$/gm, function (match, content) {
    return katex.renderToString(content, { displayMode: true })
  })

  src = src.replace(/^\$((?:[\s\S]+?))\$/gm, function (match, content) {
    return katex.renderToString(content)
  })

  return originalLex(src, options)
}
