
import './css/App.css';

//Components
import Navbar from "./components/Navbar/Navbar";
import Nosotros from "./components/Navbar/Nosotros";
import Home from './components/Navbar/Home';
import Footer from './components/Navbar/Footer';
import EjemplosIndex from './components/ejemplos';
import ComponenteFuncion from './components/ejemplos/ComponenteFuncion';
import ComponenteClase from './components/ejemplos/ComponenteClase';
import HookEjemplo from './components/ejemplos/HookEjemplo';
import CategoriasIndex from './components/categorias';
import ProductosIndex from './components/productos';
import CreateUsuario from './components/usuarios/createUsuario';
import ActualizarUsuario from './components/usuarios/actualizarUsuario';
import EliminarUsuario from './components/usuarios/eliminarUsuario';
import UsuariosIndex from './components/usuarios';
import LoginView from './components/usuarios/login';

import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <div className="App">
        <Navbar logged={false}/> 
        <Routes>
          <Route path="/"element={<Home/>}/>
          <Route path="/nosotros" element={<Nosotros/>}/>
          <Route path="/ejemplos" element={<EjemplosIndex/>}/>
          <Route path="/ejemplos/funcion" element={<ComponenteFuncion msn={"Mensaje por PROPS de componente Función"}/>}/>
          <Route path="/ejemplos/clase" element={<ComponenteClase msn={"Mensaje por PROPS de componente Clase"}/>}/>
          <Route path="/ejemplos/hook" element={<ComponenteClase msn={"Mensaje por PROPS de componente Clase"}/>}/>
          <Route
                        path="/usuarios/create"
                        element={<CreateUsuario />}
                    />
                      <Route
                        path="/usuarios/update/:idUsuario"
                        element={<ActualizarUsuario />}
                    />
                      <Route
                        path="/usuarios/delete/:idUsuario"
                        element={<EliminarUsuario />}
                    />
          <Route path="/productos" element={<ProductosIndex/>}/>
          <Route path="/categorias" element={<CategoriasIndex/>}/>
          <Route path="/usuarios" element={<UsuariosIndex/>}/>
          <Route path="/login" element={<LoginView/>}/>
          <Route path="/ejemplos/hook" element={<HookEjemplo />} />
        </Routes>
    
        <Footer/>
      
      </div>
    </div>
  );


}

export default App;
