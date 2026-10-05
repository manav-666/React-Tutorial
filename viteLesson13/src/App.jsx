import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('Agent')
  const submitHandler = (e) =>{
    e.preventDefault()
    console.log("Form Submited By ", title);
    setTitle('');
  }
  return (
    <div className='h-screen w-full bg-gray-500'>
      <form className='p-10 flex gap-15' onSubmit={(e)=>{
        submitHandler(e);
      }}>
        <input type="text" 
          placeholder='Enter the your Name' 
          className='bg-gray-200'
          value={title}
          onChange={(e)=>{
          console.log("Inputing.....");
          console.log(e.target.value);
          setTitle(e.target.value);
        }}
        />
        <button className='bg-red-200 rounded-full'>Submit</button>
      </form>
    </div>
  )
}

export default App
