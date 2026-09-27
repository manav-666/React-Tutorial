import React from 'react'

const Card = (props) => {
  console.log(props.userName, props.age)
  return (
    <div className='parent'>
      <div className='card'>
        <img src={props.img} alt="" />
        <h1>{props.userName},{props.age}</h1>
        <p>Lorem ipsum dolor sit stand consectetur adipisicing elit.</p>
        <div>
        <button type="button">View Profile</button>
      </div>
      </div>
    </div>
  )
}

export default Card
