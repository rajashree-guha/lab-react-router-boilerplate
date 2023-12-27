import React from 'react'
import Home from '../Home'
import About from '../About'
import Contact from '../Contact'
import PageNotFound from '../PageNotFound'
import { Route, Routes } from 'react-router-dom'

const AllRoutes = () => {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='*' element={<PageNotFound/>}></Route>
    </Routes>
    </div>
  )
}

export default AllRoutes