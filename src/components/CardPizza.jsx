import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../style.css";

const CardPizza = (props) => {
    const { addToCart } = useContext(CartContext);
    const pizza = props.pizza;

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={pizza.img} alt={pizza.name} />

            <div className="card-body">
                <h5 className="card-title">{pizza.name}</h5>

                <p className="card-text">{pizza.desc}</p>

                <ul>
                    {pizza.ingredients.map((ingredient) => (
                        <li key={ingredient}>{ingredient}</li>
                    ))}
                </ul>
            </div>

            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    Precio: ${pizza.price.toLocaleString("es-CL")}
                </li>
            </ul>

            <div className="card-body">
                <button
                    className="btn btn-dark"
                    onClick={() => addToCart(pizza)}
                >
                    Añadir al carrito
                </button>
            </div>
        </div>
    );
};

export default CardPizza;


/*import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import '../style.css'

const CardPizza = (props) => {
    const { addToCart } = useContext(CartContext);
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={props.img} alt={props.name} />

            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>

                <p className="card-text">{props.desc}</p>

                <ul>
                    {props.ingredients.map((ingredient) => {
                        return <li key={ingredient}>{ingredient}</li>
                    })}
                </ul>
            </div>

            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    Precio: ${props.price.toLocaleString("es-CL")}
                </li>
            </ul>

            <div className="card-body">
                <button className="btn btn-dark" onClick={() => addToCart(props)}>
                    Añadir al carrito
                </button>
            </div>
        </div>
    )
};

export default CardPizza;*/