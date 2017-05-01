// Module imports
import React from 'react'





export default class extends React.Component {
  render () {
    let contentClasses = [
      this.props.type,
      'content'
    ].join(' ')

    let frameClasses = [
      this.props.type,
      'frame',
      this.props.size
    ].join(' ')

    return (
      <div className={frameClasses}>
        <div className={contentClasses}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
