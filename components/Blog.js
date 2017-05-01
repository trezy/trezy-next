// Module imports
import moment from 'moment'
import React from 'react'





// Service imports
import BlogService from '../services/BlogService'





// Component imports
import Comments from './Comments'





export default class extends React.Component {

  /***************************************************************************\
    Private Methods
  \***************************************************************************/

  async _getBlog () {
    BlogService.getById(this.props.id)
    .then(response => {
      this.setState(response)
    })
    .catch(error => {
      throw error
    })
  }





  /***************************************************************************\
    Public Methods
  \***************************************************************************/

  componentWillMount () {
    this._getBlog()
  }

  constructor (props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      renderedContent: null,
      title: null
    }
  }

  handleSubmit (event) {
    event.preventDefault()

    let form = event.target

    BlogService.addComment(this.state.id, form.querySelector('textarea').value)
  }

  render () {
    let comments

    if (this.state.actions) {
      comments = <Comments data={this.state.actions.comments} />
    }

    return (
      <div>
        <article>
          <header className="page-header">
            <h2>{this.state.title}</h2>

            <small>Posted <time>{moment(this.state.dt_create).format('DD MMM, YYYY')}</time></small>
            {
              this.state.dt_create !== this.state.dt_update &&
              <small>Last updated <time>{moment(this.state.dt_update).format('DD MMM, YYYY')}</time></small>
            }
          </header>

          <div dangerouslySetInnerHTML={{__html: this.state.renderedContent}} />
        </article>

        {comments}

        <form onSubmit={this.handleSubmit}>
          <textarea />

          <button type="submit">Submit!</button>
        </form>
      </div>
    )
  }
}
