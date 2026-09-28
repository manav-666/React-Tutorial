import React from 'react'
import {BuildingComplex} from 'lucide-react' 
const Card = (props) => {
    //console.log(props);
    
  return (
    <>
      <div className="parent m-10 flex">
        <div className="card bg-white-300 w-100 border-gray-200 border-4">
            <div className="top flex justify-between p-5">
                <button className="status bg-green-400 border-0 p-2 rounded-xl text-white font-bold">{props.status}</button>
                <div className="payment text-2xl font-semibold font-sans">{props.pay}</div>
            </div>
            <div className="center justify-center">
                <div className="img-center flex justify-center">
                    <img className='rounded-full h-30 w-30 object-cover' src={props.profilePhoto} alt="" />
                </div>
                <div className="details text-center top-10">
                    <p className='text-3xl font-medium font-sans'>{props.userName}</p>
                    <p className='text-gray-400 font-medium text-1xl'>{props.skill}</p>
                    <p className='text-blue-400 flex justify-center gap-1'><span><BuildingComplex /></span><span>{props.company}</span></p>
                </div>
            </div>
            <div className="mid-center flex gap-5 mt-5 justify-center">
                <p className='px-2 rounded-full bg-blue-300 font-semibold'>{props.skill1}</p>
                <p className='px-2 rounded-full bg-blue-300 font-semibold'>{props.skill2}</p>
                <p className='px-2 rounded-full bg-blue-300 font-semibold'>{props.skill3}</p>
                <p className='px-2 rounded-full bg-blue-300 font-semibold'>{props.skill4}</p>
            </div>
            <div className="description text-center px-10 mt-5 font-semibold text-1.5xl">
                {props.description}
            </div>
            <div className="bottom border-t border-gray-300 text-center p-8 mt-7">
                <button className='font-bold'>VIEW PROFILE</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Card
