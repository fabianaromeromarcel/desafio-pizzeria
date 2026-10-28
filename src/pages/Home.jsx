//import { useState, useEffect } from "react";
import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import '../style.css'
import { pizzas } from "../components/pizzas";

const Home = () => {
    return (
        <main>
            <Header />

            <div className="pizzas">
                {pizzas.map((pizza) => (
                    <CardPizza
                        key={pizza.id}
                        pizza={pizza}
                        //name={pizza.name}
                        //desc={pizza.desc}
                        //price={pizza.price}
                       //ingredients={pizza.ingredients}
                        //img={pizza.img}
                    />
                ))}
            </div>
    {/*const [pizzas, setPizzas] = useState([]);
    useEffect(() => {
        const obtenerPizzas = async () => {
            const respuesta = await fetch("http://localhost:5001/api/pizzas");
            const datos = await respuesta.json();
            setPizzas(datos);
        };
        obtenerPizzas();
    }, []);
    return (
    <main>
        <Header></Header>
        <div className="pizzas">
            {pizzas.map((pizza) => {
                return <CardPizza 
                    key={pizza.id}
                    name={pizza.name}
                    desc={pizza.desc}
                    price={pizza.price}
                    ingredients={pizza.ingredients}
                    img={pizza.img}
                    />
            })}
        </div>*/}
        
        {/*<div className="pizzas">
            <CardPizza
                name="Napolitana"
                price={5950}
                ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
                img="https://images.unsplash.com/photo-1598023696416-0193a0bcd302?q=80&w=3036&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <CardPizza
                name="Española"
                price={6950}
                ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
                img="https://plus.unsplash.com/premium_photo-1733266807710-f8f8de34416f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <CardPizza
                name="Pepperoni"
                price={6950}
                ingredients={["mozzarella", "pepperoni", "orégano"]}
                img="https://images.unsplash.com/photo-1700760934249-93efbb574d23?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
        </div>*/}
        
    </main>
    )
}
export default Home;