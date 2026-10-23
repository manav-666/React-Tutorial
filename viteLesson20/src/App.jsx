import React from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar'
const App = () => {
  const [Theme, setTheme] = useState('Light');

  const isDark = Theme == 'Dark';
  return (
    <div className={`min-h-screen transition-colors duration-300 ${
        isDark
          ? 'bg-gray-900 text-white'
          : 'bg-white text-black'
      }`}>
      <h1 className='text-white p-5'>Theme is {Theme}</h1>
      <Navbar theme={Theme} setTheme={setTheme}/>
    </div>
  )
}

export default App
