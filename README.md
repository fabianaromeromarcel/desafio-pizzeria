Pizzería Mamma Mía

Proyecto desarrollado como parte de los hitos del módulo de Introducción a React de Desafío Latam.

La aplicación corresponde a una pizzería y fue desarrollada progresivamente utilizando componentes de React, props, estados, eventos, renderización dinámica y consumo de una API.

Tecnologías utilizadas

* React
* Vite
* JavaScript
* JSX
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
* Diseño responsive.

Hito 2 — Estados y Eventos

En el segundo hito se incorporaron estados y eventos en React, agregando los formularios de Registro y Login.

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

* Se utilizó useState para manejar el estado del carrito.
* Se recorrió dinámicamente el arreglo del carrito.
* Se muestra la imagen, el nombre, el precio y la cantidad de cada pizza.
* Se incorporaron botones para aumentar y disminuir la cantidad de pizzas.
* Cuando la cantidad de una pizza llega a cero, esta se elimina del carrito.
* Se incorporó un botón de pago como parte de la interfaz del carrito.

Estado y actualización del carrito

Para actualizar el carrito se generan nuevos arreglos y objetos, evitando modificar directamente el estado anterior.

Se utilizan métodos como map() y filter() para actualizar las cantidades y eliminar elementos del carrito.

Hito 4 — Consumo de API con useEffect

En este hito se incorporó el consumo de datos desde una API mediante fetch, junto con los hooks useState y useEffect de React.

Home

Se modificó el componente Home para obtener la lista de pizzas desde una API.

Funcionalidades implementadas:

* Se utiliza useState para almacenar las pizzas recibidas.
* Se utiliza useEffect con un arreglo de dependencias vacío para ejecutar la solicitud al cargar el componente.
* Se utiliza fetch para obtener los datos desde el endpoint http://localhost:5001/api/pizzas.
* Se utiliza async/await para gestionar la solicitud y procesar la respuesta.
* Se utiliza map() para recorrer la lista de pizzas recibida.
* Se renderiza un componente CardPizza por cada pizza.
* Se envían los datos de cada pizza al componente CardPizza mediante props.

Pizza

Se desarrolló el componente Pizza para obtener y mostrar la información de una pizza específica.

Funcionalidades implementadas:

* Se utiliza useState para almacenar la información de la pizza.
* Se utiliza useEffect para ejecutar la solicitud al cargar el componente.
* Se utiliza fetch para obtener los datos desde el endpoint http://localhost:5001/api/pizzas/p001.
* Se utiliza async/await para procesar la respuesta de la API.
* Se muestra el nombre, la descripción, los ingredientes, el precio y la imagen de la pizza.
* Se utiliza map() para recorrer dinámicamente la lista de ingredientes.
* Se incluye un botón «Añadir al carrito» como elemento de interfaz, sin funcionalidad asociada en este hito.

Conceptos aplicados

* Consumo de API mediante fetch.
* Manejo de estado con useState.
* Ejecución de efectos secundarios con useEffect.
* Solicitudes asíncronas mediante async/await.
* Renderización dinámica de datos obtenidos desde una API.
* Uso de props para transmitir información entre componentes.

Backend

Durante el desarrollo, el frontend consume la API local proporcionada para el desafío.

El backend se ejecuta en el puerto 5001.

Endpoints utilizados:

* http://localhost:5001/api/pizzas: obtiene la lista de pizzas.
* http://localhost:5001/api/pizzas/p001: obtiene la información de una pizza específica.

Estructura del proyecto

src/
├── components/
│   ├── CardPizza.jsx
│   ├── Cart.jsx
│   ├── Footer.jsx
│   ├── FormLogin.jsx
│   ├── FormRegistro.jsx
│   ├── Header.jsx
│   ├── Home.jsx
│   ├── Pizza.jsx
│   └── pizzas.js
├── App.jsx
├── Navbar.jsx
├── App.css
├── style.css
└── main.jsx

desafio-pizzeria-hito1.vercel.app

Autora