import '../style.css'
import { useState } from 'react';
import { pizzaCart } from "./pizzas";

const Cart = () => {
    const [cart, setCart] = useState(pizzaCart);
    const aumentarCantidad = (id) => {
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
}
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
                            <button onClick={() => disminuirCantidad(pizza.id)}>-</button>
                            <span>{pizza.count}</span>
                            <button onClick={() => aumentarCantidad(pizza.id)}>+</button>
                        </div>
                    </div>
                )
            })}
        </div>

        <div className="cart-total">
            <h3>Total</h3>
            <h2>${calcularTotal()}</h2>
            <button className="pay-button">Pagar</button>
        </div>
    </div>
)
}

export default Cart;