import "./App.css";
import TurnForm from "./components/turnForm";
import TurnList from "./components/turnList";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="Digiturno">
        <h1>Digiturno</h1>
        <nav>
          <Link to="/crear-Turno">Crear turno</Link>
          <Link to="/lista-Turno">Lista de turnos</Link>
        </nav>

        <Routes>
          <Route path="/crear-turno" element={<TurnForm />} />
          <Route path="/lista-turno" element={<TurnList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
