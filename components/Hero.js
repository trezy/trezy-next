// Module imports
import React from 'react'





export default class extends React.Component {
  render () {
    return (
      <div className="hero">
        {this.props.children}
      </div>
    )
  }
}
