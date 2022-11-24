
import { Link } from "react-router-dom";
import LogButton from "./LogButton";

function Navbar(props) {
    return (
       
       
       <div className="mx-5 my-3">
            <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
                <a
                    href="/"
                    class="d-flex align-items-center text-dark text-decoration-none"
                >
                   
                    <span class="fs-4">
                        <Link to={"/"}>Germinar.co</Link>
                    </span>
                </a>

                <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                    <Link
                        to={"/productos"}
                        className="me-3 py-2 text-dark text-decoration-none"
                    >
                        Productos
                    </Link>
                    <Link
                        to={"/categorias"}
                        className="me-3 py-2 text-dark text-decoration-none"
                    >
                        Categorias
                    </Link>
                    <Link
                        to={"/usuarios"}
                        className="me-3 py-2 text-dark text-decoration-none"
                    >
                        Usuarios
                    </Link>
                    <Link
                        to={"/nosotros"}
                        className="me-3 py-2 text-dark text-decoration-none"
                    >
                        Nosotros
                    </Link>
                    <Link
                        to={"/ejemplos"}
                        className="me-3 py-2 text-dark text-decoration-none"
                    >
                        Ejemplos
                    </Link>
                    <LogButton logged={props.logged} />
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
