import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import "./styles.css"; // Importar el archivo CSS correctamente

function ReporteGenerado() {
  const location = useLocation();
  const navigate = useNavigate();
  const { productos, criterio } = location.state || {
    productos: [],
    criterio: "puntaje_general",
  };

  if (productos.length < 2) {
    return (
      <div>
        <h1 className="report-title">Reporte Generado</h1>{" "}
        {/* Aplicar la clase correctamente */}
        <p>No se encontraron suficientes productos para generar el reporte.</p>
        <button className="back-button" onClick={() => navigate("/")}>
          Volver a Criterios de Búsqueda
        </button>
      </div>
    );
  }

  const celular1 = productos[0];
  const celular2 = productos[1];

  const dataComparacion = {
    labels: [
      "Diseño",
      "Pantalla",
      "Rendimiento",
      "Cámaras",
      "SO",
      "Batería",
      "Audio",
      "Otros",
      "Usuarios",
    ],
    datasets: [
      {
        label: celular1.nombre,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255, 99, 132, 0.4)",
        hoverBorderColor: "rgba(255, 99, 132, 1)",
        data: [
          celular1.puntaje_diseno,
          celular1.puntaje_pantalla,
          celular1.puntaje_rendimiento,
          celular1.puntaje_camaras,
          celular1.puntaje_so,
          celular1.puntaje_bateria,
          celular1.puntaje_audio,
          celular1.puntaje_otros,
          celular1.puntaje_usuarios,
        ],
      },
      {
        label: celular2.nombre,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(54, 162, 235, 0.4)",
        hoverBorderColor: "rgba(54, 162, 235, 1)",
        data: [
          celular2.puntaje_diseno,
          celular2.puntaje_pantalla,
          celular2.puntaje_rendimiento,
          celular2.puntaje_camaras,
          celular2.puntaje_so,
          celular2.puntaje_bateria,
          celular2.puntaje_audio,
          celular2.puntaje_otros,
          celular2.puntaje_usuarios,
        ],
      },
    ],
  };

  const dataTop10 = {
    labels: productos.map(
      (celular, index) => `#${index + 1} ${celular.nombre}`
    ),
    datasets: [
      {
        label: `Top 10 celulares por ${
          criterio ? criterio.replace("_", " ") : "puntaje_general"
        }`,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75, 192, 192, 0.4)",
        hoverBorderColor: "rgba(75, 192, 192, 1)",
        data: productos
          .map((celular) => celular[criterio || "puntaje_general"])
          .sort((a, b) => b - a), // Orden descendente
      },
    ],
  };

  return (
    <div className="container">
      {" "}
      {/* Aplicar la clase correctamente */}
      <h1 className="report-title">
        Reporte Generado:{" "}
        {criterio ? criterio.replace("_", " ") : "puntaje_general"}
      </h1>
      <div className="top-cell">
        {" "}
        {/* Aplicar la clase correctamente */}
        <div className="cell-details">
          {" "}
          {/* Aplicar la clase correctamente */}
          <h2>{`Top 1: ${celular1.nombre}`}</h2>
          <ul>
            <li>Precio: {celular1.precio}</li>
            <li>Puntaje General: {celular1.puntaje_general}</li>
            <li>Puntaje Diseño: {celular1.puntaje_diseno}</li>
            <li>Puntaje Pantalla: {celular1.puntaje_pantalla}</li>
            <li>Puntaje Rendimiento: {celular1.puntaje_rendimiento}</li>
            <li>Puntaje Cámaras: {celular1.puntaje_camaras}</li>
            <li>Puntaje SO: {celular1.puntaje_so}</li>
            <li>Puntaje Batería: {celular1.puntaje_bateria}</li>
            <li>Puntaje Audio: {celular1.puntaje_audio}</li>
            <li>Puntaje Otros: {celular1.puntaje_otros}</li>
            <li>Puntaje Usuarios: {celular1.puntaje_usuarios}</li>
          </ul>
        </div>
        <div className="cell-details">
          {" "}
          {/* Aplicar la clase correctamente */}
          <h2>{`Top 2: ${celular2.nombre}`}</h2>
          <ul>
            <li>Precio: {celular2.precio}</li>
            <li>Puntaje General: {celular2.puntaje_general}</li>
            <li>Puntaje Diseño: {celular2.puntaje_diseno}</li>
            <li>Puntaje Pantalla: {celular2.puntaje_pantalla}</li>
            <li>Puntaje Rendimiento: {celular2.puntaje_rendimiento}</li>
            <li>Puntaje Cámaras: {celular2.puntaje_camaras}</li>
            <li>Puntaje SO: {celular2.puntaje_so}</li>
            <li>Puntaje Batería: {celular2.puntaje_bateria}</li>
            <li>Puntaje Audio: {celular2.puntaje_audio}</li>
            <li>Puntaje Otros: {celular2.puntaje_otros}</li>
            <li>Puntaje Usuarios: {celular2.puntaje_usuarios}</li>
          </ul>
        </div>
      </div>
      <div className="chart-container">
        <div>
          <h3>Comparación de los dos mejores celulares</h3>
          <Bar data={dataComparacion} />
        </div>
        <div>
          <h3>
            Top 10 Celulares según {criterio ? criterio.replace("_", " ") : ""}
          </h3>
          <Bar data={dataTop10} />
        </div>
        <button className="back-button" onClick={() => navigate("/")}>
          Volver a Criterios de Búsqueda
        </button>
      </div>
    </div>
  );
}

export default ReporteGenerado;
