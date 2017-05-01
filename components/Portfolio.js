// Module imports
import React from 'react'





// Component imports
import Device from './Device'





export default class extends React.Component {
  render () {
    let children

    if (Array.isArray(this.props.children)) {
      children = this.props.children.map((item, index) => {
        return (
          <li key={index}>{item}</li>
        )
      })

    } else {
      children = (
        <li>{this.props.children}</li>
      )
    }


    return (
      <ul className="portfolio">
        {children}
      </ul>
    )
  }
}
