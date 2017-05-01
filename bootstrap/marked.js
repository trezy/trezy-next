// Module imports
import katex from 'katex'
import marked from 'marked'
import Prism from 'prismjs'

import './marked/code'
import './marked/latex'





/*****************************************************************************\
  Set the default marked options
\*****************************************************************************/

marked.setOptions({
  highlight: (code, language) => {
    return Prism.highlight(code, Prism.languages[language])
  },
  langPrefix: 'language-'
})
