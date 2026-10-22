import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex py-4 px-8 justify-between bg-cyan-700'>
      <h2 className='text-2xl font-bold font-sans tracking-widest'>Sheriyans</h2>
      <div className='flex gap-8'>
        <Link className='text-lg font-medium tracking-wider ' to='/'>Home</Link>
        <Link className='text-lg font-medium tracking-wider' to='/about'>About</Link>
        <Link className='text-lg font-medium tracking-wider' to='/courses'>Courses</Link>
        <Link className='text-lg font-medium tracking-wider' to='/product'>Product</Link>
        
      </div>
    </div>
  )
}

export default Navbar
