Pizzería Mamma Mía

Proyecto desarrollado como parte de los hitos del módulo de Introducción a React de Desafío Latam.

La aplicación corresponde a una pizzería y fue desarrollada progresivamente utilizando componentes de React, props, estados, eventos, renderización dinámica, consumo de una API y navegación entre páginas mediante React Router.

Tecnologías utilizadas

* React
* Vite
* JavaScript
* JSX
* React Router DOM 6
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
* Renderizado condicional de las opciones de navegación según el estado del token.
* Diseño responsive mediante Bootstrap y CSS.

Hito 2 — Estados y Eventos

En el segundo hito se incorporaron estados y eventos en React mediante formularios de registro e inicio de sesión.

Formulario de Registro

Se desarrolló un formulario con los siguientes campos:

* Email.
* Contraseña.
* Confirmación de contraseña.

Se incorporaron las siguientes validaciones:

* Todos los campos son obligatorios.
* La contraseña debe tener al menos 6 caracteres.
* La contraseña y su confirmación deben coincidir.
* Se muestran mensajes de error cuando los datos ingresados no cumplen los requisitos.

Formulario de Login

Se desarrolló un formulario con los siguientes campos:

* Email.
* Contraseña.

Se incorporaron las siguientes validaciones:

* Todos los campos son obligatorios.
* La contraseña debe tener al menos 6 caracteres.
* Se muestran mensajes de error según los datos ingresados.

Navegación entre vistas

Se incorporó el manejo de estado para controlar la vista que se muestra en la aplicación:

* Home.
* Login.
* Registro.

Los botones correspondientes del Navbar permiten cambiar entre estas vistas.

Hito 3 — Renderización dinámica de componentes

En el tercer hito se implementó la renderización dinámica de componentes utilizando un arreglo de objetos y el método map().

Home

* Se recorrió dinámicamente el arreglo de pizzas.
* Se renderizó un componente CardPizza por cada pizza.
* La información de cada pizza se entregó mediante props.

CardPizza

* Se utilizaron props para mostrar la información de cada pizza.
* Se recorrió dinámicamente la lista de ingredientes.
* Se generó un elemento <li> por cada ingrediente.

Cart

Se creó un componente Cart para simular un carrito de compras.

Funcionalidades implementadas:

* Uso de useState para manejar el estado del carrito.
* Renderización dinámica de los productos.
* Visualización de la imagen, el nombre, el precio y la cantidad de cada pizza.
* Botones para aumentar y disminuir la cantidad de pizzas.
* Eliminación de una pizza cuando su cantidad llega a cero.
* Botón de pago como parte de la interfaz del carrito.

Para actualizar el carrito se generan nuevos arreglos y objetos, evitando modificar directamente el estado anterior. Se utilizan métodos como map() y filter() para actualizar las cantidades y eliminar elementos.

Hito 4 — Consumo de API con useEffect

En este hito se incorporó el consumo de datos desde una API mediante fetch, junto con los hooks useState y useEffect de React.

Home

* Se utiliza useState para almacenar las pizzas recibidas.
* Se utiliza useEffect con un arreglo de dependencias vacío para ejecutar la solicitud al cargar el componente.
* Se utiliza fetch para obtener la lista de pizzas.
* Se utiliza async/await para gestionar la solicitud y procesar la respuesta.
* Se utiliza map() para recorrer la lista de pizzas recibida.
* Se renderiza un componente CardPizza por cada pizza.
* Se envían los datos de cada pizza mediante props.

Pizza

Se desarrolló el componente Pizza para obtener y mostrar la información de una pizza específica.

* Se utiliza useState para almacenar la información de la pizza.
* Se utiliza useEffect para ejecutar la solicitud al cargar el componente.
* Se utiliza fetch para obtener los datos desde la API.
* Se utiliza async/await para procesar la respuesta.
* Se muestra el nombre, la descripción, los ingredientes, el precio y la imagen de la pizza.
* Se utiliza map() para recorrer dinámicamente la lista de ingredientes.
* Se incluye un botón «Añadir al carrito» como elemento de interfaz.

Backend

Durante el desarrollo, el frontend consume la API local proporcionada para el desafío.

El backend se ejecuta en el puerto 5001.

Endpoints utilizados:

* http://localhost:5001/api/pizzas: obtiene la lista de pizzas.
* http://localhost:5001/api/pizzas/p001: obtiene la información de una pizza específica.

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
/pizza/p001	Pizza	Detalle de una pizza específica.
/profile	Perfil	Página de perfil de usuario.
*	NotFound	Página de error para rutas inexistentes.

Navbar

Se implementó la navegación entre las distintas páginas utilizando el componente Link de React Router.

Funcionalidades:

* Acceso a la página principal.
* Acceso al formulario de inicio de sesión.
* Acceso al formulario de registro.
* Acceso al perfil de usuario.
* Botón de carrito con el total de la compra, que redirige a /cart.
* Renderizado condicional de las opciones de navegación según el estado del token.

La navegación mediante Link permite cambiar de página sin recargar completamente la aplicación.

Perfil de usuario

Se incorporó una página de perfil que muestra un correo electrónico y un botón para cerrar sesión. La interfaz es estática y no implementa autenticación real.

Página 404

Se creó una página NotFound para las rutas inexistentes.

* Muestra un mensaje de error personalizado.
* Incluye un diseño relacionado con la temática de la pizzería.
* Incorpora un enlace para volver a la página principal.

Organización del proyecto

Se reorganizaron los archivos para separar las páginas completas de los componentes reutilizables.

* pages/: contiene las páginas Home, Pizza, Cart, FormRegistro, FormLogin, Perfil y NotFound.
* components/: contiene componentes reutilizables como CardPizza, Header y Footer, además de los datos de las pizzas.
* App.jsx: configura las rutas y la estructura general de la aplicación.
* main.jsx: configura el punto de entrada de React y envuelve la aplicación con BrowserRouter.

Estructura del proyecto

src/
├── components/
│   ├── CardPizza.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── Navbar.jsx
│   └── pizzas.js
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


Proyecto desplegado en Vercel:

https://desafio-pizzeria-hito1.vercel.app
