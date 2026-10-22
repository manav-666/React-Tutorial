import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <div className='flex items-center justify-between p-5 bg-blue-400'>
        <h3 className='text-2xl text-white'>Sheriyans</h3>
        <div className="flex gap-10 ">
          <Link className='active:scale-95' to='/'>Home</Link>
          <Link className='active:scale-95' to='/about'>About</Link>
          <Link className='active:scale-95' to='/contact'>Contact</Link>
          <Link className='active:scale-95' to='/product'>Product</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
