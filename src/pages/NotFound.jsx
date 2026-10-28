import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="container text-center mt-5">
            <h1 className="display-1 fw-bold">404</h1>
            <h2>¡Ups! Esta pizza no existe.</h2>
            <p>La página que buscas no está en nuestro menú.</p>

            <Link to="/" className="btn btn-danger mt-3">
                Volver al inicio
            </Link>
        </div>
    );
};

export default NotFound;