import Header from "./Header";
import CardPizza from "./CardPizza";
import './style.css'

const pizzas = [
    {
        nombre: "Napolitana",
        precio: 5950,
        ingredientes: ["mozzarella", "tomates", "jamón", "orégano"],
        img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=mediatoken=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
    },
    {
        nombre: "Española",
        precio: 6950,
        ingredientes: ["mozzarella", "gorgonzola", "parmesano", "provolone"],
        img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"
    },
    {
        nombre: "Pepperoni",
        precio: 6950,
        ingredientes: ["mozzarella", "pepperoni", "orégano"],
        img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"
    }
];

const Home = () => {
    return (
    <main>
        <Header></Header>
        <div className="pizzas">
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
        </div>
        
    </main>
    )
}
export default Home;