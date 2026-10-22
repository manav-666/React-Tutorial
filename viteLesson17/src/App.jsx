import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const App = () => {

  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  function aChanging(){
    console.log("A ki value change ho gyi");
  }

  function bChanging(){
    console.log("B ki value change ho gyi");
  }

  useEffect(function(){
    console.log("Use effect is Running....");
  },[a])
  return (
    <div className='bg-gray-700 h-screen'>
      <h1 className='text-3xl font-bold p-5 tracking-wider text-white'>A is {a}</h1>
      <h1 className='text-3xl font-bold p-5 tracking-wider text-white'>B is {b}</h1>
      <button onClick={()=>{
        setA(a+1)
      }} className='bg-gray-300 p-4 rounded-md px-5 m-5'>Change A</button>
      <button onClick={()=>{
        setB(b-1)
      }} className='bg-gray-300 p-4 rounded-md px-5 m-5'>Change B</button>
    </div>
  )
}

export default App
