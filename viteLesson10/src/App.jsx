import React, { useState } from 'react'

const App = () => {

  // let a = 20;
  // function btnClick(){
  //   console.log(a);
  //   a = 30;
  //   console.log(a);
  //   a = 20;
  // }


  // const[A, setA] = useState(5 + 1);
  // const [userName, setuserName] = useState('Sarthak')
  // const [UserMarks, setUserMarks] = useState([10,20,30,40,50])
  // function btnClick(){
  //   setA(30);
  //   setuserName('Vijay');
  //   setUserMarks(UserMarks[2]);
  // }

  const [Count, setCount] = useState(0)

  function CountInc() {
    setCount(Count+1);
  }

  function CountDec() {
    if (Count <= 0) {
      
    }else{
      setCount(Count-1)
    }
  }

  function CountInc5(){
      setCount(Count + 5);
  }
  return (
    <>
      <div className='h-screen w-full bg-gray-700'>
      {/* <h1 className='text-white font-bold text-5xl'>Value of a is {A}</h1>
      <h1 className='text-white font-bold text-5xl'>Name of user {userName}</h1>
      <h1 className='text-white font-bold text-5xl'>Marks of user {UserMarks}</h1>
      <button onClick={btnClick} onClick={btnClick} className='bg-blue-400 p-5 m-5'>Click Her!</button> */}

      <div className='bg-blue-300 h-1/2 w-50% flex flex-col justify-center items-center rounded-xl '>
        <div className='m-8 p-15 bg-amber-900 text-9xl text-white rounded-xl'>{Count}</div>
        <div className='flex space-between ' >
          <button className='bg-gray-400 rounded-xl p-4 m-2 text-white font-semibold' onClick={CountInc}>Increase</button>
          <button className='bg-gray-400 rounded-xl p-4 m-2 text-white font-semibold' onClick={CountDec}>Decrease</button>
          <button className='bg-gray-400 rounded-xl p-4 m-2 text-white font-semibold' onClick={CountInc5}>Jump by 5</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
