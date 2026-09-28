import React from 'react'
// import '../styles/Header.css'
import header from '../header/Header.module.css'
const Header = () => {
  return (
    <div>
      <nav className={header.head}>
        <div className="logo">Code With Harry</div>
        <button>Log In</button>
      </nav>
    </div>
  )
}

export default Header
