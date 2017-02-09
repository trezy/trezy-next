import NextHead from 'next/head'
import React from 'react'

export default class Head extends React.Component {
  render () {
    return (
      <NextHead>
        <title>Trezy.io | {this.props.title}</title>

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <link href="/static/compiled/app.css" rel="stylesheet" />
      </NextHead>
    )
  }
}
