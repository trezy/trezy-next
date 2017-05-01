// Module imports
import React from 'react'
import Link from 'next/link'





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
          <h3>Election Tracker 2016</h3>

          <p><a href="//github.com/trezy/election-2016">Election Tracker 2016</a> is a small responsive application I wrote to stay up-to-date on election night. It scrapes it's data from Politico's tallies. Next election I'd like to add a lot more fanciness, like indicators when counts change, and pull data from multiple sources to average out their results.</p>

          <ul className="bulleted">
            <li><a href="//election.trezy.com/">Check it out</a></li>
            <li>View the source <a href="//github.com/trezy/election-2016">on Github</a></li>
          </ul>

          <Portfolio>
            <Device size="small" type="macbook">
              <iframe src="//election.trezy.com" />
            </Device>
            <Device size="small" type="iphone">
              <iframe src="//election.trezy.com" />
            </Device>
          </Portfolio>
        </section>

        <section>
          <h3>Fuelrats.com</h3>

          <p>Fuelrats.com</p>

          <ul className="bulleted">
            <li><a href="//election.trezy.com/">Check it out</a></li>
            <li>View the source <a href="//github.com/trezy/election-2016">on Github</a></li>
          </ul>

          <Portfolio>
            <Device size="small" type="macbook">
              <img src="/static/images/portfolio/fuelrats.desktop.png" />
            </Device>
            <Device size="small" type="ipad">
              <img src="/static/images/portfolio/fuelrats.ipad.png" />
            </Device>
          </Portfolio>
        </section>
      </Page>
    )
  }





  /***************************************************************************\
    Getters
  \***************************************************************************/

  get title () {
    return 'Work'
  }
}
