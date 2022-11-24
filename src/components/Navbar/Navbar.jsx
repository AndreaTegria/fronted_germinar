import logo from "./logo1.png"
import { Link } from "react-router-dom";
import LogButton from "./LogButton";

function Navbar(props) {
    return (
       
       
       <div className="mx-5 my-3"  style={{  background: "",fontFamily: "",fontWeight: "", color : "Highlight", }}>
            <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
                

                <img src= {logo} alt="" width="260px"/>
              

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
                        to={"/nosotros"}
                        className="me-3 py-2 text-dark text-decoration-none"
                    >
                        Nosotros
                    </Link>

                    <Link
                        to={"/usuarios"}
                        className="me-3 py-2 text-dark text-decoration-none"
                    >
                        Usuarios
                    </Link>

                   
                    <LogButton logged={props.logged} />
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
