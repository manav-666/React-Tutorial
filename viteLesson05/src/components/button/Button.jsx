import React from 'react'
// import '../styles/Button.css'
import styles from '../button/Button.module.css'
const Button = () => {
  return (
    <div>
      {/* <button className='btn'>Click Me!</button> */}
      <button className={styles.btn}>Click me</button>
    </div>
  )
}

export default Button
