import React from 'react'
import { CornerDownRight } from 'lucide-react'
const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-6 px-15 '>
      <h4 className='bg-black text-white uppercase px-6 py-3 rounded-full'>Target Audience</h4>
      <button className='bg-gray-200 px-6 py-2 uppercase rounded-full tracking-widest text-sm flex items-center gap-2 text-gray-400'> <CornerDownRight />Digital Banking Platform</button>
    </div>
  )
}

export default Navbar
