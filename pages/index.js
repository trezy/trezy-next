// Module imports
import React from 'react'





// Component imports
import Head from '../components/Head'
import Hero from '../components/Hero'
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

        <Hero>
          <h1>This is a hero!</h1>

          <p>This is its text!</p>
        </Hero>
      </div>
    )
  }





  /***************************************************************************\
    Getters
  \***************************************************************************/

  get title () {
    return 'Home'
  }
}
