// Module imports
import React from 'react'
import Link from 'next/link'





// Component imports
import Page from '../components/Page'





export default class extends React.Component {

  /***************************************************************************\
    Public Methods
  \***************************************************************************/

  render () {
    return (
      <Page title={this.title}>
        <header className="page-header">
          <h2>{this.title}</h2>
        </header>

        <ol className="blog-list">
          <li className="year">
            <header>
              2014
            </header>

            <ol>
              <li><Link href="/blog/on-handlebars-and-template-tags"><a>On Handlebars and Template Tags</a></Link></li>
              <li><Link href="/blog/on-dropdown-menu-transitions"><a>On Dropdown Menu Transitions</a></Link></li>
              <li><Link href="/blog/on-amazon"><a>On Amazon</a></Link></li>
              <li><Link href="/blog/on-great-wolf"><a>On Great Wolf</a></Link></li>
            </ol>
          </li>

          <li className="year">
            <header>
              2013
            </header>

            <ol>
              <li><Link href="/blog/on-advanced-box-shadows"><a>On Advanced Box Shadows</a></Link></li>
              <li><Link href="/blog/on-saving-characters"><a>On Saving Characters</a></Link></li>
            </ol>
          </li>

          <li className="year">
            <header>
              2012
            </header>

            <ol>
              <li><Link href="/blog/on-variables-calculations-and-new-units"><a>On Variables, Calculations, and New Units</a></Link></li>
              <li><Link href="/blog/on-css-tooltips"><a>On CSS Tooltips</a></Link></li>
              <li><Link href="/blog/on-responsive-design-part-1"><a>On Responsive Design: Part 1</a></Link></li>
            </ol>
          </li>
        </ol>
      </Page>
    )
  }





  /***************************************************************************\
    Getters
  \***************************************************************************/

  get title () {
    return 'Blog'
  }
}
