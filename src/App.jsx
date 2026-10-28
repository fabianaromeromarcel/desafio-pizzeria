//import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import Pizza from './pages/Pizza';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './style.css'
import Cart from './pages/Cart'
import FormRegistro from './pages/FormRegistro'
import FormLogin from './pages/FormLogin'
import Perfil from './pages/Perfil'
import NotFound from './pages/NotFound'

const App = () => {
  //const [vista, setVista] = useState('home')
  return (
        <>
          <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<FormRegistro />} />
              <Route path="/login" element={<FormLogin />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/pizza/p001" element={<Pizza />} />
              <Route path="/profile" element={<Perfil />} />
              <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </>
  )
}

export default App