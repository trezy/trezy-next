// Module imports
import React from 'react'
import Link from 'next/link'





// Component imports
import Blog from '../../components/Blog'
import Page from '../../components/Page'





export default class extends React.Component {

  /***************************************************************************\
    Public Methods
  \***************************************************************************/

  render () {
    return (
      <Page title={this.title}>
        <Blog id="573dd2235182837e0d2cb856" />
      </Page>
    )
  }





  /***************************************************************************\
    Getters
  \***************************************************************************/

  get title () {
    return 'On Great Wolf | Blog'
  }
}
