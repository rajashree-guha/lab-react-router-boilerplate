import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import About from './components/About'
import PageNotFound from './components/PageNotFound'
import AllRoutes from './components/Routes/AllRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
   <Navbar/>
   <AllRoutes/>
    {/* <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='*' element={<PageNotFound/>}></Route>
    </Routes> */}
    </div>
  )
}

export default App
