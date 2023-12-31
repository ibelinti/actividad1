import "./App.css";
import { Route, Routes } from "react-router-dom";
import { NavLink } from "./NavLink";
import { Home } from "./components/Home";
import { Planes } from "./components/Planes";
import { Login } from "./components/Login";
import { Detalles } from "./components/Detalles";
import { Registro } from "./components/Registro";
function App() {
  return (
    <div className="App">
      <header className="App-Header"> 
        <h1>Actividad 1</h1>
        <div className="App-Menu">
          <nav className="App-Nav">
            <ul>
              <li>
                <NavLink to="/">Inicio</NavLink>
              </li>
              <li>
                <NavLink to="/Planes">Planes</NavLink>
              </li>            
              <li>
                <NavLink to="/Registro">Registro</NavLink>
              </li>
              <li>
                <NavLink to="/IniciarSesion">Iniciar Sesión</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Planes" element={<Planes />}></Route>
        <Route path="/IniciarSesion" element={<Login />}></Route>
        <Route path="/Registro" element={<Registro />}></Route>
        <Route path="/movies/:id" element={<Detalles />}></Route>
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
