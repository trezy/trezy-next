// Module imports
import React from 'react'





// Component imports
import Head from '../components/Head'
import Header from '../components/Header'





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
          <h3>Digital</h3>

          <p>Our goal is to ensure you have a digital solution that meets your real world needs. Rather than following the fads or locking into a single technology, we're committed to fast, pragmatic development workflows that guarantee results.</p>

          <p className="tags">RESPONSIVE DESIGN / USER EXPERIENCE / CONTENT MANAGEMENT SYSTEM QUALITY ASSURANCE &amp; USABILITY TESTING / ANALYTICS AND REPORTING / FRONT &amp; BACK-END DEVELOPMENT / APP DEVELOPMENT / HOSTING &amp; SERVER MANAGEMENT / API INTEGRATION</p>
        </section>

        <section>
          <h3>Search</h3>

          <p>Search is cool.</p>

          <p className="tags">SEARCH ENGINE OPTIMIZATION / SEARCH ENGINE MARKETING / EMAIL &amp; SMS MARKETING</p>
        </section>

        <section>
          <h3>Agile</h3>

          <p>We can make you better at Agile.</p>

          <p className="tags">AGILE / SCRUM / KANBAN</p>
        </section>
      </Page>
    )
  }





  /***************************************************************************\
    Getters
  \***************************************************************************/

  get title () {
    return 'Services'
  }
}
