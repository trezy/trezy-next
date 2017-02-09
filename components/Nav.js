// Module imports
import Link from 'next/link'
import React from 'react'





export default class Header extends React.Component {
  render () {
    return (
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    )
  }
}
