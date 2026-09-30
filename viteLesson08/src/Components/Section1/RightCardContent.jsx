import React from 'react'
import {MoveRight} from 'lucide-react'

const RightCardContent = (props) => {
  return (
    <div>
      <div className='absolute top-0 left-0 h-full w-full  p-10 flex flex-col justify-between'>
              <h2 className='bg-white rounded-full h-13 w-13 flex justify-center items-center font-medium text-xl'>{props.id + 1}</h2>
              <div>
                  <p className='text-lg leading-relaxed text-white'>{props.intro}</p>
                  <div className='flex items-center align-middle justify-between mt-5'>
                      <button className='bg-blue-600 text-white  font-medium px-6 py-4 rounded-full'>{props.tag}</button>
                      <button className='bg-blue-600 text-white  font-xl px-5 py-3 w-14 h-14 rounded-full text-center'><MoveRight size={20}/></button>
                  </div>
              </div>
            </div>
    </div>
  )
}

export default RightCardContent
