import React, { useEffect, useState } from 'react'

const App = () => {

  // function random(params) {
  //   const a = Math.random();
  //   console.log(a);
    
  // }
  // random() //wrong method

  const [num, setNum] = useState (0);
  const [num2, setnum2] = useState(100)

  useEffect(function () {
    console.log("Use Effect is Running.......");
    
  },[num]);

  function btnClicked(params) {
    console.log("Button is Clicked");
    setNum(prev => prev + 1);
    // setnum2(prev => prev + 10);
  }
  return (
    <div className='bg-gray-500 h-screen w-full '>
      <div className="px-5">
        <h3 className='p-10 text-5xl text-white'>Value of num is:- {num}</h3>
        <h3 className='p-10 text-5xl text-white'>Value of user is:- {num2}</h3>
      <button onClick={()=>{
        btnClicked()
      }}
      onDoubleClick={()=>{
        setnum2(prev => prev + 10);
      }} className='bg-red-300 p-5 rounded-full'>Call Me!</button>
      </div>
    </div>
  )
}

export default App
