import React from 'react'
import {Download} from 'lucide-react'
const Navbar = () => {
  return (
    <div>
      <nav className='flex justify-around items-center '>
        <div className='text-2xl'>
            <span className='text-black font-sans font-bold'>[FirstName]</span>
            <span className='text-blue-700 font-sans  font-bold'>[SureName]</span>
        </div>
        <ul className='flex gap-8 tracking-wider'>
            <li className='font-bold font-sans'>Home</li>
            <li className='font-bold font-sans'>About</li>
            <li className='font-bold font-sans'>Skills</li>
            <li className='font-bold font-sans'>Project</li>
            <li className='font-bold font-sans'>Eduction</li>
            <li className='font-bold font-sans'>Contact</li>
        </ul>
        <div ><button className='flex text-white bg-blue-800 p-3 rounded-xl mt-3'><Download />Download Resume</button></div>
      </nav>
    </div>
  )
}

export default Navbar
