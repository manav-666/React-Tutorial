import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <>
      <div className='flex justify-center gap-20 px-4 py-2 text-xl'>
        <Link className='bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 px-7 py-2 rounded-full focus:font-bold active:scale-95' to='/product/men' >Men</Link>
        <Link className='bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 px-7 py-2 rounded-full focus:font-bold active:scale-95' to='/product/women' >Women</Link>
        <Link className='bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 px-7 py-2 rounded-full focus:font-bold active:scale-95' to='/product/kids' >Kid's</Link>
      </div>      
      <Outlet/>
    </>
  )
}

export default Product
