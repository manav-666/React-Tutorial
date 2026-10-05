import React from 'react'
import { useState } from 'react'
const App = () => {
  // const [Num, setNum] = useState({user: 'Sarthak', age:45})

  // const btnClicked = () =>{
  //   const newNum = {...Num};
  //   newNum.user = 'Aman' //changing the user name
  //   newNum.age = 29 //changing the age of user

  //   setNum(newNum)
  // }

  // const [num, setnum] = useState([10,20,30])

  // const btnClicked =  () =>{
  //   const newNum = [...num];
  //   newNum[0] = 40;
  //   newNum[1] = 50;
  //   newNum[2] = 60;

  //   newNum.push(70); //But it Does not shown on the screen... Bcu <h1 className='text-white text-3xl'>{num[0]}, {num[1]}, {num[2]}</h1>
  //   console.log(newNum);
    
  //   setnum(newNum);
  // }

  // const [num, setNum] = useState({user: 'Rishi', age: 21});

  // const btnClicked = () =>{
  //   setNum(prev=>({...prev,age:50}))
  // }


  const [num, setNum] = useState(10);

  const btnClicked = () =>{
    // setNum(num + 1);
    // setNum(num + 1);
    // setNum(num + 1); //All this three statement increase the number by one once on one click not the three times....

    setNum(prev=>(prev+1));
    setNum(prev=>(prev+1));
    setNum(prev=>(prev+1));
  }
  return (
    // <>//Code for the Object
    //   <div className='h-screen w-sull bg-gray-500'>
    //     <div className='p-10'>
    //       <h1 className='text-white text-3xl'>{Num.user}, {Num.age}</h1>
    //       <button onClick={btnClicked} className='bg-gray-300 p-3 mt-5 rounded-md'>Click me</button>
    //     </div>
    //   </div>
    //   <div className='h-screen w-full bg-gray-300'>
    //     <div>Details</div>
    //   </div>
    // </>

    // <>
    //   <div className='h-screen h-full bg-gray-500'>
    //     <div className='p-10'>
    //       <h1 className='text-white text-3xl'>{num[0]}, {num[1]}, {num[2]}</h1>
    //       <button onClick={btnClicked} className='bg-gray-300 p-3 mt-5 rounded-md'>Click Me!</button>
    //     </div>
    //   </div>
    // </>

    <>
      <div className='h-screen h-full bg-gray-500'>
        <div className='p-10'>
          <h1 className='text-white text-3xl'>{num}</h1>
          <button onClick={btnClicked} className='bg-gray-300 p-3 mt-5 rounded-md'>Click Me!</button>
        </div>
      </div>
    </>
  )
}

export default App
