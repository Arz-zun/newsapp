import React, { Component } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
export class Navbar extends Component {



  render() {
    return (
      <section className='navbar_container'>
        <div className="logo">MERO <span>SAMACHAR</span></div>
        <ul className="navbar_item">
          <li> <Link to="/">Home</Link></li>
          <li> <Link to="/sports">Sports</Link></li>
          <li> <Link to="/politics">Politics</Link></li>
          <li> <Link to="/gallery">Gallery</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          {/* <li> <Link to="/about">About</Link></li> */}
          {/* <li> <Link to="/test">Test</Link></li>
          <li> <Link to="/again">API Fetched</Link></li> */}

        </ul>
        <div className='search'>
          <input type="text" placeholder='search news' />
          <button>search</button>
        </div>
      </section>
    )
  }
}

export default Navbar