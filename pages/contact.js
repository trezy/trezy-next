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
          <ul>
            <li>Telephone: <a href="tel:+1 (270) 210-2618">+1 (270) 210-2618</a></li>
            <li>Email: <a href="mailto:tre@trezy.com">tre@trezy.com</a></li>
          </ul>
        </section>
      </Page>
    )
  }





  /***************************************************************************\
    Getters
  \***************************************************************************/

  get title () {
    return 'Contact'
  }
}
