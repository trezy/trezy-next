// Module imports
import React from 'react'
import Link from 'next/link'





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

        <main>
          <Hero>
            <h1>This is a hero!</h1>

            <p>This is its text!</p>

            <Link href="/services">Hire us!</Link>
          </Hero>
        </main>
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
