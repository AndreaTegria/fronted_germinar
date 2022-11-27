import { getRequest } from "../../js/getData";
let backendConfig = require("../../js/backendConfig");
let { useNavigate } = require("react-router-dom");


function CreateUsuario(props) {
    let navigate = useNavigate();
    navigate("/usuarios");

    return (
        <div className="col-12 w-75 mx-auto">
            <h3>Pagina: Crear Usuario</h3>
            <form>
                <div class="row g-3">
                    <div class="">
                        <label for="firstName" class="form-label">
                            Nombre Persona
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            id="firstName"
                            placeholder="Nombre de la persona"
                            defaultValue=""
                            required={true}
                            minLength={4}
                        />
                    </div>

                    <div class="col-12">
                        <label for="username" class="form-label">
                            Nombre de Usuario
                        </label>
                        <div class="input-group has-validation">
                            <span class="input-group-text">@</span>
                            <input
                                type="text"
                                class="form-control"
                                id="username"
                                placeholder="Username"
                                defaultValue=""
                                required={true}
                                minLength={4}
                            />
                        </div>
                    </div>

                    <div class="col-12">
                        <label for="email" class="form-label">
                            Correo
                        </label>
                        <input
                            type={"email"}
                            class="form-control"
                            id="email"
                            placeholder="ejemplo@dominio.com"
                            defaultValue=""
                            required={true}
                        />
                    </div>

                    <div class="col-12">
                        <label for="password" class="form-label">
                            Contrasena
                        </label>
                        <input
                            type={"password"}
                            class="form-control"
                            id="password"
                            defaultValue=""
                            required={true}
                        />
                    </div>

                    <div class="col-12">
                        <label for="password2" class="form-label">
                            Repita la Contrasena:
                        </label>
                        <input
                            type={"password"}
                            class="form-control"
                            id="password2"
                            defaultValue=""
                            required={true}
                        />
                    </div>

                    <hr class="my-4" />

                    <button
                        class="w-100 btn btn-primary btn-lg"
                        type="submit"
                      
                                                        
                            onClick={(e) => {
                             
                                onClickSubmit(navigate);
                            }}
                            
                                                        
                            
                        
                    >
                        Continue to checkout
                    </button>
                </div>
            </form>
        </div>
    );
}

function onClickSubmit(navigate) {
    let url = backendConfig.FULL_API_PATH + "usuarios/create";
    let firstName = document.getElementById("firstName").value;
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let data = {
        firstName,
        username,
        email,
        password,
    };
    console.log(firstName);
    let promiseCreate = getRequest(url, {}, "post", data);
    promiseCreate
        .then(function (res) {
        
            if (res.status < 300) {
                console.log("usuario creado");
                navigate("/usuarios");
              

            }
             console.log(res);
        })
        .catch(function (err) {
            console.log(err);
        });
}

export default CreateUsuario;
