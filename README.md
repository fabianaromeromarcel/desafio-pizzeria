Pizzería Mamma Mía

Proyecto desarrollado como parte de los hitos del módulo de Introducción a React de Desafío Latam.

La aplicación corresponde a una pizzería y fue desarrollada progresivamente utilizando componentes de React, props, estados y eventos.

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

* Navbar: barra de navegación y visualización del total.
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
* Visualización del total de la compra.
* Renderizado condicional de las opciones de navegación según el estado de token.
* Diseño responsive.

Hito 2 — Estados y Eventos

En el segundo hito se incorporaron estados y eventos en React, agregando los formularios de Registro y Login. El objetivo del hito es trabajar específicamente con el manejo de estado y eventos.

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

Estructura del proyecto

src/
├── components/
│   ├── CardPizza.jsx
│   ├── Footer.jsx
│   ├── FormLogin.jsx
│   ├── FormRegistro.jsx
│   ├── Header.jsx
│   └── Home.jsx
├── App.jsx
├── Navbar.jsx
├── App.css
├── style.css
└── main.jsx



Desafío Pizzería Mamma Mía

Fabiana Romero Marcel

desafio-pizzeria-hito1.vercel.app