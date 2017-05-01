// Module imports
import React from 'react'





// Component imports
import Device from '../../components/Device'
import Page from '../../components/Page'
import Portfolio from '../../components/Portfolio'





export default class extends React.Component {

  /***************************************************************************\
    Public Methods
  \***************************************************************************/

  render () {
    return (
      <Page title={this.title}>
        <header className="page-header">
          <h2>{this.title}</h2>
        </header>

        <section>
          <h3>Merfong</h3>

          <p><img src="/static/images/portfolio/merfong.gif" /></p>
        </section>

        <section>
          <h3>Klug for President</h3>

          <p><img src="/static/images/portfolio/klug4prez.gif" /></p>
        </section>

        <section>
          <h3>Lotsa Ryland</h3>

          <p><img src="/static/images/portfolio/lotsa-ryland.gif" /></p>
        </section>
      </Page>
    )
  }





  /***************************************************************************\
    Getters
  \***************************************************************************/

  get title () {
    return 'GIFs'
  }
}
