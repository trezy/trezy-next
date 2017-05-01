// Module imports
import React from 'react'





// Service imports
import BlogService from '../services/BlogService'





export default class extends React.Component {

  /***************************************************************************\
    Public Methods
  \***************************************************************************/

  constructor (props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      content: ''
    }
  }

  handleSubmit (event) {
    event.preventDefault()

    BlogService.addComment(this.state.id, this.state.content)
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea />

        <button type="submit">Submit!</button>
      </form>
    )
  }
}
