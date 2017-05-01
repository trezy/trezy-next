// Module imports
import marked from 'marked'
import moment from 'moment'
import React from 'react'





// Service imports
import BlogService from '../services/BlogService'





export default class extends React.Component {

  /***************************************************************************\
    Public Methods
  \***************************************************************************/

  render () {
    let comments = this.props.data.map(comment => {
      return <article dangerouslySetInnerHTML={{ __html: marked(comment.text) }} />
    })

    return (
      <aside>
        {comments}
      </aside>
    )
  }
}
