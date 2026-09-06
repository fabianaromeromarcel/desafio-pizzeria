import './style.css'

const CardPizza = (props) => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={props.img} alt="..." />

            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">Ingredientes:</p>
                <p className="card-text">{props.ingredients.join(", ")}</p>
            </div>

            <ul className="list-group list-group-flush">
                <li className="list-group-item">Precio: {props.price}</li>
            </ul>
        </div>
    )
};

export default CardPizza;
