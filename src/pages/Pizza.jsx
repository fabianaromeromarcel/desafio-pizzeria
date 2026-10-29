import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Pizza = () => {
    const { id } = useParams();
    const [pizza, setPizza] = useState({});

    useEffect(() => {
        const obtenerPizza = async () => {
            const respuesta = await fetch(`http://localhost:5001/api/pizzas/${id}`);
            const datos = await respuesta.json();
            setPizza(datos);
        };

        obtenerPizza();
    }, [id]);

    return (
        <div className="card">
            <img src={pizza.img} alt={pizza.name} />

            <div className="card-body">
                <h5 className="card-title">{pizza.name}</h5>
                <p>{pizza.desc}</p>

                <ul>
                    {pizza.ingredients?.map((ingredient) => (
                        <li key={ingredient}>{ingredient}</li>
                    ))}
                </ul>

                <p>Precio: ${pizza.price}</p>

                <button className="btn btn-dark">
                    Añadir al carrito
                </button>
            </div>
        </div>
    );
};

export default Pizza;