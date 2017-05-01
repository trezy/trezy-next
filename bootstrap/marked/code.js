import marked from 'marked'





marked.Renderer.prototype.code = function (code, lang, escaped) {
  if (this.options.highlight) {
    let out = this.options.highlight(code, lang)

    if (out != null && out !== code) {
      escaped = true
      code = out
    }
  }

  if (!lang) {
    return '<pre><code>'
      + (escaped ? code : escape(code, true))
      + '\n</code></pre>'
  }

  // Add the language class to the `<pre>` tags so that Prism can style them
  // properly

  let languageClass = this.options.langPrefix + escape(lang, true)

  return `<pre class="${languageClass}"><code class="${languageClass}">`
    + (escaped ? code : escape(code, true))
    + '\n</code></pre>\n'
}
