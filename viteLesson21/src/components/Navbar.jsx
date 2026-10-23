import React from 'react'
import Nav2 from './Nav2'

const Navbar = (props) => {
  return (
    <div className='nav'>
      <h2 className='text-2xl font-bold tracking-wider text-white'>Sheriyans</h2>
      <Nav2 Theme={props.Theme} />
    </div>
  )
}

export default Navbar
