import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './pages/Navbar';
import Product from './pages/Product';

const App = () => {
  return (
    <div className='bg-gray-500 font-bold h-screen w-full'>
      <Navbar/>
      <div className='text-white text-3xl'>This is Header</div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/product' element={<Product/>}/>
      </Routes>
      <div className='text-white text-3xl'>This is Footer</div>
    </div>
  )
}

export default App
