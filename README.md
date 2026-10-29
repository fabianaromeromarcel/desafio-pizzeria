Pizzería Mamma Mía

Proyecto desarrollado como parte de los hitos del módulo de Introducción a React de Desafío Latam.

La aplicación simula una pizzería y fue desarrollada progresivamente utilizando componentes de React, props, estados, eventos, renderización dinámica, consumo de una API, navegación mediante React Router y Context API para administrar el carrito y el estado de una sesión simulada.

Tecnologías utilizadas

* React
* Vite
* JavaScript
* JSX
* React Router DOM 6
* Context API (createContext y useContext)
* React Hooks (useState, useEffect y useParams)
* Bootstrap
* CSS
* Fetch API

Hito 1 — Componentes y Props

En el primer hito se construyó la estructura inicial de la aplicación utilizando componentes reutilizables de React.

Componentes desarrollados

* Navbar: barra de navegación.
* Home: página principal.
* Header: encabezado de la página.
* CardPizza: tarjeta reutilizable para mostrar la información de cada pizza.
* Footer: pie de página.

Funcionalidades

* Barra de navegación.
* Visualización de las pizzas disponibles.
* Tarjetas reutilizables mediante props.
* Información de cada pizza: nombre, precio, ingredientes e imagen.
* Diseño responsive mediante Bootstrap y CSS.

Hito 2 — Estados y Eventos

En el segundo hito se incorporaron estados y eventos en React mediante formularios de registro e inicio de sesión.

Formulario de registro

Se desarrolló un formulario con los siguientes campos:

* Email.
* Contraseña.
* Confirmación de contraseña.

Validaciones incorporadas:

* Todos los campos son obligatorios.
* La contraseña debe tener al menos 6 caracteres.
* La contraseña y su confirmación deben coincidir.
* Se muestran mensajes de error cuando los datos ingresados no cumplen los requisitos.

Formulario de login

Se desarrolló un formulario con los siguientes campos:

* Email.
* Contraseña.

Validaciones incorporadas:

* Todos los campos son obligatorios.
* La contraseña debe tener al menos 6 caracteres.
* Se muestran mensajes de error según los datos ingresados.

Navegación entre vistas

Se incorporó el manejo de estado para controlar las vistas de Home, Login y Registro. Los botones correspondientes del Navbar permiten navegar entre estas vistas.

Hito 3 — Renderización dinámica de componentes

En el tercer hito se implementó la renderización dinámica de componentes utilizando arreglos de objetos y el método map().

Home

* Se recorrió dinámicamente el arreglo de pizzas.
* Se renderizó un componente CardPizza por cada pizza.
* La información de cada pizza se entregó mediante props.

CardPizza

* Se utilizaron props para mostrar la información de cada pizza.
* Se recorrió la lista de ingredientes.
* Se generó un elemento <li> por cada ingrediente.

Cart

Se creó un componente Cart para simular un carrito de compras.

* Uso inicial de useState para manejar el estado del carrito.
* Renderización dinámica de los productos.
* Visualización de la imagen, el nombre, el precio y la cantidad de cada pizza.
* Botones para aumentar y disminuir la cantidad de pizzas.
* Eliminación de una pizza cuando su cantidad llega a cero.
* Botón de pago como parte de la interfaz del carrito.
* Actualización de arreglos y objetos sin modificar directamente el estado anterior, mediante métodos como map() y filter().

Hito 4 — Consumo de API con useEffect

En este hito se incorporó el consumo de datos desde una API mediante fetch, junto con los hooks useState y useEffect.

Home

* Se utiliza useState para almacenar las pizzas recibidas.
* Se utiliza useEffect para ejecutar una solicitud al cargar el componente.
* Se utiliza fetch para obtener la lista de pizzas.
* Se utiliza async/await para gestionar la solicitud y procesar la respuesta.
* Se utiliza map() para recorrer la lista de pizzas recibida.
* Se renderiza un componente CardPizza por cada pizza y se envían sus datos mediante props.

Pizza

Se desarrolló el componente Pizza para obtener y mostrar la información de una pizza específica.

* Se utiliza useState para almacenar la información de la pizza.
* Se utiliza useEffect para ejecutar la solicitud a la API.
* Se utiliza fetch para obtener los datos desde la API.
* Se utiliza async/await para procesar la respuesta.
* Se muestra el nombre, la descripción, los ingredientes, el precio y la imagen de la pizza.
* Se utiliza map() para recorrer dinámicamente la lista de ingredientes.
* Se incluye un botón «Añadir al carrito» en la interfaz de detalle.

Backend

El frontend consume la API local proporcionada para el desafío. Durante el desarrollo, el backend se ejecuta en el puerto 5001.

Endpoints utilizados:

* GET http://localhost:5001/api/pizzas: obtiene la lista de pizzas.
* GET http://localhost:5001/api/pizzas/:id: obtiene la información de una pizza específica según su identificador.

Hito 5 — Navegación con React Router

En el quinto hito se implementó React Router DOM 6 para gestionar la navegación entre páginas y organizar la aplicación mediante rutas.

Configuración de React Router

* Se instaló react-router-dom versión 6.
* Se configuró BrowserRouter para habilitar la navegación.
* Se utilizaron Routes y Route para asociar las direcciones con sus respectivos componentes.
* Se incorporó una ruta comodín para mostrar una página de error cuando la dirección no existe.

Páginas y rutas

Ruta	Página	Descripción
/	Home	Página principal con el listado de pizzas.
/register	FormRegistro	Formulario de registro de usuarios.
/login	FormLogin	Formulario de inicio de sesión.
/cart	Cart	Carrito de compras.
/pizza/:id	Pizza	Detalle de una pizza específica según su identificador.
/profile	Perfil	Página de perfil de usuario.
*	NotFound	Página de error para rutas inexistentes.

Navbar

Se implementó la navegación entre las distintas páginas utilizando el componente Link de React Router.

* Acceso a Home.
* Acceso a Login y Registro según el estado simulado de la sesión.
* Acceso al perfil de usuario cuando el token está activo.
* Botón del carrito con el total de la compra y enlace a /cart.
* Navegación sin recargar completamente la aplicación.

Perfil de usuario

Se incorporó una página de perfil. La interfaz es estática y no implementa autenticación real.

Página 404

Se creó una página NotFound para las rutas inexistentes.

* Muestra un mensaje de error personalizado.
* Incluye un diseño relacionado con la temática de la pizzería.
* Incorpora un enlace para volver a Home.

Hito 6 — Administración del carrito con Context API

En el sexto hito se implementó Context API para compartir el estado del carrito entre los componentes de la aplicación, evitando mantener estados independientes en la Navbar y la página del carrito.

CartContext

Se creó src/context/CartContext.jsx para administrar el estado global del carrito.

* Se utiliza createContext() para crear CartContext.
* Se utiliza CartProvider para compartir el estado y las funciones con los componentes descendientes.
* Se utiliza useState para almacenar las pizzas añadidas al carrito.
* El carrito comienza vacío.
* Se utiliza addToCart para añadir una pizza o aumentar su cantidad si ya existe en el carrito.
* Se utiliza increaseQuantity para aumentar la cantidad de una pizza.
* Se utiliza decreaseQuantity para disminuir la cantidad y eliminar el producto cuando llega a cero.
* Se calcula el total de la compra a partir del precio y la cantidad de cada producto.

Integración con la aplicación

* App.jsx envuelve las rutas con CartProvider.
* CardPizza consume CartContext mediante useContext para añadir la pizza seleccionada al carrito.
* Navbar consume el total del contexto y muestra el precio actualizado de la compra.
* Cart consume el carrito, las funciones para modificar cantidades y el total desde el mismo contexto.
* Los cambios realizados en el carrito se reflejan tanto en la página del carrito como en la Navbar.

Funcionalidades del carrito

* Añadir pizzas desde la aplicación.
* Mostrar los productos añadidos y sus cantidades.
* Aumentar y disminuir cantidades.
* Eliminar una pizza cuando su cantidad llega a cero.
* Calcular y mostrar el total de la compra.
* Mantener sincronizado el total entre Cart y Navbar.

Hito 7 — Rutas protegidas y parámetros con React Router

En este hito se profundizó el uso de React Router mediante rutas dinámicas, el hook useParams y la protección de rutas según el estado de una sesión simulada.

Detalle de pizzas con useParams

* Se configuró la ruta dinámica /pizza/:id.
* Se utilizó useParams() para obtener el identificador de la pizza desde la URL.
* Se utilizó el identificador para realizar una petición a la API y mostrar la información de la pizza correspondiente.

Endpoint utilizado:

* GET http://localhost:5001/api/pizzas/:id

UserContext

Se creó src/context/UserContext.jsx para administrar el estado de una sesión simulada.

* Se utiliza createContext() para crear UserContext.
* Se implementó UserProvider para compartir el contexto con los componentes de la aplicación.
* Se utiliza useState para almacenar el token, cuyo valor inicial es true.
* Se implementó el método logout, que cambia el token a false.
* Se configuró UserProvider en main.jsx para proporcionar el contexto a la aplicación.

Navbar y estado de sesión

Se integró UserContext en Navbar para mostrar las opciones de navegación según el estado del token.

* Cuando el token es true, se muestran los botones Profile y Logout.
* Cuando el token es false, se muestran los botones Login y Register.
* Home y el total del carrito permanecen visibles en ambos estados.
* El botón Logout ejecuta el método logout del contexto.

Protección de rutas

Se implementaron rutas protegidas mediante condiciones y el componente Navigate de React Router.

* /profile: muestra el perfil cuando el token es true. Si es false, redirige a /login.
* /login: redirige a Home cuando el token es true.
* /register: redirige a Home cuando el token es true.

Integración de UserContext con Cart

Se incorporó UserContext en src/pages/Cart.jsx.

* Se consulta el estado del token mediante useContext.
* El botón Pagar se deshabilita cuando el token es false.
* Se agregaron estilos para distinguir visualmente el botón deshabilitado.

Consideraciones

La autenticación es simulada y no implementa un sistema real de inicio de sesión. El token se almacena en el estado de React y vuelve a su valor inicial al recargar la aplicación. No se implementó persistencia de sesión.

Organización del proyecto

* components/: contiene componentes reutilizables como CardPizza, Navbar, Header y Footer, además del archivo pizzas.js con los datos de las pizzas.
* context/: contiene CartContext.jsx, que administra el estado compartido del carrito, y UserContext.jsx, que administra el token simulado.
* pages/: contiene las páginas Home, Pizza, Cart, FormRegistro, FormLogin, Perfil y NotFound.
* App.jsx: configura las rutas, las rutas protegidas y la estructura general de la aplicación.
* main.jsx: configura el punto de entrada de React y envuelve la aplicación con BrowserRouter y UserProvider.

Estructura del proyecto

src/
├── components/
│   ├── CardPizza.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── Navbar.jsx
│   └── pizzas.js
├── context/
│   ├── CartContext.jsx
│   └── UserContext.jsx
├── pages/
│   ├── Home.jsx
│   ├── Pizza.jsx
│   ├── Cart.jsx
│   ├── FormRegistro.jsx
│   ├── FormLogin.jsx
│   ├── Perfil.jsx
│   └── NotFound.jsx
├── App.jsx
├── App.css
├── style.css
├── index.css
└── main.jsx

Proyecto desplegado

https://desafio-pizzeria-hito1.vercel.app
