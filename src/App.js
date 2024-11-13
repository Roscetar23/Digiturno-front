import "./App.css";
import TurnForm from "./components/turnForm";
import TurnList from "./components/turnList";
import CreatePerfilForm from "./components/createPerfilForm";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="Digiturno">
        <h1>Digiturno</h1>
        <nav>
          <Link to="/crear-Turno">Crear turno</Link>
          <Link to="/lista-Turno">Lista de turnos</Link>
          <Link to="/crear-perfil">Crear perfil</Link>
        </nav>

        <Routes>
          <Route path="/crear-turno" element={<TurnForm />} />
          <Route path="/lista-turno" element={<TurnList />} />
          <Route path="/crear-perfil" element={<CreatePerfilForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
