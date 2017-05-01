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
          <h3>Narjillos.js</h3>

          <p><a href="//github.com/trezy/Narjillos.js">Narjillos.js</a> is a Javascript port of the <a href="https://github.com/nusco/narjillos">original Narjillos</a> project by <a href="//github.com/nusco">Paolo "Nusco" Perrotta</a>.</p>

          <p>The goal of the project is to create a simulation of life and evolution in a digital petri dish.</p>

          <ul className="bulleted">
            <li><a href="//narjillos.trezy.com/">Try it out</a></li>
            <li>View the source <a href="//github.com/trezy/Narjillos.js">on Github</a></li>
          </ul>

          <Portfolio>
            <Device size="small" type="macbook">
              <iframe src="//narjillos.trezy.com" />
            </Device>
            <Device size="small" type="iphone">
              <iframe src="//narjillos.trezy.com" />
            </Device>
          </Portfolio>
        </section>

        <section>
          <h3>Rafael.js</h3>

          <p><a href="//github.com/trezy/rafael">Rafael</a> is an Javascript scheduling library. It leverages <code>requestAnimationFrame</code>, <code>setTimeout</code>, and <code>setInterval</code> to create a robust <abbr title="Application Program Interface">API</abbr> for queuing tasks, such as high speed redraws in 3D applications.</p>

          <ul className="bulleted">
            <li>View the source <a href="//github.com/trezy/rafael">on Github</a></li>
          </ul>

          <Portfolio />
        </section>

        <section>
          <h3>Turk</h3>

          <p><a href="//github.com/trezy/Turk">Turk</a> is a desktop <abbr title="Internet Relay Chat">IRC</abbr> client. It's design is based off the UI in the game <a href="//www.elitedangerous.com/">Elite: Dangerous</a>, and it's built using <a href="//electron.atom.io">Electron</a> and <a href="marionettejs.com">Backbone.Marionette</a>.</p>

          <ul className="bulleted">
            <li>View the source <a href="//github.com/trezy/Turk">on Github</a></li>
          </ul>

          <Portfolio>
            <Device size="small" type="macbook">
              <img src="/static/images/portfolio/turk.png" />
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
    return 'Experiments'
  }
}
