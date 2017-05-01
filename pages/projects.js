// Module imports
import React from 'react'
import Link from 'next/link'





// Component imports
import Head from '../components/Head'
import Header from '../components/Header'
import Page from '../components/Page'





export default class extends React.Component {

  /***************************************************************************\
    Public Methods
  \***************************************************************************/

  generateStyle (image) {
    let backgroundOverlay =
      'linear-gradient(' +
        'to bottom,' +
        'rgba(0, 0, 0, 0.5),' +
        'rgba(0, 0, 0, 0.5)' +
      ')'

    return {
      backgroundImage: `${backgroundOverlay}, url(/static/images/portfolio/${image})`
    }
  }

  render () {
    return (
      <Page title={this.title}>
        <header className="page-header">
          <h2>{this.title}</h2>
        </header>

        <section>
          <ul className="category-list">
            <li>
              <Link href="/projects/work">
                <a style={this.generateStyle('narjillos.gif')}>
                  <header>
                    <i className="fa fa-briefcase" />
                    Work
                  </header>

                  <footer>
                    <p>I've been doing this whole "programming" thing for a while, so this collection shows off all of the public work that I've done.</p>
                  </footer>
                </a>
              </Link>
            </li>

            <li>
              <Link href="/projects/experiments">
                <a style={this.generateStyle('narjillos.gif')}>
                  <header>
                    <i className="fa fa-flask" />
                    Experiments
                  </header>

                  <footer>
                    <p>I write code pretty much 24/7, but most of it's just for fun. This is a collection of the less serious projects that I've done.</p>
                  </footer>
                </a>
              </Link>
            </li>

            <li>
              <Link href="/projects/gifs">
                <a style={this.generateStyle('merfong.gif')}>
                  <header>
                    <i className="fa fa-file" />
                    GIFs
                  </header>

                  <footer>
                    <p>I've been doing animation for quite a while, so not long ago I decided to take my skillz to the next level and start creating high-quality GIFs.</p>
                  </footer>
                </a>
              </Link>
            </li>
          </ul>
        </section>
      </Page>
    )
  }





  /***************************************************************************\
    Getters
  \***************************************************************************/

  get title () {
    return 'Projects'
  }
}
