Pizzería Mamma Mía

Proyecto desarrollado como parte de los hitos del módulo de Introducción a React de Desafío Latam.

La aplicación corresponde a una pizzería y fue desarrollada progresivamente utilizando componentes de React, props, estados, eventos y renderización dinámica de componentes.

Tecnologías utilizadas

* React
* Vite
* JavaScript
* JSX
* Bootstrap
* CSS

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
* Información de cada pizza:
    * Nombre.
    * Precio.
    * Ingredientes.
    * Imagen.
* Renderizado condicional de las opciones de navegación según el estado de token.
* Diseño responsive.

Hito 2 — Estados y Eventos

En el segundo hito se incorporaron estados y eventos en React, agregando los formularios de Registro y Login.

Formulario de Registro

Se desarrolló un formulario con:

* Email.
* Contraseña.
* Confirmación de contraseña.
* Botón de envío.

Se incorporaron las siguientes validaciones:

* Todos los campos son obligatorios.
* La contraseña debe tener al menos 6 caracteres.
* La contraseña y su confirmación deben coincidir.

Las validaciones muestran mensajes de error cuando los datos ingresados no cumplen los requisitos.

Formulario de Login

Se desarrolló un formulario con:

* Email.
* Contraseña.
* Botón de envío.

Se incorporaron las siguientes validaciones:

* Todos los campos son obligatorios.
* La contraseña debe tener al menos 6 caracteres.

El formulario muestra mensajes de error según los datos ingresados.

Navegación entre vistas

Se incorporó el manejo de estado para controlar la vista que se muestra en la aplicación:

* Home.
* Login.
* Registro.

Los botones correspondientes del Navbar permiten cambiar entre estas vistas.

Hito 3 — Renderización dinámica de componentes

En el tercer hito se implementó la renderización dinámica de componentes utilizando información proveniente de un arreglo de objetos y el método map().

Home

* Se importó el arreglo de pizzas desde pizzas.js.
* Se recorrió dinámicamente el arreglo de pizzas.
* Se renderizó un componente CardPizza por cada pizza.
* La información de cada pizza se entregó mediante props.

CardPizza

* Se utilizaron props para mostrar la información de cada pizza.
* Se recorrió dinámicamente la lista de ingredientes de cada pizza.
* Se generó un elemento <li> por cada ingrediente.

Cart

Se creó un nuevo componente Cart para simular un carrito de compras.

* Se importó pizzaCart desde pizzas.js.
* Se utilizó useState para manejar el estado del carrito.
* Se recorrió dinámicamente el arreglo del carrito.
* Se muestra la imagen, nombre, precio y cantidad de cada pizza.
* Se incorporaron botones para aumentar y disminuir la cantidad de pizzas.
* Cuando la cantidad de una pizza llega a cero, esta se elimina del carrito.
* Se incorporó un botón de pago como parte de la interfaz del carrito.

Estado y actualización del carrito

Para actualizar el carrito se utilizan nuevos arreglos y objetos, evitando modificar directamente el estado anterior. Se aplican métodos como map() y filter() para modificar y eliminar elementos del carrito.

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
│   └── pizzas.js
├── App.jsx
├── Navbar.jsx
├── App.css
├── style.css
└── main.jsx

Desafío Pizzería Mamma Mía

Fabiana Romero Marcel

desafio-pizzeria-hito1.vercel.app