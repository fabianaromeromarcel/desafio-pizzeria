//import { useState } from 'react'
import './App.css'
//import Home from './components/Home'
import Pizza from './components/Pizza'
import Navbar from './Navbar'
import Footer from './components/Footer'
import './style.css'
import Cart from './components/Cart'
//import FormRegistro from './components/FormRegistro'
//import FormLogin from './components/FormLogin'

const App = () => {
  //const [vista, setVista] = useState('home')
  return (
    <div className="app">
      <Navbar/>
      <main className="main-content">
        <Pizza />
        {/*<Home />
        <FormRegistro />
        <FormLogin />
        <Cart/>*/}
      </main>
      <Footer />
    </div>
  )
}

export default App