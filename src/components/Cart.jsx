import '../style.css';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
    const { cart, increaseQuantity, decreaseQuantity, total } = useContext(CartContext);
   /* const aumentarCantidad = (id) => {
        const nuevoCart = cart.map((pizza) => {
            if (pizza.id === id) {
                return {
                    ...pizza,
                    count: pizza.count + 1
                }
            }
            return pizza
        })
        setCart(nuevoCart)
    }
    const disminuirCantidad = (id) => {
        const nuevoCart = cart
            .map((pizza) => {
                if (pizza.id === id) {
                    return {
                        ...pizza,
                        count: pizza.count - 1
                    }
                }
                return pizza
            })
            .filter((pizza) => pizza.count > 0)
        setCart(nuevoCart)
    }
    const calcularTotal = () => {
    return cart.reduce((total, pizza) => {
        return total + pizza.price * pizza.count
    }, 0)
}*/
    return (
    <div className="cart">
        <h2>Detalles del pedido:</h2>

        <div className="cart-items">
            {cart.map((pizza) => {
                return (
                    <div className="cart-item" key={pizza.id}>
                        <img className="cart-item-img" src={pizza.img} alt={pizza.name}/>
                        <div className="cart-item-info">
                            <h3>{pizza.name}</h3>
                            <p>${pizza.price}</p>
                        </div>
                        <div className="cart-item-quantity">
                            <button onClick={() => decreaseQuantity(pizza.id)}>-</button>
                            <span>{pizza.count}</span>
                            <button onClick={() => increaseQuantity(pizza.id)}>+</button>
                        </div>
                    </div>
                )
            })}
        </div>

        <div className="cart-total">
            <h3>Total</h3>
            <h2>${total.toLocaleString("es-CL")}</h2>
            <button className="pay-button">Pagar</button>
        </div>
    </div>
)
}

export default Cart;