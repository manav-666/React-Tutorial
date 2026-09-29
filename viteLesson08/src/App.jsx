import React from 'react'
import Section1 from './Components/Section1/Section1'
import Section2 from './Components/Section2/Section2'

const App = () => {

  const users = [
    {img:'https://i.pinimg.com/736x/34/da/e2/34dae2b1c9a2c38bfdc18bbb5a414149.jpg',
     intro:'',
     tag:'Satisfied'},

    {img:'https://i.pinimg.com/736x/04/00/d8/0400d8d9d0446f6ca217f64c53e4c404.jpg',
     intro:'',
     tag:'UnderServed'},

    {img:'https://i.pinimg.com/1200x/62/f1/e4/62f1e4ea079366f04e92cd9ee837b3d9.jpg',
     intro:'',
     tag:'UnderBanked'},

    {img:'https://i.pinimg.com/1200x/41/91/43/419143143cc42e4b73504ff625f4cd4e.jpg',
     intro:'',
     tag:'UnderServed'},

    {img:'https://i.pinimg.com/736x/94/b3/30/94b330332cbb3368f1ca6a69f79f6429.jpg',
     intro:'',
     tag:'Satisfied'},

    {img:'https://i.pinimg.com/736x/8f/2d/9b/8f2d9b2cddb50d2e66af32a6966400ce.jpg',
     intro:'',
     tag:'UnderBanked'}
  ]
  return (
    <>
     <div>
        <Section1 users={users}/>
        <Section2/>
      </div> 
    </>
  )
}

export default App
