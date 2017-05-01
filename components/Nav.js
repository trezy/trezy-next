// Module imports
import Link from 'next/link'
import React from 'react'




// Constants
const links = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Blog',
    path: '/blog'
  },
  {
    name: 'Projects',
    path: '/projects'
  },
  {
    name: 'Contact',
    path: '/contact'
  }
]





export default class extends React.Component {
  render () {
    return (
      <nav>
        <ul className="site">
          {links.map((link, index) => {
            let classes = ''

//            if (global.location && global.location.pathname === link.path) {
//              console.log(global.location.pathname)
//              classes = 'active'
//            }

            return (
              <li key={index}>
                <Link href={link.path}>
                  <a className={classes}>{link.name}</a>
                </Link>
              </li>
            )
          })}
        </ul>

        <ul className="social">
          <li><a href="//github.com/trezy" title="Github"><i className="fa fa-fw fa-github-alt"></i></a></li>
          <li><a href="//codepen.io/trezy" title="Codepen"><i className="fa fa-codepen fa-fw"></i></a></li>
          <li><a href="//twitter.com/trezytv" title="Codepen"><i className="fa fa-fw fa-twitter"></i></a></li>
        </ul>
      </nav>
    )
  }
}
