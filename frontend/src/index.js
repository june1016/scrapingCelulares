import React from "react";
import { createRoot } from "react-dom/client"; // Importar la función createRoot desde react-dom/client
import App from "./App";

const root = createRoot(document.getElementById("root")); // Crear un root para renderizar la aplicación
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
