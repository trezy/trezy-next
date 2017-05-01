// Module imports
import React from 'react'
import Link from 'next/link'





// Component imports
import Device from '../components/Device'
import Page from '../components/Page'
import Portfolio from '../components/Portfolio'





export default class extends React.Component {

  /***************************************************************************\
    Public Methods
  \***************************************************************************/

  render () {
    return (
      <Page title={this.title}>
        <header className="page-header">
          <h2>My name is Trezy. I'm a web developer. I do developy things.</h2>
        </header>


        <p>I got my start in computers about a million years ago when the original <abbr title="Nintendo Entertainment System">NES</abbr> was a thing. An absolutely infuriating round of Super Mario Bros. caused this angry toddler to yank the system off the top of the TV. The beautiful result was a pile of plastic and electronics that inspired me to start asking, "How does this work?"</p>

        <p>After a burgeoning youth full of busted electronics I built up an interest in the softer side of technology. I built a few websites, wrote a few scripts, and set up my first server, constructing a perfect platform off of which I would launch my career as a <abbr title="Senior Software Engineer">web dude</abbr>. I've been doing my thing for ~15 years now and I still love every second of it.</p>

        <h3>I play games.</h3>

        <p>Video games, board games, and tabletop <abbr title="Pen & Paper">P&amp;P</abbr> games are all awesome.</p>

        <h3>I like to write.</h3>

        <p>I spend a fair amount of time writing stuff that I'll never publish but you can see some of my work on <a href="//medium.com/@trezytv">Medium</a> or <a href="">here, on my blog</a>.</p>
      </Page>
    )
  }





  /***************************************************************************\
    Getters
  \***************************************************************************/

  get title () {
    return 'Home'
  }
}
