const Navbar = () => {
const total = 25000;
const token = false;

return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand" href="#">Mamma Mia</a>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul class="navbar-nav gap-2 me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <button type="button" class="btn btn-outline-secondary text-black">🍕 Home</button>
                    </li>
                    {token ? (<>
                        <li className="nav-item">
                            <button type="button" className="btn btn-outline-secondary text-black">🔓 Profile</button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn btn-outline-secondary text-black">🔒 Logout</button>
                        </li>
                    </>
                    ) : (<>
                        <li className="nav-item">
                            <button type="button" className="btn btn-outline-secondary text-black">🔐 Login</button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn btn-outline-secondary text-black">🔐 Register</button>
                        </li>
                    </>
                    )}
                </ul>
                <form class="d-flex" role="search">
                    <button type="button" class="btn btn-outline-primary text-primary">🛒 Total: ${total.toLocaleString("es-CL")}</button>
                </form>
            </div>
        </div>
    </nav>
    )
}
export default Navbar;