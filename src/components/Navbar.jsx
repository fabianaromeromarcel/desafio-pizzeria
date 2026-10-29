import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
    const { total } = useContext(CartContext);
    //const token = false;
    const { token, logout } = useContext(UserContext);

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo03"
                    aria-controls="navbarTogglerDemo03"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <Link className="navbar-brand" to="/">
                    Mamma Mia
                </Link>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav gap-2 me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="btn btn-outline-secondary text-black">
                                🍕 Home
                            </Link>
                        </li>

                        {token ? (
                            <>
                                <li className="nav-item">
                                    <Link to="/profile" className="btn btn-outline-secondary text-black">
                                        🔓 Profile
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <button type="button" className="btn btn-outline-secondary text-black" onClick={logout}>
                                        🔒 Logout
                                    </button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <Link to="/login" className="btn btn-outline-secondary text-black">
                                        🔐 Login
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/register" className="btn btn-outline-secondary text-black">
                                        🔐 Register
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>

                    <div className="d-flex" role="search">
                        <Link to="/cart" className="btn btn-outline-primary text-primary">
                            🛒 Total: ${total.toLocaleString("es-CL")}
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;