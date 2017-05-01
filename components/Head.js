import NextHead from 'next/head'
import React from 'react'

import '../bootstrap/marked.js'

export default class extends React.Component {
  render () {
    let adsenseSnippet = '(adsbygoogle = window.adsbygoogle || []).push({' +
      'google_ad_client: "ca-pub-9749247943500937",' +
      'enable_page_level_ads: true' +
    '});'

    return (
      <NextHead>
        <title>{this.props.title} | Trezy.io</title>

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <link href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
        <link href="/static/compiled/lib.css" rel="stylesheet" />
        <link href="/static/compiled/app.css" rel="stylesheet" />

        <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
        <script dangerouslySetInnerHTML={{ __html: adsenseSnippet }} />

        <script src="https://drrjhlchpvi7e.cloudfront.net/libs/stamplay-js-sdk/2.1.4/stamplay.min.js"></script>
        <script dangerouslySetInnerHTML={{__html: 'Stamplay.init(\'trezy\')'}}></script>
      </NextHead>
    )
  }
}
