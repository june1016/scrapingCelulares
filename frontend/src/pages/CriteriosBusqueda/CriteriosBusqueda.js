import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./styles.css";

function CriteriosBusqueda() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.get("http://localhost:5000/api/celulares", {
        params: {
          precio_min: data.precioMin,
          precio_max: data.precioMax,
          criterio: data.criterio,
        },
      });

      navigate("/reporte", {
        state: { productos: response.data, criterio: data.criterio },
      });
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  return (
    <div className="container">
      <h1 className="heading">Criterios de Búsqueda</h1>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label className="form-label">Precio Mínimo:</label>
          <input
            className="form-input input input-bordered w-full"
            type="number"
            {...register("precioMin", {
              required: "El precio mínimo es obligatorio",
            })}
          />
          {errors.precioMin && (
            <p className="text-red-500">{errors.precioMin.message}</p>
          )}
        </div>
        <div className="form-group">
          <label className="form-label">Precio Máximo:</label>
          <input
            className="form-input input input-bordered w-full"
            type="number"
            {...register("precioMax", {
              required: "El precio máximo es obligatorio",
            })}
          />
          {errors.precioMax && (
            <p className="text-red-500">{errors.precioMax.message}</p>
          )}
        </div>
        <div className="form-group">
          <label className="form-label">Criterio:</label>
          <select
            className="form-select select select-bordered w-full"
            {...register("criterio", {
              required: "El criterio es obligatorio",
            })}
          >
            <option value="puntaje_general">Puntaje General</option>
            <option value="puntaje_diseno">Puntaje Diseño</option>
            <option value="puntaje_pantalla">Puntaje Pantalla</option>
            <option value="puntaje_rendimiento">Puntaje Rendimiento</option>
            <option value="puntaje_camaras">Puntaje Cámaras</option>
            <option value="puntaje_so">Puntaje SO</option>
            <option value="puntaje_bateria">Puntaje Batería</option>
            <option value="puntaje_audio">Puntaje Audio</option>
            <option value="puntaje_otros">Puntaje Otros</option>
            <option value="puntaje_usuarios">Puntaje Usuarios</option>
          </select>
          {errors.criterio && (
            <p className="text-red-500">{errors.criterio.message}</p>
          )}
        </div>
        <button className="form-button btn btn-primary w-full" type="submit">
          Buscar
        </button>
      </form>
    </div>
  );
}

export default CriteriosBusqueda;
