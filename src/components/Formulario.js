import React, { useState } from "react";
import Error from "./Error";
import shortid from 'shortid';
import PropTypes from 'prop-types';
const Formulario = ({setGasto, setCrearGasto}) => {
  const [nombre, setNombre] = useState("");

  const [cantidad, setCantidad] = useState(0);

  const [error, setError] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    //validar check
    if (nombre.trim() === '' || cantidad < 1 || isNaN( cantidad )) {
      setError(true);
      return;
    }
    //Construir el gasto check
    const gasto = {
      nombre,
      cantidad,
      id: shortid.generate()
    }
    //Pasar el gast al componente principal check
    setGasto(gasto);
    setCrearGasto(true);
    //reset form
    setNombre("");
    setCantidad(0);

  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Agrega tus gastos aquí</h2>
      { error ? <Error mensaje="Ambos campos son bligatorios o Presupuesto Incorrecto" /> : null }

      <div className="campo">
        <label>Nombre Gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          value={nombre}
          onChange={ e => setNombre(e.target.value)}
        />
      </div>
      <div className="campo">
        <label>Cantidad Gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 100"
          value={cantidad}
          onChange={ e => setCantidad( parseInt(e.target.value) )}
        />
      </div>
      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar Gasto"
      />
    </form>
  );
};

Formulario.propTypes = {
  setGasto: PropTypes.func.isRequired,
  setCrearGasto: PropTypes.func.isRequired
}

export default Formulario;
