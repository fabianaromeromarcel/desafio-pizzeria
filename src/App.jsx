import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Navbar from './Navbar'
import Footer from './components/Footer'
import './style.css'
import FormRegistro from './components/FormRegistro'
import FormLogin from './components/FormLogin'

const App = () => {
  const [vista, setVista] = useState('home')
  return (
    <div className="app">
      <Navbar setVista={setVista} />
      <main className="main-content">
        {vista === 'home' && <Home />}
        {vista === 'registro' && <FormRegistro />}
        {vista === 'login' && <FormLogin />}
      </main>
      <Footer />
    </div>
  )
}

export default App