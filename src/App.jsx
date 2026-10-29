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
import { CartProvider } from './context/CartContext';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from './context/UserContext';

const App = () => {
    const { token } = useContext(UserContext);
    return (
        <CartProvider>
            <>
                <Navbar />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={token ? <Navigate to="/" /> : <FormRegistro />} />
                    <Route path="/login" element={token ? <Navigate to="/" /> : <FormLogin />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/pizza/:id" element={<Pizza />} />
                    <Route path="/profile" element={token ? <Perfil /> : <Navigate to="/login" />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>

                <Footer />
            </>
        </CartProvider>
    )
}

export default App