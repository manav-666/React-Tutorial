import React from 'react'
import {Download} from 'lucide-react'
import { RiGithubFill, RiLinkedinFill, RiMailFill } from "@remixicon/react";
const LeftContent = () => {
  return (
    <div className='mx-30 pt-8'>
      <div>
        <h3 className='font-sans font-medium text-3xl'>Hello, I'm</h3>
        <h1 className='text-5xl pt-2 tracking-wider'><span className='font-sans font-bold pr-3'>Manav</span><span className='font-sans font-bold '>Bari</span></h1>
        <h2 className='text-4xl pt-2'><span className='font-sans font-semibold tracking-wide'>[Software Developer]</span></h2>
        <h4 className='py-8 tracking-wider'><span className='font-sans'>I build practical and user-friendly applications <br /> using Java, Javascript, React and modern tools. <br />I enjoy solving problems and learning new technologies.</span></h4>
      </div>
      <div className='flex items-center gap-10'>
        <button className='bg-blue-500 text-white p-3 rounded-md font-semibold'>View My Project</button>
        <button className='DownloadBtn flex gap-3 p-3 rounded-md font-semibold border text-white'><Download color='blue'/><span className='text-blue-600 '>Download Resume</span></button>
      </div>
      <div className='flex gap-5'>
        <button className='p-0.5 rounded-sm'><RiGithubFill color='black' size={22}/></button>
        <button className='text-blue bg-blue-700 te p-0.5 rounded-sm'><RiLinkedinFill size={20} color='white' size={20} /></button>
        <button className='text-white bg-blue-700 rounded-sm p-0.5'><RiMailFill color='white' size={20}/></button>
      </div>
    </div>
  )
}

export default LeftContent
