import { useState } from 'react'
import './App.css'
import Home from './Home'
import Navbar from './Navbar'
import Footer from './Footer'
import './style.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <Footer></Footer>
    </>
  )
}

export default App
