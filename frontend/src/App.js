import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CriteriosBusqueda from "./pages/CriteriosBusqueda/CriteriosBusqueda"; // Importar el componente CriteriosBusqueda
import ReporteGenerado from "./pages/ReporteGenerado/ReporteGenerado"; // Importar el componente ReporteGenerado

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Definir las rutas para los componentes CriteriosBusqueda y ReporteGenerado */}
          <Route path="/" element={<CriteriosBusqueda />} />
          <Route path="/reporte" element={<ReporteGenerado />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
