import React, { useState } from "react";
import Error from "./Error";

const Pregunta = ({setPresupuesto, setRestante}) => {
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);
  const handlePresupuesto = e => {
    setCantidad(parseInt(e.target.value));
  };

  const handleSubmit = e => {
    e.preventDefault();
    //Validar
    if (cantidad < 1 || isNaN( cantidad )) {
      setError(true)
      return;
    }
    // Si se pasa la validación
    setError(false);
    setPresupuesto(cantidad);
    setRestante(cantidad)

  };

  return (
    <>
      <h2>Coloca tu presupuesto</h2>
      { error ? <Error mensaje="El Presupuesto es Incorrecto"/> : null}
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          name="cantidad"
          onChange={handlePresupuesto}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir presupuesto"
        />
      </form>
    </>
  );
};

export default Pregunta;
