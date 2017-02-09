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
      <div>
        <Head title={this.title} />

        <Header />

        <main>
          <p>{this.title}</p>
        </main>
      </div>
    )
  }





  /***************************************************************************\
    Getters
  \***************************************************************************/

  get title () {
    return 'Contact'
  }
}
