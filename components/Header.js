// Module imports
import React from 'react'





// Component imports
import Nav from './Nav'





export default class Header extends React.Component {
  render () {
    return (
      <header>
        <div className="brand" />

        <Nav />
      </header>
    )
  }
}
