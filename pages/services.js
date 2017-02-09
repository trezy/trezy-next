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

        <p>{this.title}</p>
      </div>
    )
  }





  /***************************************************************************\
    Getters
  \***************************************************************************/

  get title () {
    return 'Services'
  }
}
