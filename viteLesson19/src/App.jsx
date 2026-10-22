import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Men from './pages/Men'
import Women from './pages/Women'
import NotFoundPage from './pages/NotFoundPage'
import Kids from './pages/Kids'
import Courses from './pages/Courses'
import CoursesDetails from './pages/CoursesDetails'
import Navbar2 from './pages/Navbar2'

const App = () => {
  return (
    <div className='bg-gray-800 h-screen w-full text-white'>
      <Navbar/>
      <Navbar2/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/courses' element={<Courses/>}/>
          <Route path='/courses/:courseId' element={<CoursesDetails/>}/>
          <Route path='/product' element={<Product/>}>
            <Route path='men' element={<Men/>}/>
            <Route path='women' element={<Women/>}/>
            <Route path='kids' element={<Kids/>}/>
          </Route>
          <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
      <Footer/>
    </div>
  )
}

export default App
