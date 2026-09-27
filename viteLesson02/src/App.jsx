import React from 'react'
import card from './Components/Card'

const App = () => {
  const user = "React";
  const age = 25;

  return (
    <>
      <div className='card'>
        <h5>I am using the {user}....</h5>
        <h6>My age is {age}</h6>
      </div>

      
    </>
  )  
}  

export default App
